import React, { ReactNode } from 'react';
import styles from './Button.module.scss';
import { Color } from '../types';

export interface ButtonProps {
  children: ReactNode;
  color: Color;
}

const Button = ({ children, color = 'blue' }: ButtonProps) => {
  return (<button className={`${styles.base} ${styles[color]}`}>{children}</button>);
}

export default Button;
