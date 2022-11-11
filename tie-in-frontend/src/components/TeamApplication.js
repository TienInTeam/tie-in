// import { useQuery } from "@tanstack/react-query";
// import { requestStudents } from "../api/student";
// import { requestTeams } from "../api/teams";
// import TeamsBox from "./TeamsBox";


// function TeamApplication() {
//   const requestTeam = useQuery(["teams"], () => requestTeams(), {
//     onError: (error) => {
//       alert(error.message);
//     }
//   });
//   // const requestStudent = useQuery(["students"], () => requestStudents(), {
//   //   onError: (error) => {
//   //     alert(error.message);
//   //   }
//   // });

//   // if (requestStudent.isLoading) {
//   //   return <span>Loading...</span>
//   // }

//   return (

//     <div>
//       <h2></h2>
//       <div>
//         {/* {requestTeam.data.map((team, index) => (
//           requestStudent.data.filter((student) => (
//             student.id === team.members[index]

//           )).map((filteredTeam, index) => {
//             <TeamsBox
//               team={filteredTeam}
//               image={filteredTeam.student_image}
//               onApprove={onApprove}
//               key={index}
//             />
//           })
//         ))
//         } */}
//         {/* {requestTeam.data.map((team, index) => {
//           <TeamsBox
//             team={team}

//             onApprove={onApprove}
//             key={index}
//           />
//           console.log("Here" + JSON.stringify(team))
//         }
//         )
//         } */}
//       </div>
//     </div>

//   )
// }

// export default TeamApplication
