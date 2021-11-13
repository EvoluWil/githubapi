import { RepositoryTypes } from "./Repository";

export interface RepositoryContextTypes {
  repositories: RepositoryTypes[];
  getRepositories: () => Promise<void>;
  loadingRepositories: boolean;
}
