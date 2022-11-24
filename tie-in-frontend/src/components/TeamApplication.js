import { useQuery } from "@tanstack/react-query";
import { getBusinessByEmail } from "../api/business";
import { requestApplicationStatuses } from "../api/studentApplications";
import { requestTeams } from "../api/teams";
import TeamsBox from "../components/TeamsBox";
import Button from "./Button";

function TeamApplication({ name, logo_url, onClose }) {
  const requestTeam = useQuery(["teams"], () => requestTeams(), {
    onError: (error) => {
      alert(error.message);
    }
  });

  const requestApplication = useQuery(["application"], () => requestApplicationStatuses(), {
    onError: (error) => {
      alert(error.message);
    }
  });
  const requestBusinessByEmail = useQuery(["businessByEmail"], () => getBusinessByEmail(sessionStorage.getItem("userEmail")), {
    enabled: !!sessionStorage.getItem("userEmail"),
  },
    {
      onError: (error) => {
        alert(error.message);
      }
    });
  if (requestTeam.isLoading) {
    return <span>Loading...</span>
  }
  if (requestBusinessByEmail.isLoading) {
    return <span>Loading...</span>
  }
for(let i = 0; i <requestApplication.data.length; i++){
  console.log(requestApplication.data.map((application) => {return application.business_id})[i]);
}
  
for(let i = 0; i <requestApplication.data.length; i++){
  
  if (requestApplication.data.map((application) => {return application.business_id})[i] === requestBusinessByEmail.data[0].id) {
    return (
      <div className="team-application">
        <div className="title-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} alt="company's logo" />
            <h2>{name}</h2>
          </div>
          <Button label={"Close Project"} variant={"secondary"} onClick={onClose} />
        </div>
        <div>
          {requestTeam.data.map((team, index) => (
            <TeamsBox
              name={team.name}
              members={team.members}
              key={index} />
          ))}

        </div>
      </div>
    )
  }
}
}

export default TeamApplication
