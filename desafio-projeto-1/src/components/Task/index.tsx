import { FC, useState } from "react";
import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";
import styles from "./index.module.css";

interface TaskProps {
  id: number;
  text: string;
  updateTasksList(id: number, isChecked: boolean): void;
}

export const Task: FC<TaskProps> = ({ id, text, updateTasksList }) => {
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
        <span>{text}</span>
      </div>
      <DeleteButton />
    </div>
  );
};
