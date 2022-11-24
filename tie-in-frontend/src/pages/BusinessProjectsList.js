import { useQuery } from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import { requestBusinessProjects } from "../api/businessProject";
import BusinessProjectPreview from "../components/BusinessProjectPreview";
import SideMenu from "../components/SideMenu";

function BusinessProjectsList() {
  const navigate = useNavigate();
  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(), {
    onError: (error) => {
      alert(error.message);
    }
  });

  if (requestBusinessProject.isLoading) {
    return <span>Loading...</span>
  }
  const onSeeMore = (id) => {
    navigate('/businessrequestdetails', {
      state: {
        id: `${id}`
      }
    });
  };

  const onCheckStatus = () => {
    alert("Check status is clicked")
  }

  return (
    <div className="grid-container">
      <SideMenu />
      <div>
        {requestBusinessProject.data.map((business, index) =>
          <BusinessProjectPreview
            businessProject={business}
            key={index}
            onSeeMore={() => onSeeMore(business._id)}
            onCheckStatus={onCheckStatus}
          />
        )}
      </div>
    </div>
  );
}

export default BusinessProjectsList;
