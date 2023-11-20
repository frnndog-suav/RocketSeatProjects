import { ShoppingCart } from "@phosphor-icons/react";
import { useShoppingCartContext } from "../../contexts";
import { CartBadge, CartContainer, CounterBadge } from "./styles";

export const Cart = () => {
  const { getShoppingCartItemsAmount } = useShoppingCartContext();

  const itemsAmount = getShoppingCartItemsAmount();

  return (
    <CartContainer>
      <CartBadge>
        <ShoppingCart size={24} weight="fill" />
      </CartBadge>
      <CounterBadge count={itemsAmount} />
    </CartContainer>
  );
};
