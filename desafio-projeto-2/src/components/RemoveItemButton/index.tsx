import { Trash } from "@phosphor-icons/react";
import { FC } from "react";
import { RemoveItemButtonContainer } from "./styles";
import { defaultTheme } from "../../styles/theme/default";

interface RemoveItemButtonProps {
  handleOnClick: () => void;
}

export const RemoveItemButton: FC<RemoveItemButtonProps> = ({
  handleOnClick,
}) => (
  <RemoveItemButtonContainer onClick={handleOnClick}>
    <Trash size={16} color={defaultTheme.purple} />
    <span>REMOVER</span>
  </RemoveItemButtonContainer>
);
