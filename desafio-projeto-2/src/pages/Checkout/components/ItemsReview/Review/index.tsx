import { FC } from "react";
import { Counter } from "../../../../../components/Counter";
import { RemoveItemButton } from "../../../../../components/RemoveItemButton";
import { ShoppingCartItem } from "../../../../../constants/types";
import { useShoppingCartContext } from "../../../../../contexts";
import {
  Divider,
  Item,
  ItemContent,
  ItemContentActions,
  ItemTexts,
} from "./styles";

interface ReviewProps {
  item: ShoppingCartItem;
}

export const Review: FC<ReviewProps> = ({ item }) => {
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromShoppingCart,
  } = useShoppingCartContext();

  function handleIncreaseItemQuantity(handledItem: ShoppingCartItem) {
    increaseItemQuantity(handledItem);
  }

  function handleDecreaseItemQuantity(handledItem: ShoppingCartItem) {
    decreaseItemQuantity(handledItem);
  }

  function handleRemoveItem(handledItem: ShoppingCartItem) {
    removeItemFromShoppingCart(handledItem);
  }

  return (
    <Divider key={item.coffee.id}>
      <Item>
        <img src={item.coffee.imgSrc} alt={item.coffee.name} />
        <ItemContent>
          <ItemTexts>
            <p>{item.coffee.name}</p>
            <span>
              {new Intl.NumberFormat("pt-Br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              }).format(item.coffee.value * item.quantity)}
            </span>
          </ItemTexts>
          <ItemContentActions>
            <Counter
              itemQuantity={item.quantity}
              handleIncreaseQuantity={() => handleIncreaseItemQuantity(item)}
              handleDecreaseQuantity={() => handleDecreaseItemQuantity(item)}
            />
            <RemoveItemButton handleOnClick={() => handleRemoveItem(item)} />
          </ItemContentActions>
        </ItemContent>
      </Item>
    </Divider>
  );
};
