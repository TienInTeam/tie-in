import {useQuery} from "@tanstack/react-query";
import React, {useEffect, useState} from 'react';
import {requestStudentProjects} from "../api/studentProject";
import {requestUser} from "../api/user";
import HighlightedStudentProject from "../components/HighlightedStudentProject";
import StudentDashboard from "./StudentDashboard";

const Dashboard = () => {
    useQuery(["user"], () => requestUser(sessionStorage.getItem("userId")), {
        enabled: !!sessionStorage.getItem("userId"),
        onSuccess: (data) => sessionStorage.setItem("userType", data.type)
    });

    const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects())
    if (requestStudentProject.isLoading) {
        return <span>Loading...</span>
    }

    if (requestStudentProject.isError) {
        return <span>Error: {requestStudentProject.error.message}</span>
    }

    const onSeeMore = () => {
        alert("see more is clicked")
    }

    if (sessionStorage.getItem('userType') === "business") {
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
                        <HighlightedStudentProject key={index} studentProject={student} onSeeMore={onSeeMore}/>
                    ))}
                </div>
            </>
        )
    } else {
        return (
            <StudentDashboard/>
        );
    }
}

export default Dashboard;
