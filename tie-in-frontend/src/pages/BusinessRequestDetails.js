import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import {requestBusinessProjectsByID} from "../api/businessProject";
import BusinessProjectDetails from '../components/BusinessProjectDetails';
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';
import {getBusinessByEmail} from '../api/business';

const BusinessRequestDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const businessProjectId = location.state.id;
    const [businessEmail, setBusinessEmail] = useState(null);

    const requestBusinessProjectByID = useQuery(["businessProjectById"], () => requestBusinessProjectsByID(businessProjectId),
        {
            onSuccess: (data) => {
                setBusinessEmail(data?.email)
            },
            onError: (error) => {
                alert(error.message);
            }
        });

    const requestBusinessByEmail = useQuery(["business"], () => getBusinessByEmail(businessEmail),
        {
            enabled: !!businessEmail,
            onError: (error) => {
                alert(error.message);
            }
        },
    );

    if (requestBusinessProjectByID.isLoading) {
        return <img className={"loading"} src={require('../assets/icons/others/loading3.gif')}/>
    }
    if (requestBusinessByEmail.isLoading) {
        return <img className={"loading"} src={require('../assets/icons/others/loading3.gif')}/>
    }

    const onApply = () => {
        navigate('/applybusinessproject', {
            state: {
                id: `${businessProjectId}`
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
                        business={requestBusinessByEmail.data?.find((business) => business._id === requestBusinessProjectByID.data.business.business_id)}
                        onApply={onApply}
                    />
                </div>

            </div>

        </>
    );
}
export default BusinessRequestDetails;
