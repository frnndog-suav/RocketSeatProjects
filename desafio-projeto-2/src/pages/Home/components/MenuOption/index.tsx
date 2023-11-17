import { FC } from "react";
import { Counter } from "../../../../components/Counter";
import { ShoppingCartButton } from "../../../../components/ShoppingCartButton";
import { Coffee } from "../../../../interfaces/interfaces";
import {
  ActionsContainer,
  CoffeeTag,
  MenuOptionBottom,
  MenuOptionContainer,
  TagsContainer,
  ValueContainer,
} from "./styles";

interface MenuOptionProps {
  coffee: Coffee;
}

export const MenuOption: FC<MenuOptionProps> = ({ coffee }) => {
  return (
    <MenuOptionContainer>
      <img src={coffee.imgSrc} alt={coffee.name} />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <CoffeeTag key={`${coffee.id}-${tag}`}>{tag}</CoffeeTag>
        ))}
      </TagsContainer>

      <span>{coffee.name}</span>
      <p>{coffee.description}</p>
      <MenuOptionBottom>
        <ValueContainer>
          <p>R$</p>
          <span>
            {new Intl.NumberFormat("pt-Br", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 3,
            }).format(coffee.value)}
          </span>
        </ValueContainer>
        <ActionsContainer>
          <Counter />
          <ShoppingCartButton handleOnClick={() => console.log("teste")} />
        </ActionsContainer>
      </MenuOptionBottom>
    </MenuOptionContainer>
  );
};
