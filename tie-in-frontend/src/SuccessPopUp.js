import React from 'react'
import Button from './Button'


function SuccessPopUp({ title, subtitle, onClickSuccess}) {
  return (
    <div className="success-popup">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Button onClick={onClickSuccess} />
    </div>
  )
}

export default SuccessPopUp