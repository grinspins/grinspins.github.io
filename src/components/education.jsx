import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "./common/collapse";

export const Education = ({ education }) => {
  return (
    <Collapse header="Education" collapsed={false}>
      {education.map((item) => (
        <div key={item.key}>
          <span className="width-125">{item.key}</span>
          {item.value}
        </div>
      ))}
    </Collapse>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
};
