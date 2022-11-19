import {useQuery} from "@tanstack/react-query";
import React from "react";
import {requestStudentProjects} from "../../api/studentProject";
import DataVisualizationAreaChart from "../../components/DataVisualizationAreaChart";
import DataVisualizationPieChart from "../../components/DataVisualizationPieChart";
import HighlightedStudentProject from "../../components/HighlightedStudentProject";
import SideMenu from "../../components/SideMenu";

const BusinessDashboard = () => {
    const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects(),{
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
            <SideMenu />
            <div>
                    <div className={"data-visualization"}>
                        <div className="visualization-component">
                            <h1>Total Project View</h1>
                            <DataVisualizationAreaChart />
                        </div>
                        <div className="visualization-component">
                            <DataVisualizationPieChart inputPage={''}/>
                        </div>
                    </div>
                <div className={"student-project-wrapper"}>
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
