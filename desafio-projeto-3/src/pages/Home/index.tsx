import { useContext, useEffect } from "react";
import { Card } from "../../components/Card";
import { GithubContext } from "../../context/GithubContext";
import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { CardsListGrid } from "./styles";

export function HomePage() {
  const { getUser, issues } = useContext(GithubContext);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Profile />
      <SearchBar />
      <CardsListGrid>
        {issues.map((issue) => (
          <Card key={`issue-${issue.id}`} issue={issue} />
        ))}
      </CardsListGrid>
    </>
  );
}
