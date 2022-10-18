import React from 'react';

function Button({ label, onClick, variant }) {
  return (
    <div className='button'>
      <button className={variant ? 'primary' : 'secondary'} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button;
