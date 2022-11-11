import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import ApplicationForm from '../components/ApplicationForm';
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';




export default function ApplyBusinessProject() {

    const location = useLocation();
    const navigate = useNavigate();
    const business_request_id = location.state.id;
    return (
        <div className="business-project-main">
            <div className="business-project-main-title">
                <a href="" onClick={(e, business_request_id) => {
                    e.preventDefault();
                    navigate('/businessrequestdetails', {
                        state: {
                            id: `${business_request_id}`
                        }
                    });
                }}>
                    <BackIcon />
                </a>
                <h2>Application Form</h2>
            </div>
            <div className="business-project-details-main">
                <div>ApplyBusinessProject{business_request_id}
                    <ApplicationForm />
                </div>
            </div>

        </div>

    )
}
