import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import BusinessProjectDetails from '../components/BusinessProjectDetails';
import { requestBusinessProjectsByID } from '../api/businessProject';

const BusinessRequestDetails = () => {

    const location = useLocation();
    const business_request_id = location.state.id;
    const requestBusinessProjectByID = useQuery(["businessProjectById"], () => requestBusinessProjectsByID(business_request_id));

    if (requestBusinessProjectByID.isLoading) {
        return <span>Loading...</span>
    }

    if (requestBusinessProjectByID.isError) {
        return <span>Error: {requestBusinessProjectByID.error.message}</span>
    }

    const onApply = () => {
        console.log("jshj");
    }

    return (
        <>
            <BusinessProjectDetails businessProject={requestBusinessProjectByID.data} onApply={onApply} />
        </>
    )
}
export default BusinessRequestDetails;