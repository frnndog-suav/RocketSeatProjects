import Intro from "../../assets/intro.svg";
import { coffeesList } from "../../mocks/coffeesList";
import { MenuOption } from "./components/MenuOption";
import { HomeContainer, MenuContainer, MenuGrid } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <img src={Intro} />
      <MenuContainer>
        <span>{"Nossos Cafés"}</span>
        {/* <MenuRow>
          <MenuOption />
          <MenuOption />
          <MenuOption />
          <MenuOption />
        </MenuRow> */}
        <MenuGrid>
          {/* <MenuOption />
          <MenuOption />
          <MenuOption />
          <MenuOption /> */}
          {coffeesList.map((coffee) => (
            <MenuOption key={coffee.id} coffee={coffee} />
          ))}
        </MenuGrid>
      </MenuContainer>
    </HomeContainer>
  );
};
