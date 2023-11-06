import styles from "./index.module.css";

interface CheckboxProps {
  isChecked: boolean;
  handleChecked(): void;
}

export function Checkbox({ handleChecked, isChecked }: CheckboxProps) {
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <span className={styles.checkmark} />
    </label>
  );
}
