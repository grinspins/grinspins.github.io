import React from 'react'
import PropTypes from 'prop-types'

export const Experience = ({ experiences }) => {

  return (
    <div>
      <div className="section-header">Professional Experience</div>
    </div>
  )

}

Experience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.string,
      jobs: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          type: PropTypes.string,
          dates: PropTypes.string,
          tasks: PropTypes.arrayOf(
            PropTypes.shape({
              description: PropTypes.string,
              subtasks: PropTypes.arrayOf(PropTypes.string)
            })
          )
        })
      )
    })
  )
}