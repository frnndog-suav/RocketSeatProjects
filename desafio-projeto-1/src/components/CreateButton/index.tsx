import { PlusCircle } from "@phosphor-icons/react";
import styles from "./index.module.css";

export function CreateButton() {
  return (
    <button className={styles.button} type="submit">
      {"Criar"}
      <PlusCircle width={"1.5rem"} height={"1.5rem"} />
    </button>
  );
}
