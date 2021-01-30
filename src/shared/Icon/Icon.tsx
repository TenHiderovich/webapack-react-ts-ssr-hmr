import React from 'react';
import styles from './icon.css';

import {MenuIcon, WarningIcon, BlockIcon} from '../Icons';

type TSizes = 22 | 18 | 16 | 12 ;

export enum EIcon {
  block = 'block',
  menu = 'menu',
  warning = 'warning',
}

interface IIconProps {
  size: TSizes,
  name: EIcon,
}

const icons = {
  menu: <MenuIcon />
}

export function Icon(props: IIconProps) {
  const { size = 16, name } = props;
  return (
    icons
  );
}
