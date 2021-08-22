import React from 'react'
import PropTypes from 'prop-types'

export const About = ({ about }) => {

  return (
    <div>
      <div className="section-header">About</div>
      <div>{about}</div>
    </div>
  )

}

About.propTypes = {
  about: PropTypes.string
}