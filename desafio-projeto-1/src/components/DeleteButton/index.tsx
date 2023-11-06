import { Trash } from "@phosphor-icons/react";
import styles from "./index.module.css";

interface DeleteButtonProps {
  id: string;
  handleOnClick(id: string): void;
}

export function DeleteButton({ id, handleOnClick }: DeleteButtonProps) {
  return (
    <button className={styles.button} onClick={() => handleOnClick(id)}>
      <Trash className={styles.trashIcon} />
    </button>
  );
}
