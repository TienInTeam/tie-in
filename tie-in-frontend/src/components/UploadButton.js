import React from 'react'

function UploadButton({ title, onClickUpload }) {
  return (
    <>
      <button className="upload-button" onClick={onClickUpload}>{title}</button>
    </>
  );
}

export default UploadButton;
