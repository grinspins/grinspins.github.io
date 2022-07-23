import React from 'react'
import PropTypes from 'prop-types'
import { SectionHeader } from './common/section_header'
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
      <SectionHeader header="Tools &amp; Languages" />
      <div className="flex-space-between">
        {(languages).map(lang => (
          <div key={lang.name} className="pill language-pill">
            {lang.name}&nbsp;
            {makeStars(lang.profficiency)}
          </div>
      ))}
      </div>
      <div className="flex-space-between" style={{marginTop: "6px"}}>
        {(tools.map(tool => (
          <span key={tool} className="pill tool-pill">{tool}</span>
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