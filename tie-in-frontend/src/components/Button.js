import React from 'react';

function Button({ label, onClick, variant }) {
  return (
    <div className="button">
      <button className={variant} onClick={onClick} >{label}</button>
    </div>
  )
}

export default Button;
