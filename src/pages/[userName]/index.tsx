import React, { useEffect } from "react";
import type { NextPage } from "next";
import {
  EventsTitle,
  RepositoriesContainer,
  RepositoriesList,
  RepositoriesTitle,
  UserPageContainer,
} from "ui/styles/page/user.style";
import { EventsCard } from "ui/components/EventsCard/EventsCard";
import { InfoCard } from "ui/components/InfoCard/InfoCard";
import { Button } from "ui/components/Button/Button";
import { useRepository } from "hooks/Repository";
import { useSession } from "next-auth/client";
import { useEvent } from "hooks/Event";
import { getEventTypeLabel } from "services/utils/getEventTypeLabel";
import { Loading } from "ui/components/Loading/Loading";

const User: NextPage = () => {
  const {
    repositories,
    getRepositories,
    loadingRepositories,
  } = useRepository();
  const { events, getEvents, loadingEvents } = useEvent();
  const [session] = useSession();

  useEffect(() => {
    getRepositories();
    getEvents();
  }, [session?.user]);

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
            repositories.map((reository) => (
              <InfoCard
                key={reository?.id}
                src={reository?.owner?.avatar_url}
                title={reository?.full_name}
              />
            ))
          )}
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
        <div>
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
                />
              )
            );
          })}
        </div>
      )}
    </UserPageContainer>
  );
};

export default User;
