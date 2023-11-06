import { Trash } from "@phosphor-icons/react";
import styles from "./index.module.css";

export const DeleteButton = () => {
  return (
    <button className={styles.button}>
      <Trash className={styles.trashIcon} />
    </button>
  );
};
