import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import { CreateButton } from "./components/CreateButton";
import { EmptyTasksListContainer } from "./components/EmptyTasksListContainer";
import { FinishedTasksCounter } from "./components/FinishedTasksCounter";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { TotalTasksCounter } from "./components/TotalTasksCounter";
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
      { id: uuidv4(), isChecked: false, text: newTask },
    ]);
    setNewTask("");
  }

  function updateTasksList(id: string, isChecked: boolean) {
    const updatedList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked };
      }
      return task;
    });

    setTasks(updatedList);
  }

  function removeTask(id: string) {
    setTasks((recentTasks) => recentTasks.filter((tasks) => tasks.id !== id));
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
            <TotalTasksCounter totalTasksQuantity={tasks.length} />
            <FinishedTasksCounter tasks={tasks} />
          </div>
          {tasks.length === 0 ? (
            <EmptyTasksListContainer />
          ) : (
            <div className={styles.taskList}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  updateTasksList={updateTasksList}
                  removeTask={removeTask}
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
