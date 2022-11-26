import {useMutation, useQuery} from "@tanstack/react-query";
import { useState } from "react";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { saveStudentProject } from "../api/studentProject";
import {getStudentTeamsByStudentId} from "../api/teams";
import Button from "../components/Button";
import InputType from "../components/InputType";
import { isEmailValid } from "../utils/email";
import validateTextInput from "../utils/validateTextInput";
import { isURLValid } from "../utils/validateURL";
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';


function UploadStudentProject() {
    const studentId = sessionStorage.getItem("userMongoId");

    const teams = useQuery(["team"], () => getStudentTeamsByStudentId(studentId), {
        enabled: !!studentId
    });
    const saveProject = useMutation(["studentProject"], () => saveStudentProject({
        "project_name": projectName,
        "logo_url": imageLogo,
        "description": description,
        "team_id": team,
        "approval_status": "Pending",
        "start_date": startDate,
        "end_date": endDate,
        "business_model": businessPlan,
        "technologies": technology,
        "instructor_email": instructorEmail,
        "instructor_linkedIn": instructorLinkedIn,
        "project_link": projectLink,
        "institution": institution,
        "additional_message": additionalMessage,
        "category": projectCategory,
        "location": location
    }), {
        onSuccess: () => {
            alert("Project details updated Successfully");
        },
        onError: () => {
            alert("Something went wrong, please try again.");
        }
    });

    const [projectName, setProjectName] = useState("");
    const [imageLogo, setImageLogo] = useState("");
    const [addFile, setAddFile] = useState("");
    const [businessPlan, setBusinessPlan] = useState("");
    const [projectImage, setProjectImage] = useState("");
    const [institution, setInstitution] = useState("");
    const [location, setLocation] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [dateIsChecked, setDateIsChecked] = useState(false);
    const [description, setDescription] = useState("");
    const [projectLink, setProjectLink] = useState("");
    const [projectCategory, setProjectCategory] = useState([]);
    const [instructorEmail, setInstructorEmail] = useState("");
    const [instructorLinkedIn, setInstructorLinkedIn] = useState("");
    const [additionalMessage, setAdditionalMessage] = useState("");
    const [technology, setTechnology] = useState([]);
    const [team, setTeam] = useState("");

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const validateInput = () => {
        if (projectName === "" || institution === "" || projectCategory.length < 0 || location === "" || imageLogo === "") {
            alert('Enter all mandatory input field values');
            return false;
        }
        if (!validateTextInput(projectName)) {
            alert("Valid Project name is required.");
            return false;
        }
        if (!validateTextInput(institution)) {
            alert("Valid Institution name is required.");
            return false;
        }
        if (!validateTextInput(projectCategory)) {
            alert("Valid Project Category name is required.");
            return false;
        }
        if (!isEmailValid(instructorEmail) || !instructorEmail || instructorEmail === "") {
            alert("Enter a valid Email");
            return false;
        }
        if (!validateTextInput(location)) {
            alert("Enter Valid location");
            return false;
        }
        if (projectLink) {
            if (!isURLValid(projectLink)) {
                alert("Enter a valid Link");
                return false;
            }
            else {
                return true;
            }
        }
        if (instructorLinkedIn) {
            if (!isURLValid(instructorLinkedIn)) {
                alert("Enter a valid LinkedIn URL");
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

    const renderTeam = () => {
          return teams.data?.map((team, index) =>(<p key={index} onClick={() => {
             console.log(team._id)
             setTeam(team._id)
         }}>{team.name}</p>))

    }

    return (
        <div className={"upload-project"}>
            <h1>Upload Your Project</h1>

               <fieldset>
                    <InputType type={"text"} label={"Project Name (required)"} onChange={(e) => setProjectName(e.target.value)} />
                    <InputType type={"file"} label={"Project Logo (required)"} onChange={(e) => setImageLogo(e.target.value)} />
                    <fieldset>
                        <label>Project Duration (required)</label>
                        <Datepicker
                            selected={startDate}
                            startDate={!dateIsChecked ? startDate : null}
                            endDate={!dateIsChecked ? endDate : null}
                            onChange={(date) => onChange(date)}
                            selectsRange
                            disabled={dateIsChecked}
                        />
                        <label htmlFor="inProgressCheck">Still in Progress</label>
                        <input type="checkbox" id="inProgressCheck" name="inProgressCheck" value="inProgress" checked={dateIsChecked}
                            onChange={() => {
                                setDateIsChecked(!dateIsChecked);
                                if (dateIsChecked) {
                                    setStartDate(new Date());
                                }
                                else {
                                    setStartDate(null);
                                    setEndDate(null);
                                }
                            }} />
                    </fieldset>
                    <InputType type={"file"} label={"Project Business Plan(optional) "} onChange={(e) => setBusinessPlan(e.target.value)} />
                    <InputType type={"text"} label={"Project Institution (required)"} onChange={(e) => setInstitution(e.target.value)} />
                    <InputType type={"text"} label={"Location (required)"} onChange={(e) => setLocation(e.target.value)} />
                </fieldset>

                <fieldset>
                    <InputType type={"text"} label={"Project Category (required)"} onChange={(e) => setProjectCategory(e.target.value)} />
                    <label>
                        <span>Project Description (required)</span>
                        <textarea onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <InputType type={"file"} label={"Project Image (optional) "} onChange={(e) => setProjectImage(e.target.value)} />
                    <InputType type={"text"} label={"Project Link (optional) "} onChange={(e) => setProjectLink(e.target.value)} />
                </fieldset>

                <fieldset>
                    <label><span>Design (optional)</span>
                        <select id="design" onChange={(e) => setTechnology([e.target.value])}>
                            <option> ---Choose tool---</option>
                            <option> Figma</option>
                            <option> Adobe XD</option>
                            <option> Adobe Illustrator</option>
                            <option> Adobe Photoshop </option>
                            <option> Sketch Up  </option>
                        </select><br />
                    </label>
                    <label><span>Development (optional)</span>
                        <select id="dev" onChange={(e) => setTechnology([...technology, e.target.value])}>
                            <option> ---Choose tool---</option>
                            <option> HTML </option>
                            <option> JS </option>
                            <option> React.JS </option>
                            <option> CSS </option>
                            <option> Java </option>
                            <option> React Native </option>
                        </select><br />
                    </label>
                    <label><span>Management/Communication (optional)</span>
                        <select id="management" onChange={(e) => setTechnology([...technology, e.target.value])}>
                            <option> ---Choose tool---</option>
                            <option> Notion </option>
                            <option> Slack </option>
                            <option> Microsoft Teams </option>
                            <option> LinkedIn </option>
                            <option> Trello </option>
                            <option> Jira </option>
                            <option> GitHub </option>
                        </select><br />
                    </label>
                </fieldset>

            <fieldset>
                {renderTeam()}
            </fieldset>
                <fieldset>
                    <label>
                        <span>Additional Message</span>
                        <textarea onChange={(e) => setAdditionalMessage(e.target.value)} />
                    </label>
                    <InputType type={"file"} label={"Additional files: "} onChange={(e) => setAddFile(e.target.value)} />
                </fieldset>
                <fieldset>
                    <InputType type={"email"} label={"Instructor Email (required)"} onChange={(e) => setInstructorEmail(e.target.value)} />
                    <InputType type={"text"} label={"Instructors' Linked Profile (optional) "} onChange={(e) => setInstructorLinkedIn(e.target.value)} />
                </fieldset>
            <Button onClick={onSave} variant={"primary"} label={"Save"} />
        </div>
    );
}

export default UploadStudentProject;
