import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { saveStudentProject } from "../api/studentProject";
import Button from "../components/Button";
import InputType from "../components/InputType";
import { isEmailValid } from "../utils/email";
import validateTextInput from "../utils/validateTextInput";

function UploadStudentProject() {
    const saveProject = useMutation(["studentProject"], () => saveStudentProject({
        "id": 31,
        "name": projectName,
        "logo": image,
        "description": description,
        "linkedIn_url": "https://test.com",
        "team_id": "",
        "approval_status": "Pending",
        "tags": "Software Engineer, Web-App",
        "start_date": startDate,
        "end_date": endDate,
        "business_model": "",
        "technology": technology,
        "instructor_email": instructorEmail,
        "product_link": productLink,
        "institution": institution
    }), {
        onSuccess: () => {
        },
        onError: () => {
            alert("Something went wrong, please try again.");
        }
    });

    const [projectName, setProjectName] = useState("");
    const [image, setImage] = useState("");
    const [institution, setInstitution] = useState("");
    const [location, setLocation] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [dateIsChecked, setDateIsChecked] = useState(false);
    const [description, setDescription] = useState("");
    const [productLink, setProductLink] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [instructorEmail, setInstructorEmail] = useState("");
    const [additionalMessage, setAdditionalMessage] = useState("");
    const [technology, setTechnology] = useState([]);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const validateInput = () => {
        if (projectName === "" || institution === "" || productCategory === "") {
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
        if (!validateTextInput(productCategory)) {
            alert("Valid Product Category name is required.");
            return false;
        }
        if (!isEmailValid(instructorEmail) || !instructorEmail || instructorEmail === "") {
            alert("Valid email is required.");
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
        <div className={"upload-project"}>
            <InputType type={"text"} label={"Project Name* "} onChange={(e) => setProjectName(e.target.value)} />
            <InputType type={"file"} label={"Upload logo: "} onChange={(e) => setImage(e.target.value)} />
            <fieldset>
                <label>Project Duration*</label>
                <Datepicker
                    selected={startDate}
                    startDate={!dateIsChecked ? startDate : null}
                    endDate={!dateIsChecked ? endDate : null}
                    onChange={(date) => onChange(date)}
                    selectsRange
                    disabled={dateIsChecked}
                />
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
                <label htmlFor="inProgressCheck"> Still in Progress</label>
            </fieldset>

            <InputType type={"text"} label={"Institution* "} onChange={(e) => setInstitution(e.target.value)} />
            <InputType type={"text"} label={"Location "} onChange={(e) => setLocation(e.target.value)} />
            <label>Production Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} />
            <InputType type={"text"} label={"Product Category* "} onChange={(e) => setProductCategory(e.target.value)} />
            <InputType type={"email"} label={"Instructor Email* "} onChange={(e) => setInstructorEmail(e.target.value)} />
            <InputType type={"text"} label={"Product Link "} onChange={(e) => setProductLink(e.target.value)} />
            <label>Additional Message</label>
            <textarea onChange={(e) => setAdditionalMessage(e.target.value)} />
            <InputType type={"file"} label={"Additional files: "} onChange={(e) => setImage(e.target.value)} />

            <label>Design</label>
            <select id="design" onChange={(e) => setTechnology([e.target.value])}>
                <option> ---Choose tool---</option>
                <option> Figma</option>
                <option> Adobe XD</option>
                <option> Adobe Illustrator</option>
                <option> Adobe Photoshop </option>
                <option> Sketch Up  </option>
            </select>

            <label>Development</label>
            <select id="dev" onChange={(e) => setTechnology([...technology, e.target.value])}>
                <option> ---Choose tool---</option>
                <option> HTML </option>
                <option> JS </option>
                <option> React.JS </option>
                <option> CSS </option>
                <option> Java </option>
                <option> React Native </option>
            </select>

            <label>Management/Communication</label>
            <select id="management" onChange={(e) => setTechnology([...technology, e.target.value])}>
                <option> ---Choose tool---</option>
                <option> Notion </option>
                <option> Slack </option>
                <option> Microsoft Teams </option>
                <option> LinkedIn </option>
                <option> Trello </option>
                <option> Jira </option>
                <option> GitHub </option>
            </select>

            <Button onClick={onSave} variant={"primary"} label={"Save"} />
        </div>
    );
}

export default UploadStudentProject;
