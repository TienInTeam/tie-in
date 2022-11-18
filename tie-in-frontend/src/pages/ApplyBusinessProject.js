import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import ApplicationForm from '../components/ApplicationForm';
import { getStudentTeamsBystudentID } from '../api/teams';
import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';

export default function ApplyBusinessProject() {

    const location = useLocation();
    const navigate = useNavigate();
    const business_request_id = location.state.id;
    //const studentID = sessionStorage.getItem('student_id');
    //to be updated
    const studentID = '116';
    const requestTeamByStudentId = useQuery(["studentTeamByID"],
        () => getStudentTeamsBystudentID(studentID),
        {
            enabled: !!studentID,
            onError: (error) => {
                alert(error.message);
            }
        },
    );
    
    return (
        <div className="business-project-main">
            <div className="business-project-main-title">
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    navigate('/businessrequestdetails', {
                        state: {
                            id: `${sessionStorage.getItem('BusinessProjectViewed')}`
                        }
                    });
                }}>
                    <BackIcon />
                </a>
                <h2>Application Form</h2>
            </div>
            <div className="business-project-details-main">
                <div>ApplyBusinessProject{business_request_id}
                 <ApplicationForm studentID={studentID} studentTeamByID = {requestTeamByStudentId.data}/>
                </div>
            </div>
        </div>

    )
}
