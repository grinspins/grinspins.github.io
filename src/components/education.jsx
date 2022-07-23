import React from 'react'
import PropTypes from 'prop-types'
import { SectionHeader } from './common/section_header'

export const Education = ({ education }) => {

  return (
    <div>
      <SectionHeader header="Education" />
      {(education).map(item => (
        <div key={item.key}>
          <span className="width-125">{item.key}</span>
          {item.value}
        </div>
      ))}
    </div>
  )

}

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ])
    })
  )
}