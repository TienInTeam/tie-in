import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateApplicationStatuses } from "../api/studentApplications";
import Button from "./Button";
import { requestTeams } from "../api/teams";

const TeamsBox = ({ name, members }) => {
  const [approve, setApprove] = useState(false)
  const id = 2;

  const changeStatus = useMutation(["applicationStatus", id], () => updateApplicationStatuses(
    {
      "application_status": "approved"
    }, id)
  );
  const requestTeam = useQuery(["teams"], () => requestTeams(), {
    onError: (error) => {
      alert(error.message);
    }
  });
  if (requestTeam.isLoading) {
    return <span>Loading...</span>
  }

  const onApprove = () => {
    setApprove(!approve)
    changeStatus.mutate()
  }
  return (
    <div className="team-box">
      <h3>{name}</h3>
      <div className="images">
        {members.map((member, index) => {
          // <img src={member.photo_url} alt="student's photo" key={index} />
          if (index <= 2) {
            return <img key={index} src={member.photo_url} alt="student" />
          }
          else if (index === members.length - 1) {
            return <p key={index}>+<span >{index - 2}</span></p>
          }

        }
        )}
      </div>
      <Button label={approve ? "Approved" : "Accept"} variant={approve ? "tertiary" : "primary"} onClick={onApprove} />
    </div>
  )
}

export default TeamsBox;
