import React, { ReactNode } from 'react';

export type TopBarProps = {
  children: ReactNode,
};

const TopBar = (props: TopBarProps) => {
  const { children } = props;
  return (
    <div style={styles.container}>
      {children}
    </div>
  )
};

const styles = {
  container: {
    width: '100%',
    height: 70,
    padding: '0 16px',
    boxSizing: 'border-box' as 'border-box',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #e5e5e5',
  },
};

export default TopBar;
