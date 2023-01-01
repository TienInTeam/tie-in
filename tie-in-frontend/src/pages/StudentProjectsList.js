import { useQuery } from "@tanstack/react-query";
import { requestStudentProjects } from "../api/studentProject";
import StudentProjectPreview from "../components/StudentProjectPreview";
import SideMenu from "../components/SideMenu";
import SearchbarBusiness from "../components/SearchbarBusiness";

function StudentProjectsList() {
  const requestStudentProject = useQuery(["studentProject"], () => requestStudentProjects(),
    {
      onError: (error) => {
        alert(error.message);
      }
    })

  if (requestStudentProject.isLoading) {
    return <img className={"loading"} src={require('../assets/icons/others/loading3.gif')}/>
  }

  const searchHandle = () => {
    console.log('handle');
  }
  const categoryHandle = () => {
    console.log('handle');
  }
  const instituitionHandle = () => {
    console.log('handle');
  }
  const locationHandle = () => {
    console.log('handle');
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
        <SearchbarBusiness onSearch={searchHandle} onCategory={categoryHandle} onInstituition={instituitionHandle} onLocation={locationHandle} />
        {requestStudentProject.data.map((student, index) => (
          <StudentProjectPreview studentProject={student} key={index} onSeeMore={() => onSeeMore(index)} />
        ))}
      </div>
    </div>
  )
}

export default StudentProjectsList;
