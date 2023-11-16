import Intro from "../../assets/intro.svg";
import { HomeContainer, MenuContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <img src={Intro} />
      <MenuContainer>
        <span>{"Nossos Cafés"}</span>
      </MenuContainer>
    </HomeContainer>
  );
};
