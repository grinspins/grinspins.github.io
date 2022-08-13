import React from 'react'
import PropTypes from 'prop-types'
// import { SectionHeader } from '../common/section_header'
import { Experience } from './experience'
import { Collapse } from '../common/collapse'


export const Experiences = ({ experiences }) => {

  return (
    <Collapse collapsed={false} header="Professional Experience">
      {/* <SectionHeader header="" /> */}
      {experiences.map(exp => (
        <Experience key={exp.name} experience={exp} />
      ))}
    </Collapse>
  )

}

Experiences.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object)
}