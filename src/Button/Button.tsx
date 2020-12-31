import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { ColorType, IconType } from '../types';
import Icon from '../Icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: ColorType;
  icon?: IconType;
}

const Button = ({ children, color = 'blue', icon, ...props }: ButtonProps) => {
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
    <button className={classNames(styles.base, styles[color])} {...props}>
      <div className={classNames(styles.container)}>
        {iconWrapper}
        {childrenWrapper}
      </div>
    </button>
  );
}

export default Button;
