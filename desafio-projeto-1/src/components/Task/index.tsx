import { useState } from "react";
import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";
import styles from "./index.module.css";

interface TaskProps {
  id: string;
  text: string;
  updateTasksList(id: string, isChecked: boolean): void;
  removeTask(id: string): void;
}

export function Task({ id, text, updateTasksList, removeTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function switchCheckboxState() {
    const newValue = !isChecked;
    setIsChecked(newValue);
    updateTasksList(id, newValue);
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkboxAndText}>
        <Checkbox handleChecked={switchCheckboxState} isChecked={isChecked} />
        <span
          className={
            isChecked ? styles.taskTexChecked : styles.taskTextUnchecked
          }>
          {text}
        </span>
      </div>
      <DeleteButton handleOnClick={removeTask} id={id} />
    </div>
  );
}
