import React from 'react'
import Button from './Button'
import { ReactComponent as CheckMarkIcon } from '../assets/icons/others/checkmark-circle.svg';

function SuccessPopUp({ title, subtitle, onClickSuccess, label }) {
  return (
    <div className="success-popup">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <img src={require("../assets/icons/others/Sucess2.gif")}/>
      <Button variant={"primary"} label={label} onClick={onClickSuccess} />
    </div>
  );
}

export default SuccessPopUp;
