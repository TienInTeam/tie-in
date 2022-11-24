import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import {requestBusinessProjectsByID} from "../api/businessProject";
import BusinessProjectDetails from '../components/BusinessProjectDetails';
import { requestBusinessProjectsByID } from '../api/businessProject';
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';
import {getBusinessByEmail} from '../api/business';

const BusinessRequestDetails = () => {

    const location = useLocation();
    const navigate = useNavigate();
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
                    <BusinessProjectDetails
                        businessProject={requestBusinessProjectByID.data}
                        business={requestBusinessByEmail.data}
                        onApply={onApply}
                    />
                </div>

            </div>

        </>
    )
}
export default BusinessRequestDetails;
