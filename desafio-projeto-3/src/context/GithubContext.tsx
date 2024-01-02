import { createContext, useCallback, useState } from "react";
import { api } from "../services/api";

const REPO_NAME = "RocketSeatProjects";

type GithubUser = {
  avatar_url: string;
  bio: string;
  blog: string;
  created_at: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  updated_at: string;
  url: string;
  twitter_username?: boolean;
  hireable?: boolean;
  company?: string;
  email?: string;
};

type GithubContextType = {
  user?: GithubUser;
  getUser: () => Promise<void>;
  getIssuesFromRepo: (query: string) => Promise<void>;
};

export const GithubContext = createContext({} as GithubContextType);

interface GithubProviderProps {
  children: React.ReactNode;
}

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState<GithubUser | undefined>(undefined);

  const getUser = useCallback(async () => {
    const result = await api.get("/users/frnndog-suav");
    console.log("result.data", result.data);
    setUser(result.data);
  }, []);

  const getIssuesFromRepo = useCallback(
    async (query: string) => {
      const result = await api.get(
        `/search/issues/repo:${user?.login}/${REPO_NAME}`,
        {
          params: { q: query },
        }
      );
      console.log("result.data", result.data);
      setUser(result.data);
    },
    [user?.login]
  );

  return (
    <GithubContext.Provider value={{ user, getUser, getIssuesFromRepo }}>
      {children}
    </GithubContext.Provider>
  );
}
