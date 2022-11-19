import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { requestBusinessProjects, requestBusinessProjectsByQuery } from "../api/businessProject";
import {useNavigate} from "react-router-dom";
import BusinessProjectPreview from "../components/BusinessProjectPreview";
import Searchbar from "../components/Searchbar";
import SideMenu from "../components/SideMenu";

function BusinessProjectsList() {
  const navigate = useNavigate();

  const [categoryFilter, setCategoryFilter] = useState(null);
  const [sizeFilter, setSizeFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);


  const requestFilteredBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(categoryFilter),
    {
      select: (businessProject) => (businessProject
              .filter(businessProject => {
                  return categoryFilter ? businessProject.category.includes(categoryFilter) : true
              })
              .filter(businessProject => {
                  return sizeFilter ? businessProject.team_size === sizeFilter : true
              })
              .filter(businessProject => {
                  return locationFilter ? businessProject.location.includes(locationFilter) : true
              })
      )
    },
    {
      onError: (error) => {
        alert(error.message);
      }
    });

  const requestBusinessProject = useQuery(["businessProject"], () => requestBusinessProjects(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });

  if (requestFilteredBusinessProject.isLoading) {
    return <span>Loading...</span>
  }
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

  const onCategoryChange = (value) => {
    setCategoryFilter(value);
  }
  const onSizeChange = (value) => {
      setSizeFilter(value);
  }
  const onLocationChange = (value) => {
      setLocationFilter(value);
  }


  return (
    <div className="grid-container">
      <SideMenu />
      <div>
        <Searchbar onCategory={onCategoryChange} onSize={onSizeChange} onLocation={onLocationChange}/>
        {categoryFilter || sizeFilter || locationFilter ? requestFilteredBusinessProject.data.map((business, index) =>
          <BusinessProjectPreview
            businessProject={business}
            key={index}
            onSeeMore={() => onSeeMore(business._id)}
            onCheckStatus={onCheckStatus}
          />
        ) :
          requestBusinessProject.data.map((business, index) =>
            <BusinessProjectPreview
              businessProject={business}
              key={index}
              onSeeMore={onSeeMore}
              onCheckStatus={onCheckStatus}
            />
          )
        }
      </div>
    </div>

  );


}

export default BusinessProjectsList;
