import { useQuery } from "@tanstack/react-query";
import { requestStudentProjects } from "../api/studentProject";
import StudentProjectPreview from "../components/StudentProjectPreview";
import SideMenu from "../components/SideMenu";
import SearchbarBusiness from "../components/SearchbarBusiness";
import { useState } from "react";

function StudentProjectsList() {
  const [searchFilter, setSearchFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [institutionFilter, setInstitutionFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);

  const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects(),
    {
      select: (studentProject) => (studentProject.filter(studentProject => {
        return searchFilter ? studentProject.name.toLowerCase().includes(searchFilter.toLowerCase()) : true
      }
      )
        .filter(studentProject => {
          return categoryFilter ? studentProject.category.toLowerCase().includes(categoryFilter.toLowerCase()) : true
        })
        .filter(studentProject => {
          return institutionFilter ? studentProject.institution.toLowerCase().includes(institutionFilter.toLowerCase()) : true
        })
        .filter(studentProject => {
          return locationFilter ? studentProject.location.toLowerCase().includes(locationFilter.toLowerCase()) : true
        }))
    },
    {
      onError: (error) => {
        alert(error.message);
      }
    }
  );

  if (requestStudentProject.isLoading) {
    return <img className={"loading"} src={require('../assets/icons/others/loading3.gif')} />
  }

  const searchHandle = (value) => {
    setSearchFilter(value);
  }
  const categoryHandle = (value) => {
    setCategoryFilter(value);
  }
  const institutionHandle = (value) => {
    setInstitutionFilter(value);
  }
  const locationHandle = (value) => {
    setLocationFilter(value);
  }

  const onSeeMore = () => {
    alert("see more is clicked")
  }
  return (
    <div className="student-projects-list grid-container">
      <div className="desktop-menu">
        <SideMenu />
      </div>
      <div>
        <SearchbarBusiness onSearch={searchHandle} onCategory={categoryHandle} onInstitution={institutionHandle} onLocation={locationHandle} />
        <div className="business-project-list-body">
          { searchFilter || categoryFilter || institutionFilter || locationFilter ? requestStudentProject.data.map((student, index) => (
            <StudentProjectPreview studentProject={student} key={index} onSeeMore={() => onSeeMore(index)} />
          )) : requestStudentProject.data.map((student, index) => (
            <StudentProjectPreview studentProject={student} key={index} onSeeMore={() => onSeeMore(index)} />
          ))
        }
          
        </div>
      </div>
    </div>
  )
}

export default StudentProjectsList;
