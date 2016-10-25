import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <button className="top-btn">Top</button>
      <p>Made with &#10084; in Boston, &copy; 2016</p>
    </footer>
  )
}

export default withStyles(s)(Footer)
