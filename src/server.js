
import 'babel-polyfill';
import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import Layout from './components/Layout';
import Html from './components/Html';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import { port, auth } from './config';
import MetaData from './data/meta.json'

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', async (req, res, next) => {
  const css = new Set();

  const context = {
    insertCss: (...styles) => {
      styles.forEach(style => css.add(style._getCss()));
    },
  };

  const data = {
    meta: MetaData,
    children: ReactDOM.renderToString(<Layout context={context}></Layout>),
    style: [...css].join(''),
    script: assets.main.js
  }
  const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);

  res.status(200);
  res.send(`<!doctype html>${html}`);
});

const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  console.log(pe.render(err));
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
    >
    {err.message}
    </Html>
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
