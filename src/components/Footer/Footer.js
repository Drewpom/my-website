import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 });
}

function Footer() {
  return (
    <footer className="footer">
      <span className="pull-left"><a href="https://github.com/Drewpom/my-website">Source Code</a></span>
      <button className="top-btn" onClick={() => {scrollToTop()}}>Top</button>
      <p>&copy; 2016</p>
    </footer>
  )
}

export default withStyles(s)(Footer)
