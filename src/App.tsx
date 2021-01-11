import {hot} from 'react-hot-loader/root';
import './main.global.css';
import React from 'react';
import {Layout} from './shared/Layout';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {Dropdown} from "./shared/Dropdown";
import {GeneticList} from "./shared/GeneticList";

export function AppComponent() {
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent/>);
