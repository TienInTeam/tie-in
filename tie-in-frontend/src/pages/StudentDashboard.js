import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { requestBusinessProjects } from "../api/businessProject";
import { requestApplicationStatuses } from "../api/studentApplications";
import HighlightedBusinessProject from "../components/HighlightedBusinessProject";
import RequestStatusCard from "../components/RequestStatusCard";
import Button from "../components/Button";

const StudentDashboard = () => {

  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects())
  const requestApplicationStatus = useQuery(["applicationStatus"], () => requestApplicationStatuses())

  if (requestBusinessProject.isLoading) {
    return <span>Loading...</span>
  }

  if (requestBusinessProject.isError) {
    return <span>Error: {requestBusinessProject.error.message}</span>
  }

  if (requestApplicationStatus.isLoading) {
    return <span>Loading...</span>
  }

  if (requestApplicationStatus.isError) {
    return <span>Error: {requestBusinessProject.error.message}</span>
  }

  const onSeeMore = () => {
    alert("see more is clicked")
  }

  return (
    <div>
      <div className={"data-visualization"}>
        <div className="visualization-component">
          <h1>Total Project View</h1>
        </div>
        <div className="visualization-component">
          <h1>Projects Applied</h1>
          <h1>Conversion Rate</h1>
        </div>
      </div>

      <div className={"business-project-wrapper"}>
        <h2>Recent Company Requests</h2>
        <div className={"recent-requests-title-wrapper"}>
          <h2>Company Name</h2>
          <h2>Category</h2>
          <h2>Due Date</h2>
          <h2>Location</h2>
        </div>
        {requestBusinessProject.data.map((business, index) => (
          <HighlightedBusinessProject businessProject={business} key={index} onSeeMore={onSeeMore} />
        ))}
      </div>

      <div className={"request-status-list-wrapper"}>
        <div className="request-status-header">
          <h2>Applications Status</h2>
          <Button label={"See More"} variant={"secondary"} onClick={onSeeMore} />
        </div>
        <div className={"title-wrapper"}>
          <h2>Company:</h2>
          <h2 className="team-wrapper">Team:</h2>
          <h2>Date:</h2>
          <h2>Status:</h2>
        </div>
        {requestApplicationStatus.data.map((application, index) => (
          <RequestStatusCard application={application} key={index} />
        ))}
      </div>
    </div>
  )
}

export default StudentDashboard;
