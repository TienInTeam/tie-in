import {useMutation, useQuery} from "@tanstack/react-query";

import {requestBusinessProjects, updateBusinessProject} from "../api/businessProject";
import {getBusinessApplication, updateApplicationStatus} from "../api/studentApplications";
import TeamApplication from "../components/TeamApplication";
import SideMenu from "../components/SideMenu"

function RequestStatus(options) {
    const businessId = sessionStorage.getItem("userMongoId");

    const requestBusinessApplications = useQuery(["applicationBusiness"],
        () => getBusinessApplication(businessId));

    const requestBusinessProject = useQuery(["businessProjects"], () => requestBusinessProjects())

    const updateBusinessProjectById = useMutation(["businessProjects"], (id) => updateBusinessProject(id), {
        onSuccess: () => {
            requestBusinessProject.refetch();
            requestBusinessApplications.refetch();
        }
    })

    const updateApplication = useMutation(["application"], (id) => updateApplicationStatus(id));

    if (requestBusinessApplications.isLoading) {
        return <span>Loading...</span>
    }
    if (requestBusinessProject.isLoading) {
        return <span>Loading...</span>
    }

    const onClose = (businessProjectId) => {
        updateBusinessProjectById.mutate(businessProjectId);
    }

    const onApprove = (applicationId) => {
        updateApplication.mutate(applicationId);
    }

    const renderTeamApplication = () => {
        if (!requestBusinessApplications?.data || !requestBusinessProject?.data) {
            return null;
        }
        return requestBusinessApplications.data.map((application) => {
                return requestBusinessProject.data.filter((businessProject) => (
                    businessProject._id === application.business_request_id && application.status === "open"))
                    .map((filteredBusinessProject, index) => (
                            <TeamApplication
                                key={index}
                                name={filteredBusinessProject.name}
                                logo_url={filteredBusinessProject.logo_url}
                                onClose={() => onClose(application.business_request_id)}
                                applicationStatus={application.status}
                                team={application.team}
                                businessProjectStatus={filteredBusinessProject.status}
                                onApprove={() => onApprove(application._id)}
                            />
                        )
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
