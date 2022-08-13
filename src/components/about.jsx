import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "./common/collapse";

export const About = ({ about }) => {
  return (
    <Collapse header="About" collapsed={false}>
      <div>{about}</div>
    </Collapse>
  );
};

About.propTypes = {
  about: PropTypes.string,
};
