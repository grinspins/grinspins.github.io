import React from 'react'
import PropTypes from 'prop-types'
import { SectionHeader } from './common/section_header'

export const About = ({ about }) => {

  return (
    <div>
      <SectionHeader header="About" />
      <div>{about}</div>
    </div>
  )

}

About.propTypes = {
  about: PropTypes.string
}