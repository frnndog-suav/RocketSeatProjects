import { FC } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  handleOnClick: () => void;
}

export const Button: FC<ButtonProps> = ({ handleOnClick }) => (
  <ButtonContainer onClick={handleOnClick}>
    {"CONFIRMAR PEDIDO"}
  </ButtonContainer>
);
