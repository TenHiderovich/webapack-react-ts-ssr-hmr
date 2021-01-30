import React, {useEffect, useState} from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import axios from "axios";

interface ISearchBlockProps {
  token: string;
}

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function SearchBlock({ token }: ISearchBlockProps) {
  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then(({data}) => {
      setData({ name: data.name, iconImg: data.icon_img })
    }).catch(console.log)
  }, [token]);
  return (
    <div className={styles.searchBlock}>
      <UserBlock username={data.name} avatarSrc={data.iconImg} />
    </div>
  );
}
