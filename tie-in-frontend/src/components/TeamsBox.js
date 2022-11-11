import Button from "./Button";

const TeamsBox = ({ team, onApprove }) => {
  const { team_name, members } = team;
  console.log("hello");
  return (
    <div>
      <h3>{team_name}</h3>
      <div>
        {/* {members.map((member_photo) => (
          <img src={member_photo} alt="student's photo" />

        ))} */}
      </div>
      <Button label={"Approve"} variant={"primary"} onClick={onApprove} />
    </div>
  )
}

export default TeamsBox;
