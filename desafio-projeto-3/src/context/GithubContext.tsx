import { createContext, useCallback, useState } from "react";
import { DetailedIssue, GetIssuesResponse, GithubUser, Issue } from "../@types";
import { api } from "../services/api";

const REPO_NAME = "RocketSeatProjects";

type GithubContextType = {
  detailedIssue?: DetailedIssue;
  user?: GithubUser;
  issues: Issue[];
  getUser: () => Promise<void>;
  getIssuesFromRepo: (query: string) => Promise<void>;
  getDetailedIssue: (issueNumber: number) => Promise<void>;
};

export const GithubContext = createContext({} as GithubContextType);

interface GithubProviderProps {
  children: React.ReactNode;
}

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState<GithubUser | undefined>(undefined);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [detailedIssue, setDetailedIssue] = useState<DetailedIssue | undefined>(
    undefined
  );

  const getUser = useCallback(async () => {
    const result = await api.get<GithubUser | undefined>("/users/frnndog-suav");
    setUser(result.data);
  }, []);

  const getIssuesFromRepo = useCallback(
    async (query: string) => {
      if (query === "" || query === undefined) return;

      const formattedQuery = query.trim().replace(" ", "%20");

      const result = await api.get<GetIssuesResponse>(
        `/search/issues?q=${formattedQuery}%20repo:${user?.login}/${REPO_NAME}`
      );
      setIssues(result.data.items);
    },
    [user?.login]
  );

  const getDetailedIssue = useCallback(
    async (issueNumber: number) => {
      const result = await api.get<DetailedIssue>(
        `/repos/${user?.login}/${REPO_NAME}/issues/${issueNumber}`
      );

      setDetailedIssue(result.data);
    },
    [user?.login]
  );

  return (
    <GithubContext.Provider
      value={{
        detailedIssue,
        user,
        issues,
        getUser,
        getIssuesFromRepo,
        getDetailedIssue,
      }}>
      {children}
    </GithubContext.Provider>
  );
}
