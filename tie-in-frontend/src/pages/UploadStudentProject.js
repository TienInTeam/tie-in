import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { saveStudentProject } from "../api/studentProject";

function UploadStudentProject() {
    const saveProject =  useMutation(["studentProject"], () => saveStudentProject({
        "id": 2,
        "name": name,
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
        "instructor_email": instructor,
        "product_link": productLink,
        "institution": institution
    }), {
        onSuccess: () => {
        },
        onError: () => {
            alert("Something went wrong, please try again.");
        }
    });

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [institution, setInstitution] = useState("");
    const [location, setLocation] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [description, setDescription] = useState("");
    const [productLink, setProductLink] = useState("");
    const [instructor, setInstructor] = useState("");
    const [additionalMessage, setAdditionalMessage] = useState("");
    const [technology, setTechnology] = useState([]);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const onSave = () => {
        saveProject.mutate();
    }

    return (
        <div className={"upload-project"}>
            <label>Project Name</label>
            <input type={"text"} onChange={(e) => setName(e.target.value)}/>
            <label>Upload logo:</label>
            <input type={"file"} onChange={(e) => setImage(e.target.value)}/>
            <label>Duration*</label>
            <Datepicker
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => onChange(date)}
                selectsRange
            />
            <label>Institution</label>
            <input type={"text"} onChange={(e) => setInstitution(e.target.value)}/>
            <label>Location</label>
            <input type={"text"} onChange={(e) => setLocation(e.target.value)}/>
            <label>Production Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)}/>
            <label>Product Link</label>
            <input type={"text"} onChange={(e) => setProductLink(e.target.value)}/>


            <label>Instructor Email</label>
            <input type={"text"} onChange={(e) => setInstructor(e.target.value)}/>

            <label>Additional Message</label>
            <textarea onChange={(e) => setAdditionalMessage(e.target.value)}/>
            <label>Additional files:</label>
            <input type={"file"} onChange={(e) => setImage(e.target.value)}/>

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
            <button onClick={onSave} style={{marginTop: "2rem"}}>Save</button>
        </div>
    );
}

export default UploadStudentProject;
