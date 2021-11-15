import React, { useEffect, useState } from "react";
import type { GetServerSideProps } from "next";
import {
  EventsTitle,
  RepositoriesContainer,
  RepositoriesList,
  RepositoriesTitle,
  ShowMore,
  UserPageContainer,
} from "ui/styles/page/user.style";
import { EventsCard } from "ui/components/EventsCard/EventsCard";
import { InfoCard } from "ui/components/InfoCard/InfoCard";
import { useRepository } from "hooks/Repository";
import { useEvent } from "hooks/Event";
import { getEventTypeLabel } from "services/utils/getEventTypeLabel";
import { Loading } from "ui/components/Loading/Loading";
import { useRouter } from "next/router";
import Link from "next/link";
import { Divider } from "ui/components/Divider/Divider";
import { getSession } from "next-auth/client";

const User: React.FC = () => {
  const {
    repositories,
    getRepositories,
    loadingRepositories,
    setRepository,
  } = useRepository();
  const { events, getEvents, loadingEvents } = useEvent();
  const [repoPage, setRepoPage] = useState(2);
  const [eventPage, setEventPage] = useState(2);
  const { asPath, query } = useRouter();

  useEffect(() => {
    if (query.userName) {
      getRepositories(query);
      getEvents(query);
    }
  }, [query]);

  const handleClickmoreRepo = async () => {
    const res = await getRepositories(query, repoPage);
    if (!res) {
      setRepoPage(repoPage + 1);
    }
  };

  const handleClickmoreEvent = async () => {
    const res = await getEvents(query, eventPage);
    if (!res) {
      setEventPage(eventPage + 1);
    }
  };

  return (
    <UserPageContainer>
      <RepositoriesContainer>
        <RepositoriesTitle>
          <h2>Repositories</h2>
        </RepositoriesTitle>
        <RepositoriesList loading={loadingRepositories.toString()}>
          {loadingRepositories ? (
            <Loading />
          ) : (
            repositories.map((repository) => (
              <Link key={repository?.id} href={`${asPath}/${repository.name}`}>
                <a onClick={() => setRepository(repository)}>
                  <InfoCard
                    src={repository?.owner?.avatar_url}
                    title={repository?.full_name}
                  />
                </a>
              </Link>
            ))
          )}
          <Divider />
          <ShowMore onClick={() => handleClickmoreRepo()}>Show more</ShowMore>
        </RepositoriesList>
      </RepositoriesContainer>
      {loadingEvents ? (
        <Loading
          img={
            "https://github.githubassets.com/images/mona-loading-default.gif"
          }
          size="48"
        />
      ) : (
        <section>
          <EventsTitle>All activity</EventsTitle>
          {events.map((event) => {
            const typeLabel = getEventTypeLabel(event?.type);
            return (
              typeLabel !== "" && (
                <EventsCard
                  key={event?.id}
                  type={typeLabel}
                  picture={event?.actor?.avatar_url}
                  createdBy={event?.actor?.login}
                  repo={event?.repo}
                  createdAt={event?.created_at}
                  setRepository={(repository) => setRepository(repository)}
                />
              )
            );
          })}
          <ShowMore
            onClick={() => handleClickmoreEvent()}
            style={{ padding: "2rem" }}
          >
            Show more
          </ShowMore>
        </section>
      )}
    </UserPageContainer>
  );
};

export default User;

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
