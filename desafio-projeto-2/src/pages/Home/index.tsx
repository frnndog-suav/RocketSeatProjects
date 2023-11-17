import Intro from "../../assets/intro.svg";
import { MenuOption } from "./components/MenuOption";
import { HomeContainer, MenuContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <img src={Intro} />
      <MenuContainer>
        <span>{"Nossos Cafés"}</span>
        <MenuOption />
      </MenuContainer>
    </HomeContainer>
  );
};
 