import * as React from 'react'

export type Props = {
  children: React.ReactElement,
  text: string
};

const TopBar = (props: Props) => {
  const { children, text } = props;
  return (
    <div style={styles.container}>
      {text}{' '}
      {children}
    </div>
  )
};

const styles = {
  container: {
    borderBottom: '2px solid #e5e5e5',
    height: 75,
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
  },
};

export default TopBar;
