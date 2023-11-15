import { ShoppingCartSimple } from "@phosphor-icons/react";
import { ShoppingCartButtonContainer } from "./styles";
import { FC } from "react";

interface ShoppingCartButtonProps {
  handleOnClick: () => void;
}

export const ShoppingCartButton: FC<ShoppingCartButtonProps> = ({
  handleOnClick,
}) => {
  return (
    <ShoppingCartButtonContainer onClick={handleOnClick}>
      <ShoppingCartSimple size={24} weight="fill" />
    </ShoppingCartButtonContainer>
  );
};
