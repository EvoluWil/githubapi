import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { RepositoryContextTypes } from "../@types/RepositoryContextTypes";
import { RepositoryTypes } from "../@types/Repository";
import { toast } from "react-toastify";
import { useAuth } from "./Auth";
import { api } from "services/api";

interface RepositoryProviderProps {
  children: ReactNode;
}

export const RepositoryContext = createContext({} as RepositoryContextTypes);

const RepositoryProvider: React.FC<RepositoryProviderProps> = ({
  children,
}) => {
  const [repositories, setRepositories] = useState<RepositoryTypes[]>([]);
  const { user } = useAuth();
  const [loadingRepositories, setLoadingRepositories] = useState<boolean>(
    false
  );

  const getRepositories = async (page: number = 1) => {
    if (user && !repositories.length) {
      setLoadingRepositories(true);
      try {
        const { data } = await api.get<RepositoryTypes[]>(
          `/users/${user?.userName}/repos`,
          {
            params: { per_page: 10, sort: "updated", page },
          }
        );
        setRepositories(data);
        setLoadingRepositories(false);
      } catch (error) {
        setLoadingRepositories(false);
        toast.error(
          "Ops! algo deu errado, verifique sua conexão e tente novamente."
        );
      }
    }
  };

  return (
    <RepositoryContext.Provider
      value={{ repositories, getRepositories, loadingRepositories }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

const useRepository = () => {
  const context = useContext(RepositoryContext);
  return context;
};

export { useRepository, RepositoryProvider };
