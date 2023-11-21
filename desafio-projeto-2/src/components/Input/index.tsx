import { FC, useState } from "react";
import { InputContainer } from "./styles";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: FC<InputProps> = ({ ...rest }) => {
  const [value, setValue] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <InputContainer value={value} onChange={handleInputChange} {...rest} />
  );
};
