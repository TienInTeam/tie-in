import {useMutation, useQuery} from "@tanstack/react-query";
import {requestBusinessProjects, updateBusinessProject} from "../api/businessProject";
import {useState} from "react";
import {getBusinessApplication, updateApplicationStatus} from "../api/studentApplications";
import TeamApplication from "../components/TeamApplication";
import SideMenu from "../components/SideMenu"

function RequestStatus(options) {
    const businessId = sessionStorage.getItem("userMongoId");
    const [businessProjectId, setBusinessProjectId] = useState(null);
    // const [applicationId, setApplicationId] = useState(null);
    const applicationId = "637d74df3851c065fe214692"

    const requestBusinessApplications = useQuery(["applicationBusiness"],
        () => getBusinessApplication(businessId));

    const requestBusinessProject = useQuery(["business"], () => requestBusinessProjects())

    const closeBusinessProject = useMutation(["businessProjects"], () => updateBusinessProject(), {
        enabled: !!businessProjectId
    })

    const updateApplication = useMutation(["application"], () => updateApplicationStatus(applicationId), {
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
        setBusinessProjectId(businessProjectId)
        console.log(businessProjectId);
        closeBusinessProject.mutate();
    }

    const onApprove = (id) => {
        // setApplicationId(id);
        updateApplication.mutate();
    }
    console.log(applicationId)

    const renderTeamApplication = () => {
        if (!requestBusinessApplications?.data) {
            return null;
        }
        return requestBusinessApplications.data.map((application) => {
                return requestBusinessProject.data
                    .filter((business) =>( business._id === application.business_request_id))
                    .map((filteredBusinessProject, index) =>
                        <TeamApplication
                            key={index}
                            name={filteredBusinessProject.name}
                            logo_url={filteredBusinessProject.logo_url}
                            onClose={() => onClose(application.business_request_id)}
                            status={application.application_status}
                            teamId={application.team.team_id}
                            onApprove={() => onApprove(application._id)}
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
