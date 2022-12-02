import {useQuery} from "@tanstack/react-query";
import React from 'react'
import {getApplicationForBusinessProject} from "../api/businessProject";
import Button from './Button';

function RequestStatusCompany({id, projectTitle, deadline, status, onSeeMoreClick }) {
    const applications = useQuery([id], () => getApplicationForBusinessProject(id))
    if (!applications.data || applications.data.number_applications === 0) {
        return null
    }
  return (
    <div className="request-status-card-company">
        <p>{projectTitle}</p>
        <p>{applications.data.number_applications} applications</p>
        <p>{deadline}</p>
        <p>{status}</p>
        <Button onClick={onSeeMoreClick} label={"See More"} variant={"secondary"} />
    </div>
  );
}

export default RequestStatusCompany;