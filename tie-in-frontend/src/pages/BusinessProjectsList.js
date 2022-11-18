import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { requestBusinessProjects } from "../api/businessProject";
import BusinessProjectPreview from "../components/BusinessProjectPreview";
import Searchbar from "../components/Searchbar";
import SideMenu from "../components/SideMenu";

function BusinessProjectsList() {
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([]);
  const [location, setLocation] = useState([]);
  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(), {
    onError: (error) => {
      alert(error.message);
    }
  });

  if (requestBusinessProject.isLoading) {
    return <span>Loading...</span>
  }

  const onSeeMore = () => {
    alert("see more is clicked")
  }
  const onCheckStatus = () => {
    alert("Check status is clicked")
  }

  const categoryHandle = (e) => setCategory([e.target.value]);
if(requestBusinessProject.data.category===categoryHandle){
  return (
    <div className="grid-container">
      <SideMenu />
      <div>
      <Searchbar onCategory={categoryHandle} onSize={(e) => setSize([e.target.value])} onLocation={(e) => setLocation([e.target.value])} />
        {requestBusinessProject.data.map((business, index) =>
          <BusinessProjectPreview
            businessProject={business}
            key={index}
            onSeeMore={onSeeMore}
            onCheckStatus={onCheckStatus}
          />
        )}
      </div>
    </div>
  );
}else if (requestBusinessProject.data.team_size==="2"){
  return (
    <div className="grid-container">
      <SideMenu />
      <div>
      <Searchbar onCategory={(e) => setCategory([e.target.value])} onSize={(e) => setSize([e.target.value])} onLocation={(e) => setLocation([e.target.value])} />
        {requestBusinessProject.data.map((business, index) =>
          <BusinessProjectPreview
            businessProject={business}
            key={index}
            onSeeMore={onSeeMore}
            onCheckStatus={onCheckStatus}
          />
        )}
      </div>
    </div>
  );
}else if (requestBusinessProject.data.location==="Vancouver"){
  return (
    <div className="grid-container">
      <SideMenu />
      <div>
      <Searchbar onCategory={(e) => setCategory([e.target.value])} onSize={(e) => setSize([e.target.value])} onLocation={(e) => setLocation([e.target.value])} />
        {requestBusinessProject.data.map((business, index) =>
          <BusinessProjectPreview
            businessProject={business}
            key={index}
            onSeeMore={onSeeMore}
            onCheckStatus={onCheckStatus}
          />
        )}
      </div>
    </div>
  );
}else {
  return (
    <div className="grid-container">
      <SideMenu />
      <div>
      <Searchbar />
        {requestBusinessProject.data.map((business, index) =>
          <BusinessProjectPreview
            businessProject={business}
            key={index}
            onSeeMore={onSeeMore}
            onCheckStatus={onCheckStatus}
          />
        )}
      </div>
    </div>
  );
        }
}

export default BusinessProjectsList;
