import { PlusCircle } from "@phosphor-icons/react";
import styles from "./index.module.css";

export const CreateButton = () => {
  return (
    <button className={styles.button}>
      {"Criar"}
      <PlusCircle size={24}  />
    </button>
  );
};
