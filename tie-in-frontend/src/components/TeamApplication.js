import TeamsBox from "../components/TeamsBox";
import Button from "./Button";

function TeamApplication({name, logo, team, applicationStatus, onClose, onApprove}) {
    return (
        <div className="team-application">
            <div className="title-wrapper">
                <div className="logo-wrapper">
                    <img src={logo} alt="logo" />
                    <h2>{name}</h2>
                </div>
                <Button label={"Close Project"} variant={"secondary"} onClick={onClose}/>
            </div>
            <div>
            <div className="header-wrapper">
                <h3>Team</h3>
                <h3>Members</h3>
                <h3>Status</h3>
            </div>
                <TeamsBox
                    name={team.team_name}
                    members={team.members}
                    applicationStatus={applicationStatus}
                    teamId={team.team_id}
                    onApprove={onApprove}
                />
            </div>
        </div>
    )
}

export default TeamApplication;
