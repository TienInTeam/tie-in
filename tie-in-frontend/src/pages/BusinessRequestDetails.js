import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import BusinessProjectDetails from '../components/BusinessProjectDetails';
import { requestBusinessProjectsByID } from '../api/businessProject';
import { getBusinessByID } from '../api/business';
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';

const BusinessRequestDetails = () => {

    const location = useLocation();
    const navigate = useNavigate();
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

    const onApply = (id) => {
        navigate('/applybusinessproject', {
            state: {
                id: `${id}`
            }
        });
    }

    return (
        <>
            <div className="business-project-main">
                <div className="business-project-main-title">
                    <a href="/studentdashboard"><BackIcon /></a>
                    <h2>Business Project</h2>
                </div>
                <div className="business-project-details-main">
                    <BusinessProjectDetails businessProject={requestBusinessProjectByID.data} business={requestBusinessByID.data} onApply={() => onApply(requestBusinessProjectByID.data.id)} />
                </div>

            </div>
        </>
    )
}
export default BusinessRequestDetails;
