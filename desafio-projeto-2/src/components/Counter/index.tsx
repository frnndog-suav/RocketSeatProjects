import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./styles";

export const Counter = () => {
  return (
    <CounterContainer>
      <button>
        <Minus size={20} />
      </button>
      <input type="number" placeholder="00" defaultValue={1} readOnly />
      <button>
        <Plus size={20} />
      </button>
    </CounterContainer>
  );
};
