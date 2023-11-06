import RocketLogo from "../../assets/rocket.svg";
import styles from "./index.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={RocketLogo} alt={"Foguete"} />
        <div>
          <span className={styles.colorBlue}>to</span>
          <span className={styles.colorPurpleDark}>do</span>
        </div>
      </div>
    </header>
  );
}
