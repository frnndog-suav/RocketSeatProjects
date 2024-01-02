export type GithubUser = {
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  login: string;
  name: string;
  company?: string;
};

export type Issue = {
  id: number;
  title: string;
  created_at: string;
  body: string;
};

export type GetIssuesResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Issue[];
};
