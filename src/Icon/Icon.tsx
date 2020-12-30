import React from 'react';
import { ReactComponent as GithubIcon } from './svg/github.svg';
import styles from './Icon.module.scss';
import { IconType } from '../types';

interface IconProps {
  type: IconType;
}

const iconMap: { [key: string]: SvgrComponent } = {
  github: GithubIcon,
}

const Icon = ({ type }: IconProps) => {
  const IconComponent = iconMap[type];
  return (
    <IconComponent className={styles.base} />
  );
};

export type { IconProps };
export default Icon;
