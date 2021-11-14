import { CommitTypes } from "./Commit";
import { RepositoryTypes } from "./Repository";
import { TreeTypes } from "./Tree";

export interface RepositoryContextTypes {
  repositories: RepositoryTypes[];
  repository: RepositoryTypes;
  commit: CommitTypes;
  tree: TreeTypes[];
  getRepositories: (query: any, page?: number) => Promise<boolean | void>;
  getRepository: (query: any) => Promise<void>;
  loadingRepositories: boolean;
  loadingRepository: boolean;
  loadingTree: boolean;
  setRepository: (newValue: RepositoryTypes) => void;
}
