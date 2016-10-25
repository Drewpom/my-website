
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AboutMe.scss';
import AboutMeData from '../../data/aboutMe.json'

function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function AboutMe({ title, description, style, script, children }) {
  return (
    <div className="about">
      <div className="row">
        <section className="experience col-sm-4 col-sm-push-4">
          <h2>My Experience</h2>
          <ul>
            {AboutMeData.experience.map(bullet =>
              <li key={bullet} dangerouslySetInnerHTML={{__html: bullet}} />
            )}
          </ul>
        </section>
        <section className="technologies col-sm-4 col-sm-push-4">
          <h2>My Technologies</h2>
          <div className="technologies-imgs">
            {AboutMeData.technologies.filter(row => row.imageName != null).map(row =>
              <a key={row.name} target="_blank" href={row.moreInfoUrl}><img src={"img/technologies/" + row.imageName} alt={row.name} /></a>
            )}
          </div>
        </section>
        <section className="story col-sm-4 col-sm-pull-8">
          <h2>My Background</h2>
          {AboutMeData.background.map(bullet =>
            <p key={bullet} dangerouslySetInnerHTML={{__html: bullet}} />
          )}
        </section>
      </div>
    </div>
  );
}

export default withStyles(s)(AboutMe)
