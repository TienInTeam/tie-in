import React from "react";
import Button from "./Button";
import InputType from "./InputType";

function ContactFrom({ onSend }) {
  return (
    <div className="contact-form">
      <div className={"name"}>
        <InputType type={"text"} label={"*First Name"} requiredField={true} required />
        <InputType type={"text"} label={"*Last Name"} requiredField={true} required />
      </div>
      <InputType type={"email"} label={"*Email"} requiredField={true} required />
      <InputType type={"tel"} label={"Phone number"} />
      <InputType type={"textarea"} label={"Message"} required/>
      <Button label={"Submit"} variant={"primary"} onClick={onSend} />
    </div>
  );
}

export default ContactFrom;
