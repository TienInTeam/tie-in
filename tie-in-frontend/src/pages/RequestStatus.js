import { useQuery } from "@tanstack/react-query";
import { requestTeams } from "../api/teams";
import TeamsBox from "../components/TeamsBox";
import React from "react";

function RequestStatus() {
  const requestTeam = useQuery(["teams"], () => requestTeams(), {
    onError: (error) => {
      alert(error.message);
    }
  });
  if (requestTeam.isLoading) {
    return <span>Loading...</span>
  }

  const onApprove = () => {
    alert("reset")
  }
  return (
    <>
      <h1>Request Status List</h1>
      <div>
      {requestTeam.data.map((team, index) => (
          <TeamsBox team_name={team.team_name} members={team.members} key={index}/>
        ))}
       
      </div>
    </>
  )
}

export default RequestStatus
