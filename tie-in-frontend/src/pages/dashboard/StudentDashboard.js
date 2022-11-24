import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { requestBusinessProjects } from "../../api/businessProject";
import {getStudentByEmail} from "../../api/student";
import { requestApplicationStatuses } from "../../api/studentApplications";
import { getBusinesses } from '../../api/business';
import HighlightedBusinessProject from "../../components/HighlightedBusinessProject";
import RequestStatusCard from "../../components/RequestStatusCard";
import Button from "../../components/Button";
import SideMenu from "../../components/SideMenu";

function StudentDashboard() {
  const userEmail = sessionStorage.getItem("userEmail");

  useQuery(['student', userEmail], () => getStudentByEmail(userEmail), {
    onSuccess: (data) => {
      sessionStorage.setItem("userMongoId", data._id);
      sessionStorage.setItem("userName", data.first_name)
    }
  })

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
      enabled: !requestBusinessProject.isLoading,
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
    navigate('/businessrequestdetails', {
      state: {
        id: `${id}`
      }
    });
  };

  const renderHighlightedBusinessProjects = () => {
    if (!requestBusinessProject?.data) {
      return null;
    }
    return requestBusinessProject.data.map((businessProject) => {
        return requestBusiness.data.filter((business) => (
          businessProject.business.business_id === business._id
        )).map((filteredBusiness, index) =>
            (
                <HighlightedBusinessProject
                    businessProject={businessProject}
                    company_name={filteredBusiness.name}
                    key={index}
                    onSeeMore={() => onSeeMore(businessProject._id)}
                />
            )
        )
  })
  }

  const renderApplicationsStatus = () => {
    if (!requestApplicationStatus?.data) {
      return null;
    }
      return requestApplicationStatus.data.map((application, index) => (
        <RequestStatusCard application={application} key={index} />
    ))
  }

  return (
    <div className="grid-container">
      <SideMenu />
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
          {renderHighlightedBusinessProjects()}
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
          {renderApplicationsStatus()}
      </div>
      </div>
    </div>
  )
}

export default StudentDashboard;

