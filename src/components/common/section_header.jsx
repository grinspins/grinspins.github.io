import React from 'react'
import PropTypes from 'prop-types'

export const SectionHeader = ({ header }) => {

  return <div className="section-header">{header}</div>

}

SectionHeader.propTypes = {
  header: PropTypes.string
}