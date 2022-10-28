import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from "../components/Button";
import InputType from "../components/InputType";

import React from 'react'

function UploadBusinessProject() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [dateIsChecked, setDateIsChecked] = useState(false);

  const onChange = (dates) => {
    const date = dates;
    setDate(date);
};
  return (
    <div className="upload-business-project">
      <h2>Businesss Projrct Request</h2>
      <p>Mandatory Fields</p>
      <InputType label={"Project Title (Required)"} type={"text"} onChange={(e) => setProjectName(e.target.value)}/>
      <label>
      <span>Project Summary (Required)</span>
      <textarea onChange={(e) => setDescription(e.target.value)} />
      </label>
      <fieldset>
        <lebel>Expected Deadline (Required)</lebel>
        <Datepicker
                    selected={date}
                    date={!dateIsChecked ? date : null}
                    onChange={(date) => onChange(date)}           
        />
        <input type="checkbox" id="notSpecified" name="notSpecifiedCheck" value="notSpecified" checked={dateIsChecked}
                    onChange={() => {
                        setDateIsChecked(!dateIsChecked);
                        if (dateIsChecked) {
                            setDate(new Date());
                        }
                        else {
                            setDate(null);
                        }
                    }} />
        <label htmlFor="notSpecified">Not Specified Yet</label>
      </fieldset>
      
    </div>
  )
}

export default UploadBusinessProject
