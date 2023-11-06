import ClipBoardImg from "../../assets/clipboard.svg";
import styles from "./index.module.css";

export const EmptyTasksListContainer = () => {
  return (
    <div className={styles.taskContainerBody}>
      <img src={ClipBoardImg} alt="Prancheta" />
      <div>
        <span className={styles.boldText}>
          {"Você ainda não tem tarefas cadastradas"}
        </span>
        <span>{"Crie tarefas e organize seus itens a fazer"}</span>
      </div>
    </div>
  );
};
