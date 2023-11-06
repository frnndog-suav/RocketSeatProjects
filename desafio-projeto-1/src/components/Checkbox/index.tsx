import { FC } from "react";
import styles from "./index.module.css";

interface CheckboxProps {
  isChecked: boolean;
  handleChecked(): void;
}

export const Checkbox: FC<CheckboxProps> = ({ handleChecked, isChecked }) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <span className={styles.checkmark} />
    </label>
  );
};
