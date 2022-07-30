import React, {useState} from 'react'
import {SectionHeader} from './section_header'

export const Collapse = ({header, collapsed, children}) => {

  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  return (
    <>
      <SectionHeader
        className="collapsible"
        header={header}
        onClick={(setIsCollapsed(collapse => !collapse))}  
      />
      <div className={`content ${isCollapsed ? '' : 'open'}`}>
        {children}
      </div>
    </>
  )
}