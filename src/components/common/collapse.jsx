import React, {useEffect, useState} from 'react'
import {SectionHeader} from './section_header'

export const Collapse = ({header, collapsed, children}) => {

  const [isCollapsed, setIsCollapsed] = useState(collapsed)

  useEffect(() => {
    setIsCollapsed(collapsed)
  }, [collapsed])

  return (
    <>
      <SectionHeader
        className="collapsible"
        header={header}
        onClick={() => setIsCollapsed(isCollapsed => !isCollapsed)}  
      />
      <div className={`content ${isCollapsed ? '' : 'open'}`}>
        {children}
      </div>
    </>
  )
}