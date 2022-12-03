import { useQuery } from "@tanstack/react-query";
import React from 'react';

import {requestUser} from "../../api/user";
import BusinessDashboard from "./BusinessDashboard";
import StudentDashboard from "./StudentDashboard";

const Dashboard = () => {
    const requestUserType = useQuery(["user"], () => requestUser(sessionStorage.getItem("userId")), {
        enabled: !!sessionStorage.getItem("userId"),
        onSuccess: (data) => {
            sessionStorage.setItem("userType", data.type);
        }
    });

    if (requestUserType.isLoading) {
        return <img className={"loading"} src={require('../../assets/icons/others/loading3.gif')}/>
    }

    if (sessionStorage.getItem('userType') === "business") {
        return <BusinessDashboard/>
    } else if (sessionStorage.getItem('userType') === "student"){
        return <StudentDashboard />
    } else {
        return  (
            <div>
                <h2>Try again! Login Failed.</h2>
            </div>
        )
    }
}

export default Dashboard;
