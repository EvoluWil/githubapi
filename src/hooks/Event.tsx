import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { EventTypes } from "../@types/Event";
import { toast } from "react-toastify";
import { useAuth } from "./Auth";
import { api } from "services/api";
import { EventContextTypes } from "../@types/EventContextTypes";
import { githubApi } from "services/githubApi";

interface EventProviderProps {
  children: ReactNode;
}

export const EventContext = createContext({} as EventContextTypes);

const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<EventTypes[]>([]);
  const { user } = useAuth();
  const [loadingEvents, setLoadingEvents] = useState<boolean>(false);

  const getEvents = async (page: number = 1) => {
    if (user && !events.length) {
      setLoadingEvents(true);
      try {
        const { data } = await api.get<EventTypes[]>(
          `/users/${user?.userName}/received_events`,
          {
            params: { per_page: 5, sort: "created", page },
          }
        );
        for await (let event of data) {
          const { data: repo } = await githubApi.get(`${event.repo.url}`);
          event.repo = repo;
        }
        setEvents(data);
        setLoadingEvents(false);
      } catch (error) {
        setLoadingEvents(false);
        toast.error(
          "Ops! algo deu errado, verifique sua conexão e tente novamente."
        );
      }
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

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
