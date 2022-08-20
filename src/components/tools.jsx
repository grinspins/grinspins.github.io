import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "./common/collapse";
import { MAX_PROFFICIENCEY } from "../constants";

export const ToolsLanguages = ({ languages, tools }) => {
  const makeStars = (numSolidStars) => {
    return Array(MAX_PROFFICIENCEY)
      .fill()
      .map((_, idx) => {
        if (idx + 1 > numSolidStars) {
          return "☆";
        }
        return "★";
      });
  };

  return (
    <Collapse header="Tools &amp; Languages" collapsed={false}>
      <div className="flex-space-between">
        {languages.map((lang) => (
          <div key={lang.name} className="pill language-pill">
            {lang.name}&nbsp;
            {makeStars(lang.proficiency)}
          </div>
        ))}
      </div>
      <div className="flex-space-between" style={{ marginTop: "6px" }}>
        {tools.map((tool) => (
          <span key={tool} className="pill tool-pill">
            {tool}
          </span>
        ))}
      </div>
    </Collapse>
  );
};

ToolsLanguages.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      proficiency: PropTypes.number,
    })
  ),
  tools: PropTypes.array,
};
