import { useMutation, useQuery } from "@tanstack/react-query";
import { requestBusinessProjects, updateBusinessProject } from "../api/businessProject";
import { getBusinessByEmail } from "../api/business";
import { useState } from "react";
import TeamApplication from "../components/TeamApplication";
import SideMenu from "../components/SideMenu"

function RequestStatus() {
  const [close, setClose] = useState(false)

  const requestBusinessByEmail = useQuery(["businessByEmail"], () => getBusinessByEmail(sessionStorage.getItem("userEmail")), {
    enabled: !!sessionStorage.getItem("userEmail"),
  },
    {
      onError: (error) => {
        alert(error.message);
      }
    });

  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(), {
    onError: (error) => {
      alert(error.message);
    }
  });
  const changeProjectStatus = useMutation(["applicationStatus"], () => updateBusinessProject({
    "status": false
  })
  );
  if (requestBusinessProject.isLoading) {
    return <span>Loading...</span>
  }
  if (requestBusinessByEmail.isLoading) {
    return <span>Loading...</span>
  }

  const onClose = () => {
    setClose(true)
    changeProjectStatus.mutate()
  }
  {
    for (let i = 0; i < requestBusinessProject.data.length; i++) {
      if (requestBusinessProject.data[i].business_id === requestBusinessByEmail.data[0].id) {
        return (
          <div className="grid-container">
            <SideMenu />
            <div>
              <h2>Request Status List</h2>
              {!close && <TeamApplication
                name={requestBusinessProject.data[i].name}
                logo_url={requestBusinessByEmail.data[0].logo_url}
                onClose={onClose}
              />}
            </div>
          </div>
        )

      } else {
        return (
          <div>
            <SideMenu className="grid-container" />
            <h2>Request Status List</h2>
          </div>
        )
      }

    }
  }
}

export default RequestStatus;
