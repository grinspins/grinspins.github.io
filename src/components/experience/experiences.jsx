import React from 'react'
import PropTypes from 'prop-types'
import { SectionHeader } from '../common/section_header'
import { Experience } from './experience'


export const Experiences = ({ experiences }) => {

  return (
    <div>
      <SectionHeader header="Professional Experience" />
      {experiences.map(exp => (
        <Experience key={exp.name} experience={exp} />
      ))}
    </div>
  )

}

Experiences.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object)
}