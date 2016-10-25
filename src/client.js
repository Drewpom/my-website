
import 'babel-polyfill';
import jquery from 'jquery'
import Typed from 'typed.js'
import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout'

const container = document.getElementById('app');

const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => { removeCss.forEach(f => f()); };
  }
};

ReactDOM.render(
  <Layout context={context}></Layout>,
  container
);
