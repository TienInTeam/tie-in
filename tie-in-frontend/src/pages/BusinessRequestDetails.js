import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import BusinessProjectDetails from '../components/BusinessProjectDetails';
import { requestBusinessProjectsByID } from '../api/businessProject';

const BusinessRequestDetails = () => {

    const location = useLocation();
    const business_request_id = location.state.id;
    const requestBusinessProjectByID = useQuery(["businessProjectById"], () => requestBusinessProjectsByID(business_request_id),
        {
            onError: (error) => {
                alert(error.message);
            }
        });

    if (requestBusinessProjectByID.isLoading) {
        return <span>Loading...</span>
    }

    const onApply = () => {
    }

    return (
        <>
            <BusinessProjectDetails businessProject={requestBusinessProjectByID.data} onApply={onApply} />
        </>
    )
}
export default BusinessRequestDetails;