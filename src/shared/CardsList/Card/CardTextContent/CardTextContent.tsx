import React from 'react';
import styles from './cardtextcontent.css';

export function CardTextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://i.pinimg.com/75x75_RS/9f/8a/e5/9f8ae55866b0e23b82441021c2ccb6b1.jpg"
            alt="Avatar"
          />
          <a href="#user-url" className={styles.username}>Иван Иванов</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано&nbsp;</span>
            4 часа назад
          </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности поможет
        </a>
      </h2>
    </div>
  );
}
