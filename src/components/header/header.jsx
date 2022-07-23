import React from 'react'
import PropTypes from 'prop-types'
import { Address } from './address'
import { Contact } from './contact'

export const Header = ({ address, email, phone }) => {

  return (
    <div className="contact-container">  
        <Address address={address} />
        <Contact phone={phone} email={email} />
    </div>
  )

}

Header.propTypes = {
  address: PropTypes.array,
  phone: PropTypes.string,
  email: PropTypes.string
}



      