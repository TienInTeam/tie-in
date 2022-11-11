import { useState } from "react";
import Button from "../components/Button";
import InputType from "../components/InputType";
import { isEmailValid } from "../utils/email";
import validateTextInput from "../utils/validateTextInput";
import validateContact from "../utils/validateContact";

function ApplicationForm({ companyProjectName, onClose, team, status }) {
  // const {name, image} = team;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [teamId, setTeamId] = useState("");
  const [message, setMessage] = useState("");
  const [teamIsSelected, setTeamIsSelected] = useState(false);

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
    else {
      return true;
    }
  }

  const apply = () => {
    if (validateInput()) {
      
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
        <label><span>Select Team</span>
          <select id="design" onChange={(e) => setTeamId([e.target.value])}>
            <option> ---Choose tool---</option>
            <option> Figma</option>
            <option> Adobe XD</option>
            <option> Adobe Illustrator</option>
            <option> Adobe Photoshop </option>
            <option> Sketch Up  </option>
          </select><br />
        </label>
        <input type="checkbox" id="individualProjectCheck" name="individualProjectCheck" value="individualProject" checked={teamIsSelected}
          onChange={() => {
            setTeamIsSelected(!teamIsSelected);
            if (teamIsSelected) {
              setTeamId(new Date());
            }
            else {
              setTeamId(null);
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
