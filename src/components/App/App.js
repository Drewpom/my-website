
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Header from '../Header';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import Footer from '../Footer';
import s from './App.scss';

class App extends React.Component {

  render() {
    return (
    <div className="container-fluid main-container">
      <Header />
      <AboutMe />
      <Experience />
      <Footer />
  	</div>
    )
  }

}

export default withStyles(s)(App)
