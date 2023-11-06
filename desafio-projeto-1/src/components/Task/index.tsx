import { FC, useState } from "react";
import { Checkbox } from "../Checkbox";
import styles from "./index.module.css";
import { DeleteButton } from "../DeleteButton";

interface TaskProps {
  text: string;
}

export const Task: FC<TaskProps> = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  function switchCheckboxState() {
    setIsChecked((recentValue) => !recentValue);
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
