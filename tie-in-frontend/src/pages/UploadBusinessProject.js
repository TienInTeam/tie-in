import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { saveBusinessProject } from "../api/businessProject";
import Button from "../components/Button";
import InputType from "../components/InputType";
import validateTextInput from "../utils/validateTextInput";

function UploadBusinessProject() {
    const saveProject = useMutation(["businessProject"], () => saveBusinessProject({
        "id": 42,
        "name": projectName,
        "summary": description,
        "teamSize": teamSize,
        "teamrequirement": teamRequirement,
        "expectedDeadline": date,
        "location": location,
        "budget": estimatedBudget,
        "category": category,
        "technology": technology,
        "additionalFields": additionalField,
        "files": additionalFile,
        "links": additionalLink
    }), {
        onSuccess: () => {
        },
        onError: () => {
            alert("Something went wrong, please try again.");
        }
    });

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [dateIsChecked, setDateIsChecked] = useState(false);
  const [teamSize, setTeamSize] = useState("");
  const [teamRequirement, setTeamRequirement] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("");
  const [location, setLocation] = useState("");
  const [locationIsChecked, setLocationIsChecked] = useState(false);
  const [technology, setTechnology] = useState([]);
  const [category, setCategory] = useState([]);
  const [additionalField, setAdditionalField] = useState("");
  const [additionalFile, setAdditionalFile] = useState("");
  const [additionalLink, setAdditionalLink] = useState("");
  
  const onChange = (dates) => {
    const date = dates;
    setDate(date);
};

const validateInput = () => {
  if (projectName === "" || description === "" || teamSize === "" || estimatedBudget === "" || teamRequirement === "") {
      alert('Enter all mandatory input field values');
      return false;
  }
  if (!validateTextInput(projectName)) {
      alert("Valid Project name is required.");
      return false;
  }
 
  if (location) {
      if (!validateTextInput(location)) {
          alert("Enter Valid location");
          return false;
      }
      else {
          return true;
      }
  }
  else {
      return true;
  }
}

const onSave = () => {
  if (validateInput()) {
      saveProject.mutate();
  }
}

  return (
    <div className="upload-business-project">
      <h2>Businesss Projrct Request</h2>
      <p>Mandatory Fields</p>
      <InputType label={"Project Title (Required)"} type={"text"} placeHolder={"Enter your project name"} onChange={(e) => setProjectName(e.target.value)}/>
      <label>
      <span>Project Summary (Required)</span>
      <textarea placeholder="Enter your project summary" onChange={(e) => setDescription(e.target.value)} />
      </label>
      <fieldset>
        <lebel>Expected Deadline (Required)</lebel>
        <Datepicker
                    selected={date}
                    date={!dateIsChecked ? date : null}
                    onChange={(date) => onChange(date)}           
        />
        <input type="checkbox" id="notSpecifiedDate" name="notSpecifiedCheck" value="notSpecified" checked={dateIsChecked}
                    onChange={() => {
                        setDateIsChecked(!dateIsChecked);
                        if (dateIsChecked) {
                            setDate(new Date());
                        }
                        else {
                            setDate(null);
                        }
                    }} />
      <label htmlFor="notSpecifiedDate">Not Specified Yet</label>
      </fieldset>
      <InputType label={"Team Size (Required)"} type={"text"} placeHolder={"Enter your preferred team size"} onChange={(e) => setTeamSize(e.target.value)}/>
      <InputType label={"Team Requirement (Required)"} type={"text"} placeHolder={"Enter your team requirements"} onChange={(e) => setTeamRequirement(e.target.value)}/>
      <InputType label={"Estimated Budget (Required)"} type={"text"} placeHolder={"Please choose a budget range"} onChange={(e) => setEstimatedBudget(e.target.value)}/>
      <fieldset>
      <InputType label={"Location (Required)"} type={"text"} placeHolder={"Please choose a budget range"} onChange={(e) => setLocation(e.target.value)}/>
      <input type="checkbox" id="notSpecifiedLocation" name="notSpecifiedCheck" value="notSpecifiedLocation" checked={locationIsChecked}
                    onChange={() => {
                        setLocationIsChecked(!locationIsChecked);
                        if (locationIsChecked) {
                            setLocation(onChange);
                        }else{
                          setLocation(null);
                        }
                    }} />
      <label htmlFor="notSpecifiedLocation">Not Specified Yet</label>
      </fieldset>
      <label htmlFor="category">Project Category (Optional)</label>
      <select id="category" placeholder="Select a category related to your project" onChange={(e) => setTechnology([e.target.value])}>
                <option> ---Choose category---</option>
                <option> Web Application</option>
                <option> Mobile Application</option>
                <option> Wordpress</option>
                <option> Ceo </option>
                <option> Digital Ads  </option>
            </select>
            <label htmlFor="technology">Technology (Optional)</label>
            <select id="technology" placeholder="Select a technology related to your project" onChange={(e) => setCategory([e.target.value])}>
                <option> ---Choose technology---</option>
                <option> JS </option>
                <option> React.JS </option>
                <option> CSS </option>
                <option> Java </option>
                <option> React Native </option>
                <option> Figma</option>
                <option> Adobe XD</option>
                <option> Adobe Illustrator</option>
                <option> Adobe Photoshop </option>
            </select>
            <InputType label={"Additional Field (Optional)"} type={"text"} placeHolder={"You can add and customize additional fields for extra project request information "} onChange={(e) => setAdditionalField(e.target.value)}/>
            <InputType label={"Additional File (Optional)"} type={"file"} placeHolder={" (Maximum file size 2mb)"} onChange={(e) => setAdditionalFile(e.target.value)}/>
            <InputType label={"Additional Link (Optional)"} type={"text"} placeHolder={" You can add and customize additional link for your request "} onChange={(e) => setAdditionalLink(e.target.value)}/>
            <Button onClick={onSave} variant={"primary"} label={"Save"} />
    </div>
  )
}

export default UploadBusinessProject;
