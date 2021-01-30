import React from 'react';
import styles from './text.css';
import classNames from "classnames";

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

type TWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

interface ITextProps {
  As?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  weight?: TWeight;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
    color = EColor.black,
    weight,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles[`w${weight}`]]: weight },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
