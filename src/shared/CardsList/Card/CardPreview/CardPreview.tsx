import React from 'react';
import styles from './cardpreview.css';

export function CardPreview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/4208985/screenshots/14865139/media/140e20b4896836e02dac3ad0fd5c0444.png?compress=1&resize=1200x900"
      />
    </div>
  );
}
