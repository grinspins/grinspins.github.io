import React from 'react'
import PropTypes from 'prop-types'
import {
  MAX_PROFFICIENCEY
} from '../constants'

export const ToolsLanguages = ({ languages, tools }) => {

  const makeStars = (numSolidStars) => {
    return Array(MAX_PROFFICIENCEY).fill().map((_, idx) => {
      if ((idx + 1) > numSolidStars) {
        return '☆'
      }
      return '★'
    })
  }

  return (
    <div>
      <div className="section-header">Tools &amp; Languages</div>
      <div className="pill-container">
        {(languages).map(lang => (
          <div key={lang.name} className="lang-pill">
            {lang.name}&nbsp;
            {makeStars(lang.profficiency)}
          </div>
      ))}
      </div>
      <div className="pill-container">
        {(tools.map(tool => (
          <span key={tool} className="tool-pill">{tool}</span>
        )))}
      </div>
    </div>
  )

}

ToolsLanguages.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      profficiency: PropTypes.number
    })
  ),
  tools: PropTypes.array
}