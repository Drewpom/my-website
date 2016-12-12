
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
    this.renderEntries = this.renderEntries.bind(this)
  }

  renderEntries() {
    const entryClassName = this.props.entryClassName || ""
    return this.props.entries.map((entry) =>
      <div key={entry.url} className={entryClassName}>{ExperienceEntry(entry)}</div>
    )
  }

  render() {
    const sectionClassName = "work-section " + (this.props.sectionClassName || "")
    return (
      <div className={sectionClassName}>
        <h2 className="heading">
          { this.props.title }
        </h2>
        {this.renderEntries()}
        {this.props.additionalMarkup}
      </div>
    )
  }
}

ExperienceCategory.defaultProps = {
  additionalMarkup: null
}

class ExperienceCategoryExandable extends ExperienceCategory {

  constructor(props) {
    super(props)
    this.toggleExpand = this.toggleExpand.bind(this)
    this.state = {
      expanded: this.props.category.entries.length <= shownEntryCount
    }
  }

  toggleExpand() {
      this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const entries = this.props.category.entries
    var displayedEntries
    var expandable = false
    if (this.props.category.entries.length <= shownEntryCount || this.state.expanded) {
      displayedEntries = entries
    } else {
      displayedEntries = entries.slice(0, shownEntryCount)
      expandable = true
    }

    let additionalMarkup = null
    if (expandable) {
        additionalMarkup = (
          <p><button className="btn more-entries-btn" onClick={this.toggleExpand}>See {!this.state.expanded ? 'More' : 'Less'}</button></p>
        )
    }

    return (
      <ExperienceCategory sectionClassName="col-sm-4" title={this.props.category.title} entries={displayedEntries} additionalMarkup={additionalMarkup} />
    )
  }
}

function Experience() {

  return (
    <div>
      <div className="work">
        <div className="row">
        {ExperienceData.catagories.map((category, index) => <ExperienceCategoryExandable key={index} category={category} />)}
        </div>
      </div>
      <div className="work">
        <div className="row">
          <ExperienceCategory {...ExperienceData.freelancing} entryClassName="col-sm-4" />
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Experience)
