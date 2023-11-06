import styles from "./index.module.css";

interface TotalTasksCounterProps {
  totalTasksQuantity: number;
}

export function TotalTasksCounter({
  totalTasksQuantity,
}: TotalTasksCounterProps) {
  return (
    <div className={styles.createdTasksCounter}>
      <span>{"Tarefas criadas"}</span>
      <div className={styles.taskCounter}>{totalTasksQuantity}</div>
    </div>
  );
}
