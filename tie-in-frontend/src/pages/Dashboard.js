import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { requestStudentProjects } from "../api/studentProject";
import HighlightedStudentProject from "../components/HighlightedStudentProject";

const Dashboard = () => {

  const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });

  if (requestStudentProject.isLoading) {
    return <span>Loading...</span>
  }

  const onSeeMore = () => {
    alert("see more is clicked")
  }

  return (
    <>
      <div className={"data-visualization"}>
        <h1>Data visualization 1</h1>
        <h1>Data visualization 2</h1>
      </div>
      <div className={"student-project-wrapper"}>
        <div className={"title-wrapper"}>
          <h2>Name</h2>
          <h2>Description</h2>
          <h2>Description</h2>
          <h2>Category</h2>
          <h2>Location</h2>
        </div>
        {requestStudentProject.data.map((student, index) => (
          <HighlightedStudentProject key={index} studentProject={student} onSeeMore={onSeeMore} />
        ))}
      </div>
    </>
  )
}

export default Dashboard;
