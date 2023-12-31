import { useContext, useEffect } from "react";
import { Card } from "../../components/Card";
import { Cover } from "../../components/Cover";
import { GithubContext } from "../../context/GithubContext";
import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { CardsListGrid, HomePageContainer, HomePageContent } from "./styles";

export function HomePage() {
  const { getUser } = useContext(GithubContext);

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
          <Card
            title="teste 1"
            description="asdasd"
            publicationDate="Há 1 semana"
          />
          <Card
            title="teste 2"
            description="asdasd"
            publicationDate="Há 2 dias"
          />
        </CardsListGrid>
      </HomePageContent>
    </HomePageContainer>
  );
}
