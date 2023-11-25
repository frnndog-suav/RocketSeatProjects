import { Minus, Plus } from "@phosphor-icons/react";
import { FC } from "react";
import { CounterContainer } from "./styles";

interface CounterProps {
  itemQuantity: number;
  handleDecreaseQuantity(): void;
  handleIncreaseQuantity(): void;
}

export const Counter: FC<CounterProps> = ({
  itemQuantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) => {
  const disabledButton = itemQuantity <= 0;

  return (
    <CounterContainer>
      <button
        onClick={handleDecreaseQuantity}
        disabled={disabledButton}
        type="button">
        <Minus size={20} />
      </button>
      <input
        type="number"
        placeholder="00"
        value={itemQuantity}
        readOnly
        min={0}
      />
      <button onClick={handleIncreaseQuantity} type="button">
        <Plus size={20} />
      </button>
    </CounterContainer>
  );
};
