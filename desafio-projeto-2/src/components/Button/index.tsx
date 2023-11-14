import { FC } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  text: string;
  handleOnClick: () => void;
}

export const Button: FC<ButtonProps> = ({ handleOnClick, text }) => (
  <ButtonContainer onClick={handleOnClick}>{text}</ButtonContainer>
);
