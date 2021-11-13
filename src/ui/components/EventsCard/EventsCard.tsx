import React from "react";
import { Button } from "../Button/Button";
import { Divider } from "../Divider/Divider";
import { InfoCard } from "../InfoCard/InfoCard";
import { ContentContainer, EventCardContainer } from "./EventsCard.style";
import moment from "moment";
import { RepositoryTypes } from "../../../@types/Repository";
import { formatNumber } from "services/utils/formatNumber";

interface EventsCardProps {
  type: string;
  createdBy: string;
  repo: RepositoryTypes;
  createdAt: string;
  picture: string;
}

export const EventsCard: React.FC<EventsCardProps> = ({
  type,
  createdBy,
  repo,
  createdAt,
  picture,
}) => {
  return (
    <EventCardContainer>
      <InfoCard
        src={picture}
        title={
          <>
            <strong>{createdBy}</strong> {type}{" "}
            <strong>{repo?.full_name}</strong>
          </>
        }
        createdAt={moment(createdAt).startOf("day").fromNow()}
      />
      <ContentContainer>
        <Button onClick={() => ""} title="Star" icon="star-o" />
        <h2>{repo?.full_name}</h2>
        <p>{repo?.description}</p>
        <div>
          {repo?.language && <span>{repo?.language}</span>}

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
