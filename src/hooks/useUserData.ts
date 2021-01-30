import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const token = useContext(tokenContext);
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

  return [data];
}
