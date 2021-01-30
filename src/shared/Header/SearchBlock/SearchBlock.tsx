import React from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import {useUserData} from "../../../hooks/useUserData";

interface ISearchBlockProps {
}

export function SearchBlock() {
  const [ data ] = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock username={data.name} avatarSrc={data.iconImg} />
    </div>
  );
}
