import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

export const Toolbar = ({ theme, setTheme }) => {

  const angle = useRef(0)

  const toggleTheme = () => {
    // const icon = document.getElementById("theme-icon")
    // icon.classList.add("switching")
    setTheme(currentTheme => (
      currentTheme === "light" ? 'dark': 'light'
    ))
    angle.current += 180;
    const rotor = document.getElementById("rotor")
    const icons = document.getElementsByClassName("theme-icon")
    // rotor.animate({ transform: 'rotate(180deg)'}, 1)
    rotor.style.transform = `rotate(${angle.current}deg)`
    for (const icon of icons) {
      icon.style.transform = `rotate(-${angle.current}deg)`
    }

  }

  return (
    <div className='toolbar'>
      <div id="rotor" className="rotor">
        <FontAwesomeIcon
          className='theme-icon icon-light'
          icon={faSun}
          onClick={() => toggleTheme()}
        />
        <FontAwesomeIcon
          className='theme-icon icon-dark'
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