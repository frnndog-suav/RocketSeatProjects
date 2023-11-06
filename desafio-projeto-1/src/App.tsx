import styles from "./App.module.css";
import ClipBoardImg from "./assets/clipboard.svg";
import { CreateButton } from "./components/CreateButton";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.newTaskContainer}>
          <Input />
          <CreateButton />
        </div>

        <div className={styles.tasksContainer}>
          <div className={styles.tasksContainerHeader}>
            <div className={styles.createdTasksCounter}>
              <span>Tarefas criadas</span>
              <div className={styles.taskCounter}>10</div>
            </div>
            <div className={styles.finishedTasksCounter}>
              <span>Concluídas</span>
              <div className={styles.taskCounter}>10</div>
            </div>
          </div>

          {/* <div className={styles.taskContainerBody}>
            <img src={ClipBoardImg} alt="Prancheta" />
            <div>
              <span className={styles.boldText}>
                {"Você ainda não tem tarefas cadastradas"}
              </span>
              <span>{"Crie tarefas e organize seus itens a fazer"}</span>
            </div>
          </div> */}

          <div className={styles.taskList}>
            <Task text="Integer urna interdum massa libero auctor neque turpis turpis semper." />
            <Task text="Integer urna interdum massa libero auctor neque turpis turpis semper." />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
