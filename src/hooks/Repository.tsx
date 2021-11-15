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
import { api } from "services/api";
import { CommitTypes } from "../@types/Commit";
import { TreeTypes } from "../@types/Tree";
import { useRouter } from "next/router";

interface RepositoryProviderProps {
  children: ReactNode;
}

export const RepositoryContext = createContext({} as RepositoryContextTypes);

const RepositoryProvider: React.FC<RepositoryProviderProps> = ({
  children,
}) => {
  const [repositories, setRepositories] = useState<RepositoryTypes[]>([]);
  const [commit, setCommit] = useState<CommitTypes>({} as CommitTypes);
  const [tree, setTree] = useState<TreeTypes[]>([]);
  const [repository, setRepository] = useState<RepositoryTypes>(
    {} as RepositoryTypes
  );
  const [loadingRepositories, setLoadingRepositories] = useState<boolean>(
    false
  );
  const [loadingRepository, setLoadingRepository] = useState<boolean>(false);
  const [loadingTree, setLoadingTree] = useState<boolean>(false);
  const { query, push } = useRouter();

  const getRepositories = async (query: any, page: number = 1) => {
    if (!repositories.length || page !== 1) {
      setLoadingRepositories(true);
      try {
        const { data } = await api.get<RepositoryTypes[]>(
          `/users/${query.userName}/repos`,
          {
            params: { per_page: 5, sort: "updated", page },
          }
        );
        if (page === 1) {
          setRepositories(data);
          setLoadingRepositories(false);
        } else {
          const repos = [...repositories, ...data];
          setRepositories(repos);
          setLoadingRepositories(false);
        }
      } catch (error: any) {
        if (error?.response?.status === 404) {
          push("/404");
          return;
        }
        setLoadingRepositories(false);
        if (page !== 1) {
          return true;
        }
        toast.error(
          "Ops! algo deu errado, verifique sua conexão e tente novamente."
        );
      }
    }
  };

  const getRepository = async (query: any) => {
    if (!repository?.name) {
      setLoadingRepository(true);
      try {
        const { data } = await api.get<RepositoryTypes>(
          `/repos/${query.userName}/${query.repository}`
        );
        setRepository(data);
        setLoadingRepository(false);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          push("/404");
          return;
        }
        setLoadingRepositories(false);
        toast.error(
          "Ops! algo deu errado, verifique sua conexão e tente novamente."
        );
      }
    }
  };

  const getCommit = async () => {
    try {
      const { data } = await api.get<CommitTypes[]>(
        `/repos/${repository.full_name}/commits`
      );
      data[0].totalCommits = data?.length;
      setCommit(data[0]);
      return data[0];
    } catch (error) {
      toast.error(
        "Ops! algo deu errado, verifique sua conexão e tente novamente."
      );
    }
  };

  const getTree = async () => {
    setLoadingTree(true);
    const commit = await getCommit();
    try {
      const { data } = await api.get<{ tree: TreeTypes[] }>(
        `/repos/${repository.full_name}/git/trees/${commit?.sha}`
      );
      setTree(
        data.tree.sort((a, b) => {
          if (a.type < b.type) {
            return 1;
          }
          if (a.type > b.type) {
            return -1;
          }
          return 0;
        })
      );
      setLoadingTree(false);
    } catch (error) {
      setLoadingTree(false);
      toast.error(
        "Ops! algo deu errado, verifique sua conexão e tente novamente."
      );
    }
  };

  useEffect(() => {
    if (query.repository) {
      getTree();
    }
  }, [query, commit, repository]);

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        repository,
        commit,
        tree,
        getRepositories,
        getRepository,
        setRepository,
        loadingRepositories,
        loadingRepository,
        loadingTree,
      }}
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
