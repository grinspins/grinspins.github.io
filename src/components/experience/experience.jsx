import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

export const Experience = ({ experience }) => {
  console.log(experience)
  return (
    <div>
      {/* maybe some padding to the sides */}
      <div className="experience-company">
        <span><b>{experience.name}</b></span>
        <span className="experience-date"><b>{experience.location}</b></span>
      </div>
      {experience.jobs.map(job => (
        // fix classnames!
        <div key={job.title}>
          <div className="experience-company">
            <span><i>{job.title}, {job.type}</i></span>
            <div className="experience-date"><i>{job.dates}</i></div>
          </div>
          {job.tasks.map((task, idx) => (
            <ul key={idx}>
              <li>{task.description}</li>
              {/* if subtasks.length */}
              <ul>
                {task.subtasks.map(st => (
                  <li key={st}>{st}</li>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      ))}
    </div>
  )

}

Experience.propTypes = {
  experience: PropTypes.shape({
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
}