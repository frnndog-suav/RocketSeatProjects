import { TaskObj } from "../../types";
import styles from "./index.module.css";

interface FinishedTasksCounterProps {
  tasks: TaskObj[];
}

export function FinishedTasksCounter({ tasks }: FinishedTasksCounterProps) {
  const finishedTasks = tasks.filter((task) => task.isChecked).length;

  const finishedTasksValue =
    finishedTasks === 0 ? 0 : `${finishedTasks} de ${tasks.length}`;

  return (
    <div className={styles.finishedTasksCounter}>
      <span>{"Concluídas"}</span>
      <div className={styles.taskCounter}>{finishedTasksValue}</div>
    </div>
  );
}
