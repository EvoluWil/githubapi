import { createContext, ReactNode, useContext, useState } from "react";
import { EventTypes } from "../@types/Event";
import { toast } from "react-toastify";
import { api } from "services/api";
import { EventContextTypes } from "../@types/EventContextTypes";
import { githubApi } from "services/githubApi";

interface EventProviderProps {
  children: ReactNode;
}

export const EventContext = createContext({} as EventContextTypes);

const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<EventTypes[]>([]);
  const [loadingEvents, setLoadingEvents] = useState<boolean>(false);

  const getEvents = async (query: any, page: number = 1) => {
    if (!events.length || page !== 1) {
      setLoadingEvents(true);
      try {
        const { data } = await api.get<EventTypes[]>(
          `/users/${query.userName}/received_events`,
          {
            params: { per_page: 5, sort: "created", page },
          }
        );
        for await (let event of data) {
          const { data: repo } = await githubApi.get(`${event.repo.url}`);
          event.repo = repo;
        }
        if (page === 1) {
          setEvents(data);
          setLoadingEvents(false);
        } else {
          const NewEvents = [...events, ...data];
          setEvents(NewEvents);
          setLoadingEvents(false);
        }
      } catch (error) {
        setLoadingEvents(false);
        if (page !== 1) {
          return true;
        }
        toast.error(
          "Ops! algo deu errado, verifique sua conexão e tente novamente."
        );
      }
    }
  };

  return (
    <EventContext.Provider value={{ events, getEvents, loadingEvents }}>
      {children}
    </EventContext.Provider>
  );
};

const useEvent = () => {
  const context = useContext(EventContext);
  return context;
};

export { useEvent, EventProvider };
