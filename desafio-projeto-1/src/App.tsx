import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./App.module.css";
import ClipBoardImg from "./assets/clipboard.svg";
import { CreateButton } from "./components/CreateButton";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { TaskObj } from "./types";

function App() {  
  const [newTask, setNewTask] = useState<TaskObj>({
    id: 1,
    isChecked: false,
    text: "",
  });

  function handleInputTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask({ ...newTask, text: event.target.value });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.newTaskContainer} onSubmit={handleSubmit}>
          <Input
            handleInputTextChange={handleInputTextChange}
            text={newTask.text}
          />
          <CreateButton />
        </form>

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
            <Task text="Integer urna interdum massa libero auctor neque turpis turpis semper. Vivamus ornare metus quis quam sagittis finibus." />
            <Task text="Integer urna interdum massa libero auctor neque turpis turpis semper." />
            <Task text="Integer urna interdum massa libero auctor neque turpis turpis semper. Nulla aliquet dolor auctor est volutpat, eget molestie dui pharetra. Praesent eget sapien mollis, hendrerit sem non, aliquam risus." />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
