import {useQuery} from "@tanstack/react-query";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getBusinessByEmail} from "../../api/business";
import {
    requestBusinessProjects,
} from "../../api/businessProject";
import {requestStudentProjectByCategory, requestStudentProjectUploadTrend} from "../../api/dataVisualization";
import {requestStudentProjects} from "../../api/studentProject";
import HighlightedStudentProject from "../../components/HighlightedStudentProject";
import RequestStatusCompany from "../../components/RequestStatusCompany";
import SideMenu from "../../components/SideMenu";
import DataVisualizationPieChart from "../../components/DataVisualizationPieChart";
import DataVisualizationAreaChart from "../../components/DataVisualizationAreaChart";

const BusinessDashboard = () => {

    const userEmail = sessionStorage.getItem("userEmail");
    const businessId = sessionStorage.getItem("userMongoId");
    const navigate = useNavigate();

    useQuery(['business'], () => getBusinessByEmail(userEmail), {
        onSuccess: (data) => {
            sessionStorage.setItem("userMongoId", data._id);
            sessionStorage.setItem("userName", data.name)
        }
    })

    const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects(), {
        onError: (error) => {
            alert(error.message);
        }
    });

    //Data Visualization query
    const studentProjectUploadTrend = useQuery(["studentProjectTrend"], () => requestStudentProjectUploadTrend(), {
        onError: (error) => {
            alert(error.message);
        }
    });

    const studentProjectByCategory = useQuery(["studentProjectCategory"], () => requestStudentProjectByCategory(), {
        onError: (error) => {
            alert(error.message);
        }
    });

    const requestBusinessProject = useQuery(["businessProjects"], () => requestBusinessProjects())

    if (requestStudentProject.isLoading) {
        return <span>Loading...</span>
    }
    if (studentProjectUploadTrend.isLoading) {
        return <span>Loading...</span>
    }
    if (studentProjectByCategory.isLoading) {
        return <span>Loading...</span>
    }
    if (requestBusinessProject.isLoading) {
        return <span>Loading...</span>
    }

    const onSeeMore = () => {
      navigate('/requeststatus')
    }

    return (
        <div className="grid-container business-dashboard">
            <div className="desktop-menu">
                <SideMenu/>
            </div>
            <div className="site-content">
                <div className={"data-visualization"}>
                    <div className="visualization-component">
                        <DataVisualizationAreaChart inputData={studentProjectUploadTrend.data} />
                    </div>
                    <div className="visualization-component">
                        <DataVisualizationPieChart inputData={studentProjectByCategory.data} />
                    </div>
                </div>
                <div className={"student-project-wrapper"}>
                    <div>
                        <h2 className="project-title">Recent Student Projects</h2>
                    </div>
                    <div className="projects-container">
                        <div className={"title-wrapper"}>
                            <h2>Name:</h2>
                            <h2>Category:</h2>
                            <h2>Institution:</h2>
                            <h2>Location:</h2>
                        </div>
                        {requestStudentProject.data.map((student, index) => (
                            <HighlightedStudentProject key={index} studentProject={student} onSeeMore={onSeeMore} />
                        ))}
                    </div>
                </div>
                <div className={"business-project-wrapper"}>
                    <div>
                        <h2 className={"project-title"}>Request Status List</h2>
                    </div>
                    <div className="projects-container">
                    <div className={"title-wrapper"}>
                        <h2>Request:</h2>
                        <h2>Applications:</h2>
                        <h2>Deadline:</h2>
                        <h2>Status:</h2>
                    </div>
                     {requestBusinessProject.data?.filter((businessProject) => businessProject.business.business_id === businessId)
                         .map((filteredBusinessProject, index) => (
                            <RequestStatusCompany
                                id={filteredBusinessProject._id}
                                key={index}
                                status={filteredBusinessProject.status}
                                onSeeMoreClick={onSeeMore}
                                deadline={new Date(filteredBusinessProject.end_date).toDateString()}
                                projectTitle={filteredBusinessProject.name}
                            />
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessDashboard;
