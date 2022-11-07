import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { useNavigate, createSearchParams } from "react-router-dom";
import { requestBusinessProjects } from "../api/businessProject";
import { requestApplicationStatuses } from "../api/studentApplications";
import HighlightedBusinessProject from "../components/HighlightedBusinessProject";
import RequestStatusCard from "../components/RequestStatusCard";
import Button from "../components/Button";

const StudentDashboard = () => {

  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });

  const requestApplicationStatus = useQuery(["applicationStatus"], () => requestApplicationStatuses(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });

  const navigate = useNavigate();

  if (requestBusinessProject.isLoading) {
    return <span>Loading...</span>
  }

  if (requestApplicationStatus.isLoading) {
    return <span>Loading...</span>
  }

  const onSeeMore = (id) => {
    navigate('/businessrequestdetails', {
      state: {
        id: `${id}`
      }
    });
  };

  return (
    <>
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
          <HighlightedBusinessProject businessProject={business} key={index} onSeeMore={() => onSeeMore(business.id)} />
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
    </>
  )
}

export default StudentDashboard;
