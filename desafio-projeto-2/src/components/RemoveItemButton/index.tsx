import { Trash } from "@phosphor-icons/react";
import { FC } from "react";
import { defaultTheme } from "../../styles/theme/default";
import { RemoveItemButtonContainer } from "./styles";

interface RemoveItemButtonProps {
  handleOnClick: () => void;
}

export const RemoveItemButton: FC<RemoveItemButtonProps> = ({
  handleOnClick,
}) => (
  <RemoveItemButtonContainer onClick={handleOnClick} type="button">
    <Trash size={16} color={defaultTheme.purple} />
    <span>REMOVER</span>
  </RemoveItemButtonContainer>
);
