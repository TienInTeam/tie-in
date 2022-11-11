import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import BusinessProjectDetails from '../components/BusinessProjectDetails';
import { requestBusinessProjectsByID } from '../api/businessProject';
import { getBusinessByID } from '../api/business';

const BusinessRequestDetails = () => {

    const location = useLocation();
    const business_request_id = location.state.id;
    const requestBusinessProjectByID = useQuery(["businessProjectById"], () => requestBusinessProjectsByID(business_request_id),
        {
            onError: (error) => {
                alert(error.message);
            }
        });

    const businessId = requestBusinessProjectByID.data?.business_id;
    const requestBusinessByID = useQuery(["businessById", businessId],
        () => getBusinessByID(businessId),
        {
            onError: (error) => {
                alert(error.message);
            }
        },
        { enabled: !!businessId },
    );

    if (requestBusinessProjectByID.isLoading) {
        return <span>Loading...</span>
    }
    if (requestBusinessByID.isLoading) {
        return <span>Loading...</span>
    }

    const onApply = () => {
    }

    return (
        <>
            <BusinessProjectDetails businessProject={requestBusinessProjectByID.data} business={requestBusinessByID.data} onApply={onApply} />
        </>
    )
}
export default BusinessRequestDetails;
