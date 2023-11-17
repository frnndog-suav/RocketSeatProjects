import { FC } from "react";
import { Counter } from "../../../../components/Counter";
import { ShoppingCartButton } from "../../../../components/ShoppingCartButton";
import { Coffee } from "../../../../interfaces/interfaces";
import {
  ActionsContainer,
  CoffeeTag,
  MenuOptionBottom,
  MenuOptionContainer,
  ValueContainer,
} from "./styles";

interface MenuOptionProps {
  coffee: Coffee;
}

export const MenuOption: FC<MenuOptionProps> = ({ coffee }) => {
  return (
    <MenuOptionContainer>
      <img src={coffee.imgSrc} alt={coffee.name} />
      <CoffeeTag>TRADICIONAL</CoffeeTag>
      <span>{coffee.name}</span>
      <p>{coffee.description}</p>
      <MenuOptionBottom>
        <ValueContainer>
          <p>R$</p>
          <span>{coffee.value}</span>
        </ValueContainer>
        <ActionsContainer>
          <Counter />
          <ShoppingCartButton handleOnClick={() => console.log("teste")} />
        </ActionsContainer>
      </MenuOptionBottom>
    </MenuOptionContainer>
  );
};
