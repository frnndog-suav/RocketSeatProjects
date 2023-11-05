import styles from "./App.module.css";
import RocketLogo from "./assets/rocket.svg";
import { Input } from "./components/Input";

function App() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={RocketLogo} />
          <div>
            <span className={styles.colorBlue}>to</span>
            <span className={styles.colorPurpleDark}>do</span>
          </div>
        </div>
      </header>
      <Input />
    </>
  );
}

export default App;
