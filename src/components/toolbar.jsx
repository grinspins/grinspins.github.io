import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

export const Toolbar = ({ themeHandler }) => {

  return (
    <div>
      <FontAwesomeIcon
        className="icon"
        icon={faSun}
        onClick={() => themeHandler('light')}
      />
      <FontAwesomeIcon
        className="icon"
        icon={faMoon}
        onClick={() => themeHandler('dark')}
      />
    </div>
  )

}

Toolbar.propTypes = {
  themeHandler: PropTypes.func
}