
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import HeaderData from '../../data/header.json'

class Taglines extends React.Component {

  componentDidMount() {
    $("#typed").typed({
      backDelay: 1100,
      strings: HeaderData.taglines,
      loop: true
    })
  }

  render() {

    const first = HeaderData.taglines[0]

    return (
      <div className="tagline">
      <span id="typed">{first}</span>
      </div>
    )
  }
}

function Header() {
  return (
    <section className="intro clearfix">
      <div className="row">
        <div className="clearfix me">
          <img src="img/headshot.jpg" className="img-circle headshot" />
          <div className="text-wrapper">
            <h1>I'm Drew</h1>
            <div className="contact-me">
              <dl>
                <dt>Located:</dt>
                <dd>{HeaderData.me.Located}</dd>
                <br />
                <dt>Currently:</dt>
                <dd>{HeaderData.me.Currently}</dd>
                <br />
                <dt>Email:</dt>
                <dd>{HeaderData.me.Email}</dd>
              </dl>
            </div>
          </div>
        </div>
        <Taglines />
      </div>
    </section>
  );
}

export default withStyles(s)(Header);
