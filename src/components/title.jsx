import React from "react";
import PropTypes from "prop-types";

export const Title = ({ name }) => {
  return <div className="title">{name}</div>;
};

Title.propTypes = {
  name: PropTypes.string,
};
