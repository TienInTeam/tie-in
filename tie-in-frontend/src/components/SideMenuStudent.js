import { useQuery } from '@tanstack/react-query';
import { Link, Outlet } from 'react-router-dom';
import { getStudentByEmail } from '../api/student';

function SideMenuStudent() {
  const email = sessionStorage.getItem("userEmail");

  const requestStudent = useQuery(["student"], () => getStudentByEmail(email),
    {
      onError: (error) => {
        alert(error.message);
      }
    });
  if (requestStudent.isLoading) {
    return <span>Loading...</span>
  }

  return (
    <div className="side-menu">
      <>
        <div className="image-wrapper">
          <img src={requestStudent.data.photo_url} alt="business" />
          <h3>{requestStudent.data.first_name +" "+ requestStudent.data.last_name}</h3>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/uploadstudentproject">Upload student project</Link>
            </li>
            <li>
              <Link to="/studentdashboard">Student Dashboard</Link>
            </li>
            <li>
              <Link to="/studentprojectslist">Student Projects</Link>
            </li>
            <li>
              <Link to="/businessprojectslist">Business Projects</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    </div>
  );
}

export default SideMenuStudent