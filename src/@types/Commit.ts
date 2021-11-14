export interface CommitTypes {
  sha: string;
  commit: {
    message: string;
    committer: {
      date: string;
    };
  };
  totalCommits: number;
}
