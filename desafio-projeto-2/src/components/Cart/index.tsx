import { ShoppingCart } from "@phosphor-icons/react";
import { useShoppingCartContext } from "../../contexts";
import { CartBadge, CartContainer, CounterBadge } from "./styles";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const { getShoppingCartItemsAmount } = useShoppingCartContext();

  const itemsAmount = getShoppingCartItemsAmount();

  return (
    <NavLink to={'/checkout'} title="Checkout">
      <CartContainer>
        <CartBadge>
          <ShoppingCart size={24} weight="fill" />
        </CartBadge>
        <CounterBadge count={itemsAmount} />
      </CartContainer>
    </NavLink>
  );
};
