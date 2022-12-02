import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { saveBusinessProject } from "../api/businessProject";
import Button from "../components/Button";
import InputType from "../components/InputType";
import validateTextInput from "../utils/validateTextInput";
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';
import { ReactComponent as UploadIcon } from '../assets/icons/actions/actions-upload.svg';
import MultiStepProgressBar from "../components/MultiProgressBar";
import { ReactComponent as RemoveIcon } from '../assets/icons/others/close-icon.svg';
import SuccessPopUp from "../components/SuccessPopUp";


function UploadBusinessProject() {
    const businessId = sessionStorage.getItem('userMongoId');

    const saveProject = useMutation(["businessProject"], () => saveBusinessProject({
        "name": projectName,
        "description": description,
        "team_size": teamSize,
        "team_requirements": teamRequirement,
        "end_date": endDate,
        "location": location,
        "budget": estimatedBudget,
        "category": categories,
        "technologies": technologies,
        "additionalFields": additionalField,
        "file": additionalFile,
        "links": additionalLink,
        "status": "Open",
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
    const [technologies, setTechnologies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [additionalField, setAdditionalField] = useState("");
    const [additionalFile, setAdditionalFile] = useState("");
    const [additionalLink, setAdditionalLink] = useState("");
    const [business, setBusiness] = useState({});
    const [currentStep, setCurrentStep] = useState(1);
    const [success, setSuccess] = useState(false);

    const validateInput = () => {
        if (projectName === "" || description === "" || teamSize === "" || estimatedBudget === "" || teamRequirement === "") {
            alert('Enter all mandatory input field values');
            return false;
        }
        if (!validateTextInput(projectName)) {
            alert("Valid Project name is required.");
            return false;
        }
        if (teamSize < 1) {
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
        if (categories.length < 0) {
            alert("Category is required.");
            return false;
        } else {
            return true;
        }
    }

    const onSubmit = () => {
        if (validateInput()) {
            saveProject.mutate();
            setSuccess(true)
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

    const onTechnologyRemove = (index) => {
        alert("technology ")
    }
    const onCategoryRemove = (index) => {
        alert("category ")
    }
    const onClickSuccess = () => {
        navigate("/dashboard")
    }

    const renderTechnologies = () => {
        if (technologies.length > 0) {
            return technologies.map((technology, index) => {
                return (
                    <div key={index} className={"selectedOption"}>
                        <p>{technology}</p>
                        <RemoveIcon className={"remove"} onClick={() => onTechnologyRemove(index)} />
                    </div>
                )
            })
        } else {
            return null;
        }
    }

    const renderCategories = () => {
        if (categories.length > 0) {
            return categories.map((category, index) => {
                return (
                    <div key={index} className={"selectedOption"}>
                        <p>{category}</p>
                        <RemoveIcon className={"remove"} onClick={() => onCategoryRemove(index)} />
                    </div>
                )
            })
        } else {
            return null;
        }
    }


    return (
        <div className={!success ? "upload-business-project" : "upload-business-project upload-dark"}>
            <div className={!success ? "success-pop-up" : "success-pop-up dark"}>
                {success && <SuccessPopUp title={"Awsome!"} subtitle={"Your project has been uploaded successfully"} label={"Back to Dashboard"} onClickSuccess={onClickSuccess} />}
            </div>
            <div className="header-wrapper">
                {currentStep > 1 ? <div className="icon back-icon" onClick={onBack}><BackIcon /></div> : <div className="icon back-icon" onClick={onLocation}><BackIcon /></div>}
                <div><h2>Upload Business Project</h2></div>
            </div>
            <MultiStepProgressBar currentStep={currentStep} />
            {currentStep === 1 ?
                <div className="first-step">
                    <InputType label={"Project Title (Required)"} type={"text"} placeholder={"Enter your project name"} onChange={(e) => setProjectName(e.target.value)} />
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
                    <InputType label={"Team Size (Required)"} type={"number"} placeholder={"Enter your preferred team size"} min={1} onChange={(e) => setTeamSize(e.target.value)} />
                    <InputType label={"Team Requirement (Required)"} type={"text"} placeholder={"Enter your team requirements"} onChange={(e) => setTeamRequirement(e.target.value)} />
                    <div className="budget-input">
                        <label htmlFor="budget">Estimated Budget (Required)</label>
                        <select
                            id="budget"
                            aria-label="budget"
                            placeholder="Please choose a budget range"
                            onChange={(e) => setEstimatedBudget(e.target.value)}
                            defaultValue=""
                        >
                            <option value="" disabled>Please choose the budget</option>
                            <option value="5000-10000">5000-10000</option>
                            <option value="10000-15000">10000-15000</option>
                            <option value="15000-20000">15000-20000</option>
                            <option value="20000-25000">20000-25000</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="location-input">
                        <label htmlFor="location">Location (Required)</label>
                        <select id="location" aria-label="Location" onChange={(e) => setLocation(e.target.value)} defaultValue="">
                            <option value="" disabled>Please choose your location</option>
                            <option value="Vancouver">Vancouver</option>
                            <option value="Burnaby">Burnaby</option>
                            <option value="North Vancouver">North Vancouver</option>
                            <option value="Remotely">Remotely</option>
                            <option value="Out of BC">Out of BC</option>
                        </select>
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
                </div>
                : null}
            {currentStep === 2 ? <div className="second-step">
                <div className="category-input">
                    <label htmlFor="category">Project Category (Required)</label>
                    <select id="category" placeholder="Select a category related to your project" onChange={(e) => setCategories([...categories, e.target.value])}>
                        <option> ---Choose category---</option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="Mobile Application">Mobile Application</option>
                        <option value="System Architecture">System Architecture</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                    {renderCategories()}
                </div>
                <div className="technology-input">
                    <label htmlFor="technology">Technology (Optional)</label>
                    <select id="technology" placeholder="Select a technology related to your project" onChange={(e) => setTechnologies([...technologies, e.target.value])}>
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
                    {renderTechnologies()}
                </div>
            </div>
                : null}
            {currentStep === 3 ? <div className="third-step">
                <InputType label={"Additional Field (Optional)"} type={"text"} placeholder={"You can add and customize additional fields for extra project request information "} onChange={(e) => setAdditionalField(e.target.value)} />
                <label htmlFor="upload-file">
                    Additional File (Optional)
                </label>
                <div className="upload-box">
                    <input type="file" placeholder={" (Maximum file size 2mb)"} id="upload-file" onChange={(e) => setAdditionalFile(e.target.value)} />
                    <div className="upload-button" onClick={(e) => setAdditionalFile(e.target.value)}>
                        <p>Choose File</p>
                        <div className="icon upload-icon"><UploadIcon /></div>
                    </div>
                    <p>(Maximum file size 2mb)</p>
                </div>
                <InputType label={"Additional Link (Optional)"} type={"text"} placeholder={" You can add and customize additional link for your request "} onChange={(e) => setAdditionalLink(e.target.value)} />
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
