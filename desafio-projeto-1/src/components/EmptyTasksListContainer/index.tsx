import styles from './index.module.css'
import ClipBoardImg from "../../assets/clipboard.svg";

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
