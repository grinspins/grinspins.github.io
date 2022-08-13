import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";

export const Experience = ({ experience }) => {
  return (
    <div>
      <div className="flex-space-between">
        <b>{experience.name}</b>
        <b>{experience.location}</b>
      </div>
      {experience.jobs.map((job) => (
        <div key={job.title}>
          <div className="flex-space-between">
            <i>
              {job.title}, {job.type}
            </i>
            <i>{job.dates}</i>
          </div>
          <div>
            <ul className="tasks">
              {job.tasks.map((task, idx) => (
                <React.Fragment key={idx}>
                  <li>{task.description}</li>
                  {task.subtasks.length ? (
                    <ul className="subtasks">
                      {task.subtasks.map((st, idx) => (
                        <li key={idx}>{st}</li>
                      ))}
                    </ul>
                  ) : null}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

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
            subtasks: PropTypes.arrayOf(PropTypes.string),
          })
        ),
      })
    ),
  }),
};
