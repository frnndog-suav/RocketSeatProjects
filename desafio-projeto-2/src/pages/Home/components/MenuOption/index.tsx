import ImgCafe from "../../../../assets/coffee/americano.svg";
import { Counter } from "../../../../components/Counter";
import { ShoppingCartButton } from "../../../../components/ShoppingCartButton";
import {
  ActionsContainer,
  CoffeeTag,
  MenuOptionBottom,
  MenuOptionContainer,
  ValueContainer,
} from "./styles";

export const MenuOption = () => {
  return (
    <MenuOptionContainer>
      <img src={ImgCafe} />
      <CoffeeTag>TRADICIONAL</CoffeeTag>
      <span>Expresso Tradicional</span>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <MenuOptionBottom>
        <ValueContainer>
          <p>R$</p>
          <span>9,90</span>
        </ValueContainer>
        <ActionsContainer>
          <Counter />
          <ShoppingCartButton handleOnClick={() => console.log("teste")} />
        </ActionsContainer>
      </MenuOptionBottom>
    </MenuOptionContainer>
  );
};
