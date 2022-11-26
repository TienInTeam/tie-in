import {useQuery} from "@tanstack/react-query";
import Button from "./Button";
import {requestTeamsByTeamId} from "../api/teams";

const TeamsBox = ({name, members, businessProjectStatus, teamId, onApprove}) => {
    const requestTeam = useQuery(["teams"], () => requestTeamsByTeamId(teamId), {
        onError: (error) => {
            alert(error.message);
        }
    });

    const renderMembers = () => {
        return requestTeam.data?.members.map((member, index) => {
                if (index <= 2) {
                    return <img key={index} src={member.photo_url} alt="student"/>
                } else if (index === members.length - 1) {
                    return <p key={index}>+<span>{index - 2}</span></p>
                }
            }
        )
    }

    const renderButton = () => {
        if (businessProjectStatus === "open") {
           return <Button
                label={"Accept"}
                variant={"primary"}
                onClick={onApprove}
            />
        } else {
            return <Button
                label={"Approved"}
                variant={"tertiary"}
                onClick={onApproved}
            />
        }
    }

    const onApproved = () => {
        alert("You already approved!")
    }

    return (
        <div className="team-box">
            <h3>{name}</h3>
            <div className="images">
                {renderMembers()}
            </div>
            {renderButton()}
        </div>
    )
}

export default TeamsBox;
