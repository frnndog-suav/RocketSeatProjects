import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./styles";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const disabledButton = count <= 0;

  function handleDecreaseQuantity() {
    setCount((currentCount) => currentCount - 1);
  }

  function handleIncreaseQuantity() {
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <CounterContainer>
      <button onClick={handleDecreaseQuantity} disabled={disabledButton}>
        <Minus size={20} />
      </button>
      <input type="number" placeholder="00" value={count} readOnly min={0} />
      <button onClick={handleIncreaseQuantity}>
        <Plus size={20} />
      </button>
    </CounterContainer>
  );
};
