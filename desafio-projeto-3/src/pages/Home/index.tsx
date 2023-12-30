import { Cover } from "../../components/Cover";
import { Profile } from "./components/Profile";
import { HomePageContainer } from "./styles";

export function HomePage() {
  return (
    <HomePageContainer>
      <Cover />
      <Profile />
    </HomePageContainer>
  );
}
