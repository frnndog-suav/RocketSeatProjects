import styles from "./index.module.css";

export const Checkbox = () => {
  return (
    <label className={styles.container}>      
      <input type="checkbox" />
      <span className={styles.checkmark} />
    </label>
  );
};
