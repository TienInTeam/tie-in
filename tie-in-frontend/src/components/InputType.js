import React from 'react'

function InputType({ placeholder, label, requiredField, type, min, onChange, value}) {

  return (
    <div className="input-type">
      <label>
        <span>{label}</span>
        <input type={type} placeholder={placeholder} onChange={onChange} min={min} value={value} />
      </label>
    </div>
  );
}

export default InputType;
