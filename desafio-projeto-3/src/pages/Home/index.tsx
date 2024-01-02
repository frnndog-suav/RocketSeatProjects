import { useContext, useEffect } from "react";
import { Card } from "../../components/Card";
import { Cover } from "../../components/Cover";
import { GithubContext } from "../../context/GithubContext";
import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { CardsListGrid, HomePageContainer, HomePageContent } from "./styles";

export function HomePage() {
  const { getUser, issues } = useContext(GithubContext);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomePageContainer>
      <Cover />
      <HomePageContent>
        <Profile />
        <SearchBar />
        <CardsListGrid>
          {issues.map((issue) => (
            <Card
              key={`issue-${issue.id}`}
              title={issue.title}
              description={issue.body}
              publicationDate={issue.created_at}
            />
          ))}
        </CardsListGrid>
      </HomePageContent>
    </HomePageContainer>
  );
}
