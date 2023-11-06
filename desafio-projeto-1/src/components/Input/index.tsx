import { ChangeEvent, FC, InvalidEvent } from "react";
import styles from "./index.module.css";

interface InputProps {
  text: string;
  handleInputTextChange(event: ChangeEvent<HTMLInputElement>): void;
}

export const Input: FC<InputProps> = ({ handleInputTextChange, text }) => {
  function handleTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório.");
  }

  return (
    <input
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
      value={text}
      onChange={handleInputTextChange}
      required
      onInvalid={handleTaskInvalid}
    />
  );
};
