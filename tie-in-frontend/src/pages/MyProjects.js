import {useQuery} from "@tanstack/react-query";
import {requestBusinessProjects} from "../api/businessProject";
import BusinessMyProject from "../components/BusinessMyProject";
import SideMenu from "../components/SideMenu";

const MyProjects = () => {
    const requestMyProjects = useQuery(["myprojects"], () => requestBusinessProjects())
    const businessId = sessionStorage.getItem("userMongoId");

    return (
        <div className="grid-container">
            <div className="desktop-menu">
                <SideMenu />
            </div>
            <div>
                { requestMyProjects.data?.filter((project) => project.business.business_id === businessId).map((businessProject) =>
                    <BusinessMyProject businessProject={businessProject}/>
                )
                }
            </div>
        </div>

    )
}

export default MyProjects;