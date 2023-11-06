import { FC, useState } from "react";
import { Checkbox } from "../Checkbox";
import styles from "./index.module.css";

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
      <Checkbox handleChecked={switchCheckboxState} isChecked={isChecked} />
      <span>{text}</span>
    </div>
  );
};
