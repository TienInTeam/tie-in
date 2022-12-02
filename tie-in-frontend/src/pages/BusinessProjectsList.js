import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {requestBusinessProjects} from "../api/businessProject";
import { getBusinesses} from "../api/business";
import BusinessProjectPreview from "../components/BusinessProjectPreview";
import Searchbar from "../components/Searchbar";
import SideMenu from "../components/SideMenu";

function BusinessProjectsList() {
    const navigate = useNavigate();

    const [categoryFilter, setCategoryFilter] = useState(null);
    const [sizeFilter, setSizeFilter] = useState(null);
    const [locationFilter, setLocationFilter] = useState(null);
    const [searchFilter, setSearchFilter] = useState(null);
    const [checkFilter, setCheckFilter] = useState(false);

    const requestBusinessProject = useQuery(["businessProjects"], () => requestBusinessProjects(),
        {
            select: (businessProject) => (businessProject.filter(businessProject => {
                        return categoryFilter ? businessProject.category?.includes(categoryFilter) : true
                    })
                    .filter(businessProject => {
                        return sizeFilter ? businessProject.team_size === sizeFilter : true
                    })
                    .filter(businessProject => {
                        return locationFilter ? businessProject.location.includes(locationFilter) : true
                    })
                    .filter(businessProject => {
                        return searchFilter ? businessProject.name.toLowerCase().includes(searchFilter.toLowerCase()) : true
                    })
                    .filter(businessProject => {
                        return checkFilter ? businessProject.status !== 'Open' : true
                    })
            )
        },
        {
            onError: (error) => {
                alert(error.message);
            }
        });

    const requestBusiness = useQuery(["business"], () => getBusinesses(),
        {
            onError: (error) => {
                alert(error.message);
            }
        });

    if (requestBusiness.isLoading) {
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
    const searchHandle = (value) => {
        setSearchFilter(value);
    }


    return (
        <div className="grid-container">
            <div className="desktop-menu">
                <SideMenu/>
            </div>
            <div className="business-project-list">
                <Searchbar onCategory={onCategoryChange} onSize={onSizeChange} onLocation={onLocationChange}
                           onSearch={searchHandle} onCheck={() => {
                    setCheckFilter(!checkFilter);
                    requestBusinessProject.refetch()
                }}/>
                {searchFilter || categoryFilter || sizeFilter || locationFilter || checkFilter ? requestBusinessProject.data.map((business, index) =>
                        <BusinessProjectPreview
                            businessProject={business}
                            key={index}
                            businessImage={requestBusiness.data.map((business) => {
                                return business.logo_url
                            })
                                .filter(businessProject => requestBusiness.data._id === requestBusinessProject.data.business_id)}
                            onSeeMore={() => onSeeMore(business._id)}
                            onCheckStatus={onCheckStatus}
                        />
                    ) :
                    requestBusinessProject.data.map((business, index) =>
                        <BusinessProjectPreview
                            businessProject={business}
                            key={index}
                            businessImage={requestBusiness.data.map((business) => {
                                return business.logo_url
                            })
                                .filter(businessProject => requestBusiness.data.id === requestBusinessProject.data.business_id)}
                            onSeeMore={() => onSeeMore(business._id)}
                            onCheckStatus={onCheckStatus}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default BusinessProjectsList;
