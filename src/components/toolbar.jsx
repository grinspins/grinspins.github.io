import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faPrint,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { printExternal } from "../lib/util";

export const Toolbar = ({ setTheme }) => {
  const angle = useRef(0);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    angle.current += 180;
    const rotor = document.getElementById("rotor");
    const icons = document.getElementsByClassName("theme-icon");
    rotor.style.transform = `rotate(${angle.current}deg)`;
    for (const icon of icons) {
      icon.style.transform = `rotate(-${angle.current}deg)`;
    }
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      toggleTheme();
    }
  }, []);

  return (
    <div className="toolbar">
      <div id="rotor" className="rotor">
        <FontAwesomeIcon
          className="icon icon-light"
          icon={faSun}
          onClick={() => toggleTheme()}
        />
        <FontAwesomeIcon
          className="icon icon-dark"
          icon={faMoon}
          onClick={() => toggleTheme()}
        />
      </div>
      <FontAwesomeIcon
        className="icon icon-print"
        icon={faPrint}
        onClick={() => printExternal("https://grinspins.github.io/resume.html")}
        // onClick={() => printExternal("http://localhost:8000/resume.html")}
      />
      <a href="mailto:sebastian.mainberger@gmail.com">
        <FontAwesomeIcon className="icon icon-email" icon={faEnvelopeOpen} />
      </a>
    </div>
  );
};

Toolbar.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
};
