import { ReactNode } from 'react';
import styles from './Input.module.scss';

interface IInput {
  placeholder: string;
  size: "sm" | "md" | "lg";
  icon?: ReactNode
}

export default function Input({ placeholder, size, icon }: IInput) {
  return (
    <div className={styles.input + " " + styles[size]}>
      <input type='text' placeholder={placeholder} className={styles.input__elem + " " + styles[size]} />
      {icon}
    </div>
  );
}
