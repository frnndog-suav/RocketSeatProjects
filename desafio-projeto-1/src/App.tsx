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
      </main>
    </>
  );
}

export default App;
