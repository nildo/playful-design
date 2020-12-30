import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { ColorType, IconType } from '../types';
import Icon from '../Icon';

export interface ButtonProps {
  children?: ReactNode;
  color?: ColorType;
  icon?: IconType;
}

const Button = ({ children, color = 'blue', icon }: ButtonProps) => {
  let iconWrapper;

  if (icon !== undefined) {
    iconWrapper = (
      <div className={classNames(styles.icon)}><Icon type={icon} /></div>
    );
  }

  let childrenWrapper;

  if (children !== undefined) {
    childrenWrapper = (
      <div className={classNames(styles.content)}>{children}</div>
    );
  }

  return (
    <button className={classNames(styles.base, styles[color])}>
      <div className={classNames(styles.container)}>
        {iconWrapper}
        {childrenWrapper}
      </div>
    </button>
  );
}

export default Button;
