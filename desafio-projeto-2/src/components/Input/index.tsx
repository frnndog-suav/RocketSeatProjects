import { FC } from "react";
import { InputContainer } from "./styles";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: FC<InputProps> = ({ ...rest }) => {
  return <InputContainer {...rest} />;
};
