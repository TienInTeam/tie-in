import React from 'react'
import Button from './Button'
import InputType from './InputType'

function ContactFrom({onSend}) {
    return (
        <div className="contact-form">
            <div className={"name"}>
                <InputType type={"text"} label={"First Name"} required/>
                <InputType type={"text"} label={"Last Name"} required/>
            </div>
            <InputType type={"email"} label={"Email"} required/>
            <InputType type={"tel"} label={"Phone number"}/>
            <InputType required label={"Message"}/>
            <Button label={"Submit"} variant={"primary"} onClick={onSend}/>
        </div>
    );
}

export default ContactFrom;
