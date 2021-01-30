import {hot} from 'react-hot-loader/root';
import './main.global.css';
import React from 'react';
import {Layout} from './shared/Layout';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";

export function AppComponent() {
  const [token] = useToken();
  const { Provider } = tokenContext;


  return (
    <Provider value={token}>
      <Layout>
        <Header />
        <Content>
          <CardsList/>
        </Content>
      </Layout>
    </Provider>
  );
}

export const App = hot(() => <AppComponent/>);
