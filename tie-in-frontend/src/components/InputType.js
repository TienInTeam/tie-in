import React from 'react'

function InputType({ placeHolder, label, type, onChange, value}) {

  return (
    <div className="input-type">
      <label>
        <span>{label}</span>
        <input type={type} placeholder={placeHolder} onChange={onChange} value={value} />
      </label>
    </div>
  );
}

export default InputType;
