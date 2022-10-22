import {useQuery} from "@tanstack/react-query";
import React from 'react';
import {requestStudentProjects} from "../api/studentProject";
import HighlightedStudentProject from "../components/HighlightedStudentProject";

const Dashboard = () => {
  const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects())
  if (requestStudentProject.isLoading) {
    return <span>Loading...</span>
  }

  if (requestStudentProject.isError) {
    return <span>Error: {requestStudentProject.error.message}</span>
  }

  const onSeeMore = () => {
   alert("See more is clicked");
  }

  return (
    <div className={"dashboard"}>
      <h1>Recent Business Projects</h1>
        {requestStudentProject.data.map((studentProject) => (
           <li key={studentProject.id}>
              <HighlightedStudentProject key={studentProject.id} studentProject={studentProject} onSeeMore={onSeeMore} />
           </li>
        ))}
    </div>
  )
}

export default Dashboard;
