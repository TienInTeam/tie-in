import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { requestBusinessProjects } from "../../api/businessProject";
import { getStudentByEmail } from "../../api/student";
import { getBusinesses } from '../../api/business';
import { getStudentApplication } from "../../api/studentApplications";
import HighlightedBusinessProject from "../../components/HighlightedBusinessProject";
import RequestStatusCard from "../../components/RequestStatusCard";
import Button from "../../components/Button";
import SideMenu from "../../components/SideMenu";
import DataVisualizationPieChart from "../../components/DataVisualizationPieChart";
import DataVisualizationAreaChart from "../../components/DataVisualizationAreaChart";
import { requestBusinessProjectUploadTrend, requestBusinessProjectByCategory } from "../../api/dataVisualization";

function StudentDashboard() {
  const navigate = useNavigate();
  const userEmail = sessionStorage.getItem("userEmail");
  let studentId = "6371e56d065b8314879d2fab";

  useQuery(['student', userEmail], () => getStudentByEmail(userEmail), {
    onSuccess: (data) => {
      sessionStorage.setItem("userMongoId", data._id);
      sessionStorage.setItem("userName", data.first_name);
      studentId = sessionStorage.getItem("useMongoId");
    }
  })

  const requestBusinessProject = useQuery(["businessProjects"], () => requestBusinessProjects(),
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


   const requestApplications = useQuery(["applications", {id: studentId}], () => getStudentApplication(studentId))

  //Data Visualization query
  const businessProjectUploadTrend = useQuery(["businessProjectTrends"], () => requestBusinessProjectUploadTrend(), {
    onError: (error) => {
      alert(error.message);
    }
  });

  const businessProjectByCategory = useQuery(["businessProjectCategory"], () => requestBusinessProjectByCategory(), {
    onError: (error) => {
      alert(error.message);
    }
  });


  if (requestBusinessProject.isLoading) {
    return <span>Loading...</span>
  }

  if (requestApplications.isLoading) {
    return <span> Loading...</span>
  }

  if (requestBusiness.isLoading) {
    return <span>Loading...</span>
  }
  if (businessProjectUploadTrend.isLoading) {
    return <span>Loading...</span>
  }
  if (businessProjectByCategory.isLoading) {
    return <span>Loading...</span>
  }

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

  const renderApplicationStatus = () => {
    if (!requestApplications.data) {
      return null;
    }
    return requestApplications?.data.map((application, index) => (
      <RequestStatusCard application={application} key={index} />
    ))
  }

  const onSeeMore = (id) => {
    navigate('/businessrequestdetails', {
      state: {
        id: `${id}`
      }
    });
  };

  const onApplicationSeeMore = () => {
  }

  return (
    <div className="grid-container student-dashboard">
      <div className="desktop-menu">
        <SideMenu />
      </div>
      <div>
        <div className={"data-visualization"}>
          <div className="visualization-component">
            <DataVisualizationAreaChart inputData={businessProjectUploadTrend.data} />
          </div>
          <div className="visualization-component">
            <DataVisualizationPieChart inputData={businessProjectByCategory.data} />
          </div>
        </div>

        <div className={"business-project-wrapper"}>
          <div>
            <h2 className="project-title">Recent Business Projects</h2>
          </div>
          <div className="projects-container">
            <div className={"title-wrapper"}>
              <h2>Company:</h2>
              <h2>Category:</h2>
              <h2>Due Date:</h2>
              <h2>Location:</h2>
            </div>
            {renderHighlightedBusinessProjects()}
          </div>
        </div>

      <div className={"request-status-list-wrapper"}>
        <div className="request-status-header">
          <h2>Applications Status</h2>
          <Button label={"See More"} variant={"secondary"} onClick={onApplicationSeeMore} />
        </div>
        <div className="app-status-container">
          <div className={"title-wrapper-second"}>
            <h2>Company:</h2>
            <h2 className="team-wrapper">Team:</h2>
            <h2>Date:</h2>
            <h2>Status:</h2>
          </div>
            {renderApplicationStatus()}
        </div>
      </div>
      </div>
    </div>
  )
}

export default StudentDashboard;

