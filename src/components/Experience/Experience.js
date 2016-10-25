
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Experience.scss';
import ExperienceData from '../../data/experience.json'


function ExperienceEntry({ title, image, url, timeframe, position, technologies, points }) {
  return (
    <article className="entry">
  	    <div className="thumbnail">
  	    	<div className="vertical-center">
  				<a target="_blank" href={url}><img className="entry-img" src={"/img/projects/" + image} /></a>
  			</div>
  		</div>
  		<div className="entry-details">
  			<h3 className="entry-title"><a target="_blank" href={ url }>{ title }</a></h3>
        {position ? <h4 className="entry-position">{ position }</h4> : null}
        <p className="entry-time">{ timeframe }</p>
        <div className="entry-row">
          <div className="entry-tech">
          {technologies.map((technology, index) =>
            <a key={index} target="_blank" className={"technology-box technology-box-" +  technology }>{ technology }</a>
          )}
          </div>
        </div>
        <div className="entry-row">
          <ul className="entry-points">
            {points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
  		</div>
  	</article>
  )
}

let shownEntryCount = 3

class ExperienceCategory extends React.Component {

  constructor(props) {
    super(props)
    this.toggleExpand = this.toggleExpand.bind(this)
    this.getEntries = this.getEntries.bind(this)
    this.state = {
      expanded: this.props.category.entries.length <= shownEntryCount
    }
  }

  toggleExpand() {
      this.setState({
      expanded: !this.state.expanded
    })
  }

  getEntries() {
    const entries = this.props.category.entries
    var displayedEntries
    var expandable = false
    if (this.props.category.entries.length <= shownEntryCount || this.state.expanded) {
      displayedEntries = entries
    } else {
      displayedEntries = entries.slice(0, shownEntryCount)
      expandable = true
    }

    return (
      <div className="entries">
        {displayedEntries.map((entry) =>
          <div key={entry.url}>{ExperienceEntry(entry)}</div>
        )}
        {expandable ? <p><button className="btn more-entries-btn" onClick={this.toggleExpand}>See {!this.state.expanded ? 'More' : 'Less'}</button></p> : null}
      </div>
    )
  }

  render() {
    return (
    <div  className="work-section col-sm-4">
      <div>
        <h2 className="heading">
          { this.props.category.title }
          <button className="visible-xs-inline-block btn" type="button"></button>
        </h2>
        {this.getEntries()}
      </div>
    </div>
    )
  }
}

function Experience() {
  return (
    <div className="work">
      <div className="row">
      {ExperienceData.catagories.map((category, index) => <ExperienceCategory key={index} category={category} />)}
      </div>
    </div>
  );
}

export default withStyles(s)(Experience)
