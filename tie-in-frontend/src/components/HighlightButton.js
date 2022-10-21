import React from 'react'

function HighlightButton({label, description, onClick}) {
  return (
    <div className="check-application-status" onClick={onClick}>
      <h3>{label}</h3>
      <p>{description}</p>
    </div>
  );
}

export default HighlightButton;