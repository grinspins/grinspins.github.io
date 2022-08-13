import React from "react";
import PropTypes from "prop-types";
import { Experience } from "./experience";
import { Collapse } from "../common/collapse";

export const Experiences = ({ experiences, header, collapsed }) => {
  return (
    <Collapse collapsed={collapsed} header={header}>
      {/* <SectionHeader header="" /> */}
      {experiences.map((exp) => (
        <Experience key={exp.name} experience={exp} />
      ))}
    </Collapse>
  );
};

Experiences.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object),
  header: PropTypes.string.isRequired,
  collapsed: PropTypes.bool,
};
