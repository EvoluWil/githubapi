export interface CommitTypes {
  sha: string;
  url: string;
  commit: {
    message: string;
    committer: {
      date: string;
    };
  };
  totalCommits: number;
}
