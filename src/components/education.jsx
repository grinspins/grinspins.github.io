import React from 'react'
import PropTypes from 'prop-types'

export const Education = ({ education }) => {

  return (
    <div>
      <div className="section-header">Education</div>
      {(education).map(item => (
        <div key={item.key}>
          <span className="education-key">{item.key}</span>
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