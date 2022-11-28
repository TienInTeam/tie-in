import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {saveBusinessProject} from "../api/businessProject";
import Button from "../components/Button";
import InputType from "../components/InputType";
import validateTextInput from "../utils/validateTextInput";
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';
import { ReactComponent as UploadIcon } from '../assets/icons/actions/actions-upload.svg';
import MultiStepProgressBar from "../components/MultiProgressBar";


function UploadBusinessProject() {
    const businessId = sessionStorage.getItem('userMongoId');
    const businessName = sessionStorage.getItem('userName');

    const saveProject = useMutation(["businessProject"], () => saveBusinessProject({
        "name": projectName,
        "description": description,
        "team_size": teamSize,
        "team_requirements": teamRequirement,
        "end_date": endDate,
        "location": location,
        "budget": estimatedBudget,
        "category": category,
        "technologies": technology,
        "additionalFields": additionalField,
        "file": additionalFile,
        "links": additionalLink,
        "status": "open",
        "business_id": businessId,
    }), {
        onSuccess: () => {
        },
        onError: () => {
            alert("Something went wrong, please try again.");
        }
    });
    const navigate = useNavigate();
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [endDate, setEndDate] = useState(null);
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
    const [business, setBusiness] = useState({});
    const [currentStep, setCurrentStep] = useState(1);

    const validateInput = () => {
  if (projectName === "" || description === "" || teamSize === "" || estimatedBudget === "" || teamRequirement === "") {
      alert('Enter all mandatory input field values');
      return false;
  }
  if (!validateTextInput(projectName)) {
      alert("Valid Project name is required.");
      return false;
  }
  if(teamSize<1){
    alert('Team size should be positive number.');
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

    const onSubmit = () => {
        if (validateInput()) {
            saveProject.mutate();
        }
    }
    const onSave = () => {
        alert("You clicked save button")
    }
    const onNext = () => {
        setCurrentStep(currentStep + 1)
    }
    const onBack = () => {
        setCurrentStep(currentStep - 1)
    }
    const onLocation = () => {
        navigate("/dashboard")
    }

    const onChange = (date) => {
        setEndDate(date);
    };

    return (
        <div className="upload-business-project">
            <div className="header-wrapper">
                {currentStep > 1 ? <div className="icon back-icon" onClick={onBack}><BackIcon /></div> : <div className="icon back-icon" onClick={onLocation}><BackIcon /></div>}
                <div><h2>Business Project Request</h2></div>
            </div>
            <MultiStepProgressBar currentStep={currentStep} />
            {currentStep === 1 ?
                <div className="first-step">
                    <InputType label={"Project Title (Required)"} type={"text"} placeHolder={"Enter your project name"} onChange={(e) => setProjectName(e.target.value)} />
                    <label>
                        <span>Project Summary (Required)</span>
                        <textarea placeholder="Enter your project summary" onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label>Expected Deadline (Required)</label>
                    <Datepicker
                        selected={endDate}
                        date={!dateIsChecked ? endDate : null}
                        onChange={(date) => onChange(date)}
                    />
                    <div className="date-checkbox">
                        <input type="checkbox" id="notSpecifiedDate" name="notSpecifiedCheck" value="notSpecified" checked={dateIsChecked}
                            onChange={() => {
                                setDateIsChecked(!dateIsChecked);
                                if (dateIsChecked) {
                                    setEndDate(new Date());
                                }
                                else {
                                    setEndDate(null);
                                }
                            }} />
                        <label htmlFor="notSpecifiedDate">Not Specified Yet</label>
                    </div>
                    <InputType label={"Team Size (Required)"} type={"number"} placeHolder={"Enter your preferred team size"} min={1} onChange={(e) => setTeamSize(e.target.value)} />
                    <InputType label={"Team Requirement (Required)"} type={"text"} placeHolder={"Enter your team requirements"} onChange={(e) => setTeamRequirement(e.target.value)} />
                    <InputType label={"Estimated Budget (Required)"} type={"text"} placeHolder={"Please choose a budget range"} onChange={(e) => setEstimatedBudget(e.target.value)} />
                    <InputType label={"Location (Required)"} type={"text"} placeHolder={"Please choose a budget range"} onChange={(e) => setLocation(e.target.value)} />
                    <div className="location-checkbox">
                        <input type="checkbox" id="notSpecifiedLocation" name="notSpecifiedCheck" value="notSpecifiedLocation" checked={locationIsChecked}
                            onChange={() => {
                                setLocationIsChecked(!locationIsChecked);
                                if (locationIsChecked) {
                                    setLocation(onChange);
                                } else {
                                    setLocation(null);
                                }
                            }} />
                        <label htmlFor="notSpecifiedLocation">Not Specified Yet</label>
                    </div>
                </div>
                : null}
            {currentStep === 2 ? <div className="second-step">
                <div className="category-input">
                    <label htmlFor="category">Project Category (Optional)</label>
                    <select id="category" placeholder="Select a category related to your project" onChange={(e) => setTechnology([e.target.value])}>
                        <option> ---Choose category---</option>
                        <option> Web Application</option>
                        <option> Mobile Application</option>
                        <option> Wordpress</option>
                        <option> Ceo </option>
                        <option> Digital Ads  </option>
                    </select>
                </div>
                <div className="technology-input">
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
                </div>
            </div>
                : null}
            {currentStep === 3 ? <div className="third-step">
                <InputType label={"Additional Field (Optional)"} type={"text"} placeHolder={"You can add and customize additional fields for extra project request information "} onChange={(e) => setAdditionalField(e.target.value)} />
                    <label htmlFor="upload-file">
                        Additional File (Optional)
                    </label>
                <div className="upload-box">
                    <div className="upload-button" onClick={(e) => setAdditionalFile(e.target.value)}>
                        <p>choose file</p>
                        <div className="icon upload-icon"><UploadIcon /></div>
                    </div>
                    <p>(Maximum file size 2mb)</p>
                    <input type="file" placeHolder={" (Maximum file size 2mb)"} id="upload-file" onChange={(e) => setAdditionalFile(e.target.value)} />
                </div>
                <InputType label={"Additional Link (Optional)"} type={"text"} placeHolder={" You can add and customize additional link for your request "} onChange={(e) => setAdditionalLink(e.target.value)} />
            </div>
                : null}
            <div className="buttons">
                {currentStep < 3 ? <Button onClick={onSave} variant={"secondary"} label={"Save"} /> : <Button onClick={onSubmit} variant={"primary"} label={"Submit"} />}
                {currentStep < 3 ? <Button onClick={onNext} variant={"primary"} label={"Next"} /> : null}
            </div>
        </div>
    );
}

export default UploadBusinessProject;
