
import React, { PropTypes } from 'react';
import App from './App'

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
};

class Layout extends React.Component {

  static propTypes = {
    context: PropTypes.shape(ContextType)
  };

  getChildContext() {
    return this.props.context;
  }

  render() {
    return (
      <App />
    )
  }

}

Layout.childContextTypes = ContextType

export default Layout
