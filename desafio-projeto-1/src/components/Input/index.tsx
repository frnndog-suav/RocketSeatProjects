import { ChangeEvent, useState } from "react";
import styles from "./index.module.css";

export const Input = () => {
  const [text, setText] = useState("");

  function handleInputTextChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <input
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
      value={text}
      onChange={handleInputTextChange}
    />
  );
};
