import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../components/Button";
import InputType from "../components/InputType";
import { isEmailValid } from "../utils/email";
import validateTextInput from "../utils/validateTextInput";
import validateContact from "../utils/validateContact";
import { saveStudentApplication } from "../api/studentApplications";

function ApplicationForm({ studentTeam }) {

  const location = useLocation();
  const businessProjectId = location.state.id;

  const saveApplication = useMutation(["studentProject"], () => saveStudentApplication({
    "team_id": teamId,
    "business_request_id": businessProjectId,
    "status": "Open",
  }), {
    onSuccess: () => {
      alert("Application Completed");
    },
    onError: () => {
      alert("Something went wrong, please try again.");
    }
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [teamId, setTeamId] = useState(null);
  const [individualId, setIndividualId] = useState("");
  const [message, setMessage] = useState("");
  const [individualIsSelected, setIndividualIsSelected] = useState(false);

  const validateInput = () => {
    if (firstName === "" || lastName === "" || email === "") {
      alert('Enter all mandatory input field values');
      return false;
    }
    if (!validateTextInput(firstName)) {
      alert("First name is required.");
      return false;
    }
    if (!validateTextInput(lastName)) {
      alert("Please enter a valid last name");
      return false;
    }
    if (!isEmailValid(email) || !email || email === "") {
      alert("Please enter a valid email");
      return false;
    }
    if (contact) {
      if (!validateContact(contact)) {
        alert("Please enter a valid contact number");
        return false;
      }

      else {
        return true;
      }
    }
    if (teamId === null && !individualIsSelected) {
      alert("Select team or apply as individual");
      return false;
    }
    else {
      return true;
    }
  }

  const onApply = () => {
    if (validateInput()) {
      saveApplication.mutate();
    }
  }

  return (
    <div className="application-card">
      <div className="name">
        <InputType label={"First Name(Required)"} type={"text"} placeholder={"Enter your first name"} onChange={(e) => setFirstName(e.target.value)} />
        <InputType label={"Last Name (Required)"} type={"text"} placeholder={"Enter your last name"} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <InputType type={"email"} label={"Email (required)"} onChange={(e) => setEmail(e.target.value)} />
      <InputType label={"Phone number"} onChange={(e) => setContact(e.target.value)} />
      <fieldset>
        <label>Select Team (required): </label>
        <select id="SelectedTeam" onChange={(e) => setTeamId(e.target.value)} disabled={individualIsSelected}>
          <option value={teamId}>None</option>;
          ({
            studentTeam ? studentTeam.map((team, index) => {
              return <option key={index} value={team._id}>{team.name}</option>;
            }
            ) : ''
          })
        </select><br />
        <input type="checkbox" id="individualProjectCheck" name="individualProjectCheck" value="individualProject" checked={individualIsSelected}
          onChange={() => {
            setTeamId(null);
            document.getElementById("SelectedTeam").selectedIndex = "0";
            setIndividualIsSelected(!individualIsSelected);
            if (individualIsSelected) {
              //to be updated
              setIndividualId('116');
              //setIndividualId(sessionStorage.getItem('student_id'));
            }
          }} />
        <label htmlFor="individualProjectCheck">Applying as an individual</label>
      </fieldset>
      <label>
        <span>Message</span>
        <textarea onChange={(e) => setMessage(e.target.value)} />
      </label>
      <Button onClick={onApply} variant={"primary"} label={"Submit"} />
    </div>
  )
}

export default ApplicationForm;
