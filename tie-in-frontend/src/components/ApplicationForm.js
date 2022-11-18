import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "../components/Button";
import InputType from "../components/InputType";
import { isEmailValid } from "../utils/email";
import validateTextInput from "../utils/validateTextInput";
import validateContact from "../utils/validateContact";
import { saveStudentApplication } from "../api/studentApplications";

function ApplicationForm({ companyProjectName, onClose, team, status, studentTeamByID }) {

  const saveApplication = useMutation(["studentProject"], () => saveStudentApplication({
    
    //to be updated
    "_id": 2,
    "team_id": teamId,
    "student_id": individualId,    //to be updated
    "team_name": teamName, 
    "business_request_id": sessionStorage.getItem('BusinessProjectViewed'),
    "application_status": 'pending',
    "created_at": applicationDate,
  }), {
    onSuccess: () => {
      alert("Application Completed");
    },
    onError: () => {
      alert("Something went wrong, please try again.");
    }
  });

  // const {name, image} = team;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [teamId, setTeamId] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [individualId, setIndividualId] = useState("");
  const [message, setMessage] = useState("");
  const [individualIsSelected, setIndividualIsSelected] = useState(false);
  const [applicationDate, setApplicationDate] = useState("");

  const validateInput = () => {
    if (firstName === "" || lastName === "" || email === "") {
      alert('Enter all mandatory input field values');
      return false;
    }
    if (!validateTextInput(firstName)) {
      alert("Valid first name is required.");
      return false;
    }
    if (!validateTextInput(lastName)) {
      alert("Valid last name is required.");
      return false;
    }
    if (!isEmailValid(email) || !email || email === "") {
      alert("Enter a valid Email");
      return false;
    }
    if (contact) {
      if (!validateContact(contact)) {
        alert("Enter Valid Contact info");
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

  const apply = () => {
    if (validateInput()) {
      setApplicationDate(new Date())
      let team= studentTeamByID.find(item => item.id ==teamId);
      setTeamName(team.team_name);
      saveApplication.mutate();
    }
  }

  return (
    <div className="application-card">
      <div className="name">
        <InputType label={"First Name(Required)"} type={"text"} placeHolder={"Enter your first name"} onChange={(e) => setFirstName(e.target.value)} />
        <InputType label={"Last Name (Required)"} type={"text"} placeHolder={"Enter your last name"} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <InputType type={"email"} label={"Email (required)"} onChange={(e) => setEmail(e.target.value)} />
      <InputType label={"Phone number"} onChange={(e) => setContact(e.target.value)} />
      <fieldset>
        <label>Select Team (required): </label>
        <select id="SelectedTeam" onChange={(e) => setTeamId(e.target.value)} disabled={individualIsSelected}>
          <option value={teamId}>None</option>;
          ({
            studentTeamByID ? studentTeamByID.map((team, index) => {
              return <option key={index} value={team.id}>{team.team_name}</option>;
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
      <Button onClick={apply} variant={"primary"} label={"Submit"} />
    </div>
  )
}

export default ApplicationForm;
