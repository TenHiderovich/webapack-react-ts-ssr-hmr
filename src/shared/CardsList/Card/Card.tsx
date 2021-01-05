import React from 'react';
import styles from './card.css';

import {CardTextContent} from './CardTextContent';
import {CardPreview} from './CardPreview';
import {CardMenu} from './CardMenu';
import {CardKarmaCounter} from './CardKarmaCounter';
import {CardCommentButton} from './CardCommentButton';
import {CardActions} from './CardActions';

export function Card() {
  return (
    <li className={styles.card}>
      <CardTextContent/>
      <CardPreview/>
      <CardMenu/>
      <div className={styles.controls}>
        <CardKarmaCounter/>
        <CardCommentButton/>
        <CardActions/>
      </div>
    </li>
  );
}
