import React from 'react'


function InputType({ placeHolder, label, type, onChange }) {

  return (
    <div className="input-type">
      <label>
        <span>{label}</span>
        <input type={type} placeholder={placeHolder} onChange={onChange} />
      </label>
    </div>
  )
}

export default InputType;