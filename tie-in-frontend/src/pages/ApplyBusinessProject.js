import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import ApplicationForm from '../components/ApplicationForm';
import { getStudentTeamsByStudentId } from '../api/teams';
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';

export default function ApplyBusinessProject() {

    const location = useLocation();
    const navigate = useNavigate();
    const businessProjectId = location.state.id;
    const studentID = sessionStorage.getItem('userMongoId');

    const requestTeamByStudentId = useQuery(["studentTeamByID"],
        () => getStudentTeamsByStudentId(studentID),
        {
            enabled: !!studentID,
            onError: (error) => {
                alert(error.message);
            }
        },
    );
    
    return (
        <div className="business-project-main-form">
            <div className="business-project-main-title">
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    navigate('/businessrequestdetails', {
                        state: {
                            id: `${businessProjectId}`
                        }
                    });
                }}>
                    <BackIcon />
                </a>
                <h2>Application Form</h2>
            </div>
            <div className="form-wrapper">
                <p className="mandatory-fields">*Mandatory Fields</p>
                <div className="business-project-details-main">
                    <div>
                     <ApplicationForm studentID={studentID} studentTeam = {requestTeamByStudentId.data}/>
                    </div>
                </div>
            </div>
        </div>

    )
}
