import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { SectionHeader } from "./section_header";

export const Collapse = ({ header, collapsed, children }) => {
  const content = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  useEffect(() => {
    collapse(isCollapsed);
  }, [collapsed]);

  // Manually change max height, since max-height: 0; to max-height: fit-content does not trigger transisiton.
  const collapse = (collapsed) => {
    if (collapsed) content.current.style.maxHeight = null;
    else content.current.style.maxHeight = content.current.scrollHeight + "px";
    setIsCollapsed(collapsed);
  };

  return (
    <>
      <SectionHeader
        className={`collapsible ${isCollapsed ? "" : "collapsible-open"}`}
        header={header}
        onClick={() => collapse(!isCollapsed)}
      />
      <div
        className={`content ${isCollapsed ? "" : "content-open"}`}
        ref={content}
      >
        {children}
      </div>
    </>
  );
};

Collapse.propTypes = {
  header: PropTypes.string.isRequired,
  collapsed: PropTypes.bool,
  children: PropTypes.element,
};
