import {useQuery} from "@tanstack/react-query";
import { requestTeamsByTeamId} from "../api/teams";
import TeamsBox from "../components/TeamsBox";
import Button from "./Button";

function TeamApplication({name, logo_url, teamId, status,  onClose, onApprove}) {
    const businessId = sessionStorage.getItem("userMongoId");

    const requestTeam = useQuery(["teams"], () => requestTeamsByTeamId(teamId), {
        onError: (error) => {
            alert(error.message);
        }
    });

    // const renderMembers = () => {
    //     return requestTeam.data.members.map((member) => {
    //         return
    //     } )
    // }

    return (
        <div className="team-application">
            <div className="title-wrapper">
                <div className="logo-wrapper">
                    <img src={logo_url} alt="company's logo"/>
                    <h2>{name}</h2>
                </div>
                <Button label={"Close Project"} variant={"secondary"} onClick={onClose}/>
            </div>
            <div>
                  <TeamsBox
                      name={requestTeam.data?.name}
                    // members={team.members}
                    status={status}
                    teamId={teamId}
                    onApprove={onApprove}
                  />
            </div>
        </div>
    )
}

export default TeamApplication
