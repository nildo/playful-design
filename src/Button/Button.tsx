import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (<button className={styles.base}>{children}</button>);
}

export default Button;
