import React, { ReactNode } from 'react';
import styles from './TopBar.module.css';

export type TopBarProps = {
  children: ReactNode,
};

const TopBar = (props: TopBarProps) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
};

export default TopBar;
