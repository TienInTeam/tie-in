import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateApplicationStatuses } from "../api/studentApplications";
import Button from "./Button";

const TeamsBox = ({ team_name, members}) => {
  const [approve, setApprove] = useState(false)

  const changeStatus = useMutation(["applicationStatus"], () => updateApplicationStatuses({
    "application_status": "approved"
})
  );

  const onApprove = () => {
    setApprove(!approve)
    changeStatus.mutate()
  }
  return (
    <div className="team-box">
      <h3>{team_name}</h3>
      <div>
        {members.map((member,index) => (
        
          <img src={member.member_photo} alt="student's photo" key={index} />

        ))}
      </div>
      <Button label={approve?"Approved":"Accept"} variant={"primary"} onClick={onApprove} />
    </div>
  )
}

export default TeamsBox;
