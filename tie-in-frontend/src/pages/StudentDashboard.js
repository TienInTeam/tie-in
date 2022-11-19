import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { requestBusinessProjects } from "../api/businessProject";
import { requestApplicationStatuses } from "../api/studentApplications";
import { getBusinesses } from '../api/business';
import HighlightedBusinessProject from "../components/HighlightedBusinessProject";
import RequestStatusCard from "../components/RequestStatusCard";
import Button from "../components/Button";
import SideMenu from "../components/SideMenu";
import DataVisualizationPieChart from "../components/DataVisualizationPieChart";
import DataVisualizationAreaChart from "../components/DataVisualizationAreaChart";

const StudentDashboard = () => {

  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });

  const requestBusiness = useQuery(["business"], () => getBusinesses(),
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
  if (requestBusiness.isLoading) {
    return <span>Loading...</span>
  }

  const onSeeMore = (id) => {
    sessionStorage.setItem('BusinessProjectViewed', id);
    navigate('/businessrequestdetails', {
      state: {
        id: `${sessionStorage.getItem('BusinessProjectViewed')}`
      }
    });
  };

  return (
    <div className="grid-container">
      <SideMenu />
      <div>
        <div className={"data-visualization"}>
          <div className="visualization-component">
            <h1>Total Project View</h1>
            <DataVisualizationAreaChart/>
          </div>
          <div className="visualization-component">
            <DataVisualizationPieChart inputPage={'s'}/>
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
          {requestBusinessProject.data.map((businessProject) => (
            requestBusiness.data.filter((business) => (
              businessProject.business_id === business.id
            )).map((filteredBusiness, index) =>
            (
              <HighlightedBusinessProject
                businessProject={businessProject}
                company_name={filteredBusiness.company_name}
                key={index}
                onSeeMore={() => onSeeMore(businessProject.id)}
              />
            )
            )
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
      </div >
    </div>
  )
}

export default StudentDashboard;
