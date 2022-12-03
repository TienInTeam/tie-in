import {useMutation, useQuery} from "@tanstack/react-query";

import {requestBusinessProjects, updateBusinessProject} from "../api/businessProject";
import {getBusinessApplication, updateApplicationStatus} from "../api/studentApplications";
import TeamApplication from "../components/TeamApplication";
import SideMenu from "../components/SideMenu"
import { getBusinesses } from "../api/business";

function RequestStatus(options) {
    const businessId = sessionStorage.getItem("userMongoId");

    const requestBusinessApplications = useQuery(["applicationBusiness"],
        () => getBusinessApplication(businessId));

    const requestBusiness = useQuery(["business"], () => getBusinesses())

    const requestBusinessProject = useQuery(["businessProjects"], () => requestBusinessProjects())

    const updateBusinessProjectById = useMutation(["businessProjects"], (id) => updateBusinessProject(id), {
        onSuccess: () => {
            requestBusinessProject.refetch();
            requestBusinessApplications.refetch();
        }
    })

    const updateApplication = useMutation(["application"], (id) => updateApplicationStatus(id));

    if (requestBusinessApplications.isLoading) {
        return <img className={"loading"} src={require('../assets/icons/others/loading3.gif')}/>
    }
    if (requestBusinessProject.isLoading) {
        return <img className={"loading"} src={require('../assets/icons/others/loading3.gif')}/>
    }
    if (requestBusiness.isLoading) {
        return <img className={"loading"} src={require('../assets/icons/others/loading3.gif')}/>
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
                    businessProject._id === application.business_request_id && application.status === "Open"))
                    .map((filteredBusinessProject, index) => (
                            <TeamApplication
                                key={index}
                                name={filteredBusinessProject.name}
                                logo={requestBusiness.data._id === filteredBusinessProject.business.business_id ? requestBusiness.data.logo_url : null}
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
            <div className="desktop-menu">
                <SideMenu/>
                </div>
            <div>
                <h2 className="request-status-title">Request Status List</h2>
                {renderTeamApplication()}
            </div>
        </div>
    );
}

export default RequestStatus;
