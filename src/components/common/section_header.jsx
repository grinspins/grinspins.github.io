import React from 'react'
import PropTypes from 'prop-types'

export const SectionHeader = ({ header, className, ...props }) => {

  return <div className={`section-header ${className}`} {...props}>{header}</div>

}

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  className: PropTypes.string
}