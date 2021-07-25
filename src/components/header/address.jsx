import React from 'react'
import PropTypes from 'prop-types'

export const Address = ({ address }) => {

  return (
    <div className="address">
      {address.map((line, idx) => <div key={idx}>{line}</div>)}
    </div>
  )

} 

Address.propTypes = {
  address: PropTypes.array
}