import { FC, useState } from "react";
import { Counter } from "../../../../components/Counter";
import { ShoppingCartButton } from "../../../../components/ShoppingCartButton";
import { CoffeeMenuItem, ShoppingCartItem } from "../../../../constants/types";
import { useShoppingCartContext } from "../../../../contexts";
import {
  ActionsContainer,
  CoffeeTag,
  MenuOptionBottom,
  MenuOptionContainer,
  TagsContainer,
  ValueContainer,
} from "./styles";

interface MenuOptionProps {
  coffee: CoffeeMenuItem;
}

export const MenuOption: FC<MenuOptionProps> = ({ coffee }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const { handleAddItem } = useShoppingCartContext();

  function handleDecreaseQuantity() {
    setItemQuantity((currentCount) => currentCount - 1);
  }

  function handleIncreaseQuantity() {
    setItemQuantity((currentCount) => currentCount + 1);
  }

  function handleAddToShoppingCart() {
    const item: ShoppingCartItem = {
      coffee,
      quantity: itemQuantity,
    };

    handleAddItem(item);
  }

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
          <Counter
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            itemQuantity={itemQuantity}
          />
          <ShoppingCartButton handleOnClick={handleAddToShoppingCart} />
        </ActionsContainer>
      </MenuOptionBottom>
    </MenuOptionContainer>
  );
};
