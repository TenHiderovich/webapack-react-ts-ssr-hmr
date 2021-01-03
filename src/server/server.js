import express from 'express';
import * as ReactDOM from 'react-dom/server';
import { indexTemplate } from './indexTemplate';

import { Header } from '../shared/Header';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(Header())),
  );
});

app.listen(3000, () => {
  console.log('Server is started on localhost:3000');
})