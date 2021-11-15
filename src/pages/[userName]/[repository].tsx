import { useRepository } from "hooks/Repository";
import moment from "moment";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LANGUAGE_COLOR } from "services/utils/laguageColors";
import { useTheme } from "styled-components";
import { Divider } from "ui/components/Divider/Divider";
import { InfoCard } from "ui/components/InfoCard/InfoCard";
import { TagLanguageColor } from "ui/components/LanguageColor/LanguageColor";
import { Loading } from "ui/components/Loading/Loading";
import {
  CommitContainer,
  Display,
  LoadingContainer,
  ProgressLanguage,
  ReleasesContainer,
  RepositoryData,
  RepositoryInfo,
  RepositoryPageContainer,
  RepositoryRouteLink,
  RepositoryTreeContainer,
  Tag,
  TitleRepositoryDetail,
} from "ui/styles/page/repositoryDeatail";

const Repository: NextPage = () => {
  const theme = useTheme();
  const { query } = useRouter();

  const {
    repository,
    getRepository,
    loadingRepository,
    loadingTree,
    tree,
    commit,
  } = useRepository();

  useEffect(() => {
    if (query?.userName) {
      getRepository(query);
    }
  }, [query]);

  return (
    <RepositoryPageContainer>
      {loadingRepository ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <TitleRepositoryDetail>
            <i className="fa fa-book"></i>
            <a
              href={`http://github.com/${repository?.owner?.login}`}
              rel="noreferrer"
              target="_blank"
            >
              <h2>{repository?.full_name}</h2>
            </a>
            <Tag>{repository?.visibility}</Tag>
          </TitleRepositoryDetail>
          <Divider />

          <RepositoryData>
            <RepositoryTreeContainer>
              {loadingTree ? (
                <LoadingContainer>
                  <Loading />
                </LoadingContainer>
              ) : (
                <>
                  <div>
                    <InfoCard
                      src={repository?.owner?.avatar_url}
                      title={
                        <>
                          <strong>
                            <a
                              href={`http://github.com/${repository?.owner?.login}`}
                              rel="noreferrer"
                              target="_blank"
                            >
                              {repository?.owner?.login}
                            </a>
                          </strong>{" "}
                          <Display
                            href={`https://github.com/${repository.full_name}/commit/${commit.sha}`}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {commit?.commit?.message}
                          </Display>
                        </>
                      }
                    />
                    <CommitContainer>
                      <span>
                        {moment(commit?.commit?.committer?.date)
                          .startOf("day")
                          .fromNow()}
                      </span>
                      <span>
                        <a
                          href={`https://github.com/${repository.full_name}/commit`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <i className="fa fa-clock-o"></i>{" "}
                          {commit?.totalCommits}
                        </a>{" "}
                        commits
                      </span>
                    </CommitContainer>
                  </div>
                  <ul>
                    {tree.map((archive) => (
                      <li key={archive?.path}>
                        <a
                          href={`https://github.com/${repository.full_name}/commit/${commit?.sha}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <i
                            className={`fa fa-${
                              archive?.type === "blob" ? "file-o" : "folder"
                            }`}
                          ></i>
                          <h3>{archive?.path}</h3>
                          <p>{commit?.commit?.message}</p>
                          <span>
                            {moment(commit?.commit?.committer?.date)
                              .startOf("day")
                              .fromNow()}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </RepositoryTreeContainer>
            <RepositoryInfo>
              <h3>Abount</h3>
              <p>
                {repository?.description ||
                  "No description, website, or topics provided."}
              </p>
              {repository?.homepage && (
                <div>
                  <i className="fa fa-link"></i>{" "}
                  <RepositoryRouteLink
                    href={`${repository?.homepage}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {repository?.homepage}
                  </RepositoryRouteLink>
                </div>
              )}

              <Divider />
              <h3>Releases</h3>
              <ReleasesContainer>
                <p>
                  <i className="fa fa-tag"></i>
                  <a
                    href={`https://github.com/${repository.full_name}/releases`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    1.0.0
                  </a>{" "}
                  <Tag
                    style={{
                      color: theme?.colors?.success?.main,
                      borderColor: theme?.colors?.success.main,
                    }}
                  >
                    Latest
                  </Tag>
                </p>
                <span>
                  {moment(commit?.commit?.committer?.date)
                    .startOf("day")
                    .fromNow()}
                </span>
              </ReleasesContainer>

              <Divider />
              {repository?.homepage && (
                <>
                  <h3>Languages</h3>
                  <ProgressLanguage
                    color={LANGUAGE_COLOR[`${repository?.language}`]}
                  >
                    <progress value={100} max="100"></progress>
                    <div>
                      <TagLanguageColor
                        color={LANGUAGE_COLOR[`${repository?.language}`]}
                        size={10}
                      />
                      <p>{repository?.language}</p>
                    </div>
                  </ProgressLanguage>
                </>
              )}
            </RepositoryInfo>
          </RepositoryData>
        </>
      )}
    </RepositoryPageContainer>
  );
};

export default Repository;

export const getServerSideProps: GetServerSideProps = async ({
  req,
}): Promise<any> => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
