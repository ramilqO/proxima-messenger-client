import { ReactNode } from 'react';
import styles from './Button.module.scss';

interface IButton {
  background: 'red' | 'blue' | 'green' | 'gray' | 'transparent';
  children: ReactNode;
}

export default function Button({ background, children }: IButton) {
  return <div className={styles.button + ' ' + styles[background]}>{children}</div>;
}
