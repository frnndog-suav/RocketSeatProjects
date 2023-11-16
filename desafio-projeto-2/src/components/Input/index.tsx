import { useState } from "react";
import { InputContainer } from "./styles";

export const Input = () => {
  const [value, setValue] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return <InputContainer value={value} onChange={handleInputChange} />;
};
