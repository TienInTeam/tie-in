import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import {requestBusinessProjectsByID} from "../api/businessProject";
import BusinessProjectDetails from '../components/BusinessProjectDetails';
import {getBusinessByEmail} from '../api/business';

const BusinessRequestDetails = () => {

    const location = useLocation();
    const businessProjectId = location.state.id;
    const requestBusinessProjectByID = useQuery(["businessProjectById"], () => requestBusinessProjectsByID(businessProjectId),
        {
            onError: (error) => {
                alert(error.message);
            }
        });

    const businessEmail= requestBusinessProjectByID.data?.email;

    const requestBusinessByEmail = useQuery(["business"], () => getBusinessByEmail(businessEmail),
        {
            enabled: !!businessEmail,
            onError: (error) => {
                alert(error.message);
            }
        },
    );

    if (requestBusinessProjectByID.isLoading) {
        return <span>Loading...</span>
    }
    if (requestBusinessByEmail.isLoading) {
        return <span>Loading...</span>
    }

    const onApply = () => {
    }

    return (
        <>
            <BusinessProjectDetails
                businessProject={requestBusinessProjectByID.data}
                business={requestBusinessByEmail.data}
                onApply={onApply}
            />
        </>
    )
}
export default BusinessRequestDetails;
