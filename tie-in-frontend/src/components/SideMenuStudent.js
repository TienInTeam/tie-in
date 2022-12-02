import { useQuery } from '@tanstack/react-query';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getStudentByEmail } from '../api/student';

function SideMenuStudent({ setHamburgerMenu }) {
  const currentRoute = useLocation().pathname.toLowerCase();
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
          <h3>{requestStudent.data.first_name + " " + requestStudent.data.last_name}</h3>
        </div>
        <nav>
          <ul>
            <li>
              <Link className={currentRoute.includes("studentdashboard") ? "tab active" : "tab"} to="/studentdashboard" onClick={() => { setHamburgerMenu(false) }}>Dashboard</Link>
            </li>
            <li>
            <Link className={currentRoute.includes("uploadstudentproject") ? "tab active" : "tab"} to="/uploadstudentproject" onClick={() => { setHamburgerMenu(false) }}>Upload Project</Link>
            </li>
            <li>
              <Link className={currentRoute.includes("businessprojectslist") ? "tab active" : "tab"} to="/businessprojectslist" onClick={() => { setHamburgerMenu(false) }}>Business Projects</Link>
            </li>
            <li>
            <Link className={currentRoute.includes("studentprojectslist") ? "tab active" : "tab"} to="/studentprojectslist" onClick={() => { setHamburgerMenu(false) }}>Student Projects</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    </div>
  );
}

export default SideMenuStudent