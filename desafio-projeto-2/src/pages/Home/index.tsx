import Intro from "../../assets/intro.svg";
import { coffeesList } from "../../mocks/coffeesList";
import { MenuOption } from "./components/MenuOption";
import { HomeContainer, MenuContainer, MenuGrid } from "./styles";

export const HomePage = () => {
  return (
    <HomeContainer>
      <img src={Intro} />
      <MenuContainer>
        <span>{"Nossos Cafés"}</span>
        <MenuGrid>
          {coffeesList.map((coffee) => (
            <MenuOption key={coffee.id} coffee={coffee} />
          ))}
        </MenuGrid>
      </MenuContainer>
    </HomeContainer>
  );
};
