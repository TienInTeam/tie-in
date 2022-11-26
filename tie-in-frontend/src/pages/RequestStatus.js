import {useMutation, useQuery} from "@tanstack/react-query";
import {requestBusinessProjects, updateBusinessProject} from "../api/businessProject";
import {useState} from "react";
import {getBusinessApplication, updateApplicationStatus} from "../api/studentApplications";
import TeamApplication from "../components/TeamApplication";
import SideMenu from "../components/SideMenu"

function RequestStatus(options) {
    const businessId = sessionStorage.getItem("userMongoId");

    const requestBusinessApplications = useQuery(["applicationBusiness"],
        () => getBusinessApplication(businessId));

    const requestBusinessProject = useQuery(["business"], () => requestBusinessProjects())

    const updateBusinessProjectById = useMutation(["businessProjects"], (id) => updateBusinessProject(id), {
        onSuccess: () => {
            requestBusinessProject.refetch();
        }
    })

    const updateApplication = useMutation(["application"], (id) => updateApplicationStatus(id), {
        onSuccess: () => {
            requestBusinessApplications.refetch();
        }
    })

    if (requestBusinessApplications.isLoading) {
        return <span>Loading...</span>
    }
    if (requestBusinessProject.isLoading) {
        return <span>Loading...</span>
    }


    const onClose = (businessProjectId) => {
        updateApplication.mutate(businessProjectId);
    }

    const onApprove = (id) => {
        updateBusinessProjectById.mutate(id);
    }

    const renderTeamApplication = () => {
        if (!requestBusinessApplications?.data) {
            return null;
        }
        return requestBusinessApplications.data.map((application) => {
                return requestBusinessProject.data.filter((businessProject) =>( businessProject._id === application.business_request_id && application.application_status === "open"))
                    .map((filteredBusinessProject, index) =>
                        <TeamApplication
                            key={index}
                            name={filteredBusinessProject.name}
                            logo_url={filteredBusinessProject.logo_url}
                            onClose={() => onClose(application._id)}
                            status={application.application_status}
                            teamId={application.team.team_id}
                            businessProjectStatus={filteredBusinessProject.status}
                            onApprove={() => onApprove(application.business_request_id)}
                        />
                    );
            }
        )
    }

    return (
        <div className="grid-container">
            <SideMenu/>
            <div>
                <h2>Request Status List</h2>
                {renderTeamApplication()}
            </div>
        </div>
    );
}

export default RequestStatus;
