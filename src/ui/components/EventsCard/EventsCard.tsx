import React from "react";
import { Button } from "../Button/Button";
import { Divider } from "../Divider/Divider";
import { InfoCard } from "../InfoCard/InfoCard";
import {
  ContentContainer,
  EventCardContainer,
  LanguageContainer,
} from "./EventsCard.style";
import moment from "moment";
import { RepositoryTypes } from "../../../@types/Repository";
import { formatNumber } from "services/utils/formatNumber";
import Link from "next/link";
import { TagLanguageColor } from "../LanguageColor/LanguageColor";
import { LANGUAGE_COLOR } from "services/utils/laguageColors";

interface EventsCardProps {
  type: string;
  createdBy: string;
  repo: RepositoryTypes;
  createdAt: string;
  picture: string;
  setRepository: (repository: RepositoryTypes) => void;
}

export const EventsCard: React.FC<EventsCardProps> = ({
  type,
  createdBy,
  repo,
  createdAt,
  picture,
  setRepository,
}) => {
  return (
    <EventCardContainer>
      <InfoCard
        src={picture}
        title={
          <>
            <a
              href={`http://github.com/${createdBy}`}
              rel="noreferrer"
              target="_blank"
            >
              <strong>{createdBy}</strong>{" "}
            </a>
            {type}{" "}
            <Link href={repo?.full_name}>
              <a onClick={() => setRepository(repo)}>
                <strong>{repo?.full_name}</strong>
              </a>
            </Link>
          </>
        }
        createdAt={moment(createdAt).startOf("day").fromNow()}
      />
      <ContentContainer>
        <Button onClick={() => ""} title="Star" icon="star-o" />
        <Link href={repo?.full_name}>
          <a onClick={() => setRepository(repo)}>
            <h2>{repo?.full_name}</h2>
          </a>
        </Link>
        <p>{repo?.description}</p>
        <div>
          {repo?.language && (
            <LanguageContainer>
              <TagLanguageColor
                color={LANGUAGE_COLOR[`${repo?.language}`]}
                size={10}
              />
              <span>{repo?.language}</span>
            </LanguageContainer>
          )}

          {Number(repo?.stargazers_count) !== 0 && (
            <span>
              <i className="fa fa-star-o"></i>{" "}
              {formatNumber(repo?.stargazers_count.toString())}
            </span>
          )}

          {Number(repo?.open_issues_count) !== 0 && (
            <span>{repo?.open_issues_count} issues</span>
          )}

          {Number(repo?.watchers_count) !== 0 && (
            <span>
              <i className="fa fa-eye"></i>{" "}
              {formatNumber(repo?.watchers_count.toString())}
            </span>
          )}
          {repo?.updated_at && (
            <span>updated {moment(repo.updated_at).format("MMM DD")}</span>
          )}
        </div>
      </ContentContainer>
      <Divider />
    </EventCardContainer>
  );
};
