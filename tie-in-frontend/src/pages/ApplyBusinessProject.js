import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import BusinessProjectDetails from '../components/BusinessProjectDetails';
import { requestBusinessProjectsByID } from '../api/businessProject';
import { getBusinessByID } from '../api/business';


export default function ApplyBusinessProject() {

    const location = useLocation();
    const business_request_id = location.state.id;
    return (
        <div>ApplyBusinessProject</div>
    )
}
