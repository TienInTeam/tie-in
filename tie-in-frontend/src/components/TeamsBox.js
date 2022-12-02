import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import Button from "./Button";
import {requestTeamsByTeamId} from "../api/teams";

const TeamsBox = ({name, members, teamId, onApprove}) => {
    const [closed, setClosed] = useState(false);
    const requestTeam = useQuery(["teams"], () => requestTeamsByTeamId(teamId), {
        onError: (error) => {
            alert(error.message);
        }
    });

    const renderMembers = () => {
        return requestTeam.data?.members.map((member, index) => {
            return <img key={index} src={member.photo_url} alt="student"/>
            }
        )
    }

    const onApproveClicked = () => {
        onApprove();
        setClosed(true);
    }

    const renderButton = () => {
        if (!closed) {
           return <Button
                label={"Accept"}
                variant={"primary"}
                onClick={onApproveClicked}
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
            <p>{name}</p>
            <div className="images">
                {renderMembers()}
            </div>
            {renderButton()}
        </div>
    )
}

export default TeamsBox;
