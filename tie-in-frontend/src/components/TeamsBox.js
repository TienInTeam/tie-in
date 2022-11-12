import Button from "./Button";

const TeamsBox = ({ team_name, members, onApprove}) => {
  return (
    <div className="team-box">
      <h3>{team_name}</h3>
      <div>
        {members.map((member,index) => (
        
          <img src={member.member_photo} alt="student's photo" key={index} />

        ))}
      </div>
      <Button label={"Approve"} variant={"primary"} onClick={onApprove} />
    </div>
  )
}

export default TeamsBox;
