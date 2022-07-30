import React, {useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faPrint } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { printExternal } from '../lib/util'

export const Toolbar = ({ theme, setTheme }) => {

  const angle = useRef(0)

  const toggleTheme = () => {
    setTheme(currentTheme => (
      currentTheme === "light" ? 'dark': 'light'
    ))
    angle.current += 180;
    const rotor = document.getElementById("rotor")
    const icons = document.getElementsByClassName("theme-icon")
    rotor.style.transform = `rotate(${angle.current}deg)`
    for (const icon of icons) {
      icon.style.transform = `rotate(-${angle.current}deg)`
    }
  }  

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      toggleTheme();
    }
  })

  return (
    <div className='toolbar'>
      <div id="rotor" className="rotor">
        <FontAwesomeIcon
          className='icon icon-light'
          icon={faSun}
          onClick={() => toggleTheme()}
        />
        <FontAwesomeIcon
          className='icon icon-dark'
          icon={faMoon}
          onClick={() => toggleTheme()}
        />
      </div>
      {/* TODO this needs to be the github adress */}
      <FontAwesomeIcon
        className='icon icon-print'
        icon={faPrint}
        onClick={() => printExternal("http://localhost:8000/resume.html")}
      />
    </div>
  )

}

Toolbar.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func
}