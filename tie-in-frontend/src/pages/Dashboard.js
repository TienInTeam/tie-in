import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { requestStudentProjects } from "../api/studentProject";
import { requestUser } from "../api/user";
import HighlightedStudentProject from "../components/HighlightedStudentProject";
import SideMenu from "../components/SideMenu";
import StudentDashboard from "./StudentDashboard";
import DataVisualizationPieChart from "../components/DataVisualizationPieChart";
import DataVisualizationAreaChart from "../components/DataVisualizationAreaChart";

const Dashboard = () => {
    useQuery(["user"], () => requestUser(sessionStorage.getItem("userId")), {
        enabled: !!sessionStorage.getItem("userId"),
        onSuccess: (data) => sessionStorage.setItem("userType", data.type)
    });

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

    if (sessionStorage.getItem('userType') === "business") {
        return (
            <div className="grid-container">
                <SideMenu />
                <div>
                    <div className={"data-visualization"}>
                        <div className="visualization-component">
                            <h1>Total Project Views</h1>
                            <DataVisualizationAreaChart inputPages={'c'}/>
                        </div>
                        <div className="visualization-component">
                            <DataVisualizationPieChart inputPage={''}/>
                        </div>
                    </div><div className={"data-visualization"}>
                        <h1>Data visualization 1</h1>
                        <h1>Data visualization 2</h1>
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
        )
    } else {
        return (
            <div>
                <StudentDashboard />
            </div>
        );
    }
}

export default Dashboard;
