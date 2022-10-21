import React from 'react'
import Button from './Button'
import InputType from './InputType'

function ContactFrom({onSend, label}) {
  return (
    <div className="contact-form">
    <InputType label={label} />
    <Button onClick={onSend} />
    </div>
  )
}

export default ContactFrom