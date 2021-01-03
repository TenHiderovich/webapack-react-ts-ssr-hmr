import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Layout } from './shared/Layout'

export function AppComponent() {
  return (
    <Layout>
      sdfs
      {/* <Header /> */}
      {/* <Content /> */}
    </Layout>
  );
}

export const App = hot(AppComponent);