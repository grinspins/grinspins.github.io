import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

export const Toolbar = ({ theme, setTheme }) => {

  const toggleTheme = () => {
    // const icon = document.getElementById("theme-icon")
    // icon.classList.add("switching")
    setTheme(currentTheme => (
      currentTheme === "light" ? 'dark': 'light'
    ))
  }

  return (
    <div className='toolbar'>
      <div className="rotor">
        <FontAwesomeIcon
          id="theme-icon"
          className={`icon icon-${theme === 'light' ? 'show' : 'hide'}`}
          icon={faSun}
          onClick={() => toggleTheme()}
        />
        <FontAwesomeIcon
          id="theme-icon"
          className={`icon icon-${theme === 'dark' ? 'show' : 'hide'}`}
          icon={faMoon}
          onClick={() => toggleTheme()}
        />
      </div>
    </div>
  )

}

Toolbar.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func
}