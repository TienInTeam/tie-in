import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBusinessByEmail } from "../../api/business";
import { requestStudentProjects } from "../../api/studentProject";
import HighlightedStudentProject from "../../components/HighlightedStudentProject";
import SideMenu from "../../components/SideMenu";
import DataVisualizationPieChart from "../../components/DataVisualizationPieChart";
import DataVisualizationAreaChart from "../../components/DataVisualizationAreaChart";
import { requestStudentProjectUploadTrend, requestStudentProjectByCategory } from "../../api/dataVisualization";

const BusinessDashboard = () => {

    const userEmail = sessionStorage.getItem("userEmail");

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

    if (requestStudentProject.isLoading) {
        return <span>Loading...</span>
    }

    const onSeeMore = () => {
        alert("see more is clicked")
    }
    return (
        <div className="grid-container">
            <div className="desktop-menu">
                <SideMenu />
            </div>
            <div>
                <div className={"data-visualization"}>
                    <div className="visualization-component">
                        <DataVisualizationAreaChart inputData={''} />
                    </div>
                    <div className="visualization-component">
                        <DataVisualizationPieChart inputData={''} />
                    </div>
                </div>
                <div className={"student-project-wrapper"}>
                    <h2>Student Projects</h2>
                    <div className={"title-wrapper"}>
                        <h2>Name</h2>
                        <h2>Category</h2>
                        <h2>Institution</h2>
                        <h2>Location</h2>
                    </div>
                    {requestStudentProject.data.map((student, index) => (
                        <HighlightedStudentProject key={index} studentProject={student} onSeeMore={onSeeMore} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BusinessDashboard;
