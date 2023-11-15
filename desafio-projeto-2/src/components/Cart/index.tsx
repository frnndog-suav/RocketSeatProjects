import { ShoppingCart } from "@phosphor-icons/react";
import { CartContainer, CartBadge, CounterBadge } from "./styles";

export const Cart = () => {
  return (
    <CartContainer>
      <CartBadge>
        <ShoppingCart size={24} weight="fill" />
      </CartBadge>
      <CounterBadge count={2} />
    </CartContainer>
  );
};
