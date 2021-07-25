import React from 'react'
import PropTypes from 'prop-types'

export const Contact = ({ phone, email }) => {

  return (
    <div className='contact'>
      <ContactPhone phone={phone} />
      <ContactEmail email={email} />
    </div>
  )

}

const ContactPhone = ({ phone }) => {
  
  return (
    <div>
      <span className="contact-key">Phone:</span>
      {phone}
    </div>
  )

}

const ContactEmail = ({ email }) => {

  return (
    <div>
      <span className="contact-key">E-Mail:</span>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  )

}

Contact.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string
}

ContactPhone.propTypes = {
  phone: PropTypes.string,
}

ContactEmail.propTypes = {
  email: PropTypes.string
}