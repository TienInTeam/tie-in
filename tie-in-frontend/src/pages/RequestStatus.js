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


  const team = [
    {
      "id": 56,
      "team_name": "Luna",
      "members": [
        {
          "id": 112,
          "member_photo": "https://picsum.photos/id/476/200/300"
        },
        {
          "id": 113,
          "member_photo": "https://picsum.photos/id/476/200/300"
        },
        {
          "id": 114,
          "member_photo": "https://picsum.photos/id/476/200/300"
        }
      ]
    },
  ]
  const onApprove = () => {
    alert("reset")
  }
  return (
    <>
      <h1>Request Status List</h1>
      <div>
        {
        team.map((team, index) => {
            console.log("team:" + JSON.stringify(team.team_name));
            <TeamsBox
              team={team}
              onApprove={onApprove}
              key={index}
            />
          }
          )
        }
      </div>
    </>
  )
}

export default RequestStatus
