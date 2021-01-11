import React from 'react';
import { nanoid } from 'nanoid'
import styles from './cardmenu.css';
import {Dropdown} from "../../../Dropdown";
import {GeneticList} from "../../../GeneticList";
import {MenuIcon, WarningIcon, BlockIcon} from '../../../Icons';

const MENU = [
  {
    icon: <BlockIcon />,
    text: 'Скрыть',
    onClick: () => {},
    className: styles.menuItem,
    As: 'li' as const,
  },
  {
    icon: <WarningIcon />,
    text: 'Пожаловаться',
    onClick: () => {},
    className: styles.menuItem,
    As: 'li' as const,
  },
  {
    text: 'Закрыть',
    onClick: () => {},
    className: `${styles.menuItem} ${styles.menuItem_footerItem}`,
    As: 'li' as const,
  }
].map((item) => ({ ...item, id: nanoid() }));


export function CardMenu() {
  const [activatorIsActive, setActivatorIsActive] = React.useState(false);

  const activator = (
    <button className={`${styles.menuButton} ${activatorIsActive && styles.menuButton_isActive}`}>
      <MenuIcon />
    </button>
  );

  return (
    <div className={styles.menu}>
      <Dropdown
        activator={activator}
        className={styles.menuDropdownListContainer}
        onOpen={() => setActivatorIsActive(true)}
        onClose={() => setActivatorIsActive(false)}
        As={'ul' as const}
      >
        <GeneticList list={MENU} />
      </Dropdown>
    </div>
  );
}
