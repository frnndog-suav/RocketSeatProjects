import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./App.module.css";
import ClipBoardImg from "./assets/clipboard.svg";
import { CreateButton } from "./components/CreateButton";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { TaskObj } from "./types";

function App() {
  const [tasks, setTasks] = useState<TaskObj[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  function handleInputTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setTasks((taskList) => [
      ...taskList,
      { id: taskList.length + 1, isChecked: false, text: newTask },
    ]);
  }

  function updateTasksList(id: number, isChecked: boolean) {
    const updatedList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked };
      }
      return task;
    });

    setTasks(updatedList);
  }

  function getFinishedTasks() {
    const finishedTasks = tasks.filter((task) => task.isChecked).length;
    return finishedTasks === 0 ? 0 : `${finishedTasks} de ${tasks.length}`;
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.newTaskContainer} onSubmit={handleSubmit}>
          <Input handleInputTextChange={handleInputTextChange} text={newTask} />
          <CreateButton />
        </form>

        <div className={styles.tasksContainer}>
          <div className={styles.tasksContainerHeader}>
            <div className={styles.createdTasksCounter}>
              <span>{"Tarefas criadas"}</span>
              <div className={styles.taskCounter}>{tasks.length}</div>
            </div>
            <div className={styles.finishedTasksCounter}>
              <span>{"Concluídas"}</span>
              <div className={styles.taskCounter}>{getFinishedTasks()}</div>
            </div>
          </div>
          {tasks.length === 0 ? (
            <div className={styles.taskContainerBody}>
              <img src={ClipBoardImg} alt="Prancheta" />
              <div>
                <span className={styles.boldText}>
                  {"Você ainda não tem tarefas cadastradas"}
                </span>
                <span>{"Crie tarefas e organize seus itens a fazer"}</span>
              </div>
            </div>
          ) : (
            <div className={styles.taskList}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  updateTasksList={updateTasksList}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
