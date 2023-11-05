import { CreateButton } from "./components/CreateButton";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import styles from "./App.module.css";

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
              <div className={styles.taskCounter}>
                10
              </div>
            </div>
            <div className={styles.finishedTasksCounter}>
              <span>Concluídas</span>
              <div className={styles.taskCounter}>
                10
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
