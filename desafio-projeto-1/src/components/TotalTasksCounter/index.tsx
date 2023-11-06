import { FC } from "react";
import styles from "./index.module.css";

interface TotalTasksCounterProps {
  totalTasksQuantity: number;
}

export const TotalTasksCounter: FC<TotalTasksCounterProps> = ({
  totalTasksQuantity,
}) => {
  return (
    <div className={styles.createdTasksCounter}>
      <span>{"Tarefas criadas"}</span>
      <div className={styles.taskCounter}>{totalTasksQuantity}</div>
    </div>
  );
};
