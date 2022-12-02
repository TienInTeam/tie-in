import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { getBusinessByEmail } from '../api/business';

function SideMenuBusiness({ setHamburgerMenu }) {
  const currentRoute = useLocation().pathname.toLowerCase();
  const email = sessionStorage.getItem("userEmail");
  const requestBusiness = useQuery(["business"], () => getBusinessByEmail(email),
    {
      onError: (error) => {
        alert(error.message);
      }
    });
  if (requestBusiness.isLoading) {
    return <span>Loading...</span>
  }

  return (
    <div className="side-menu">
      <>
        <div className="image-wrapper">
          <img src={requestBusiness.data.logo_url} alt="business" />
          <h3>{requestBusiness.data.name}</h3>
        </div>
        <nav>
          <ul>
            <li>
              <Link className={currentRoute.includes("dashboard") ? "tab active" : "tab"}  to="/dashboard" onClick={() => {setHamburgerMenu(false)}}>Dashboard</Link>
            </li>
            <li>
              <Link className={currentRoute.includes("uploadbusinessproject") ? "tab active" : "tab"} to="/uploadbusinessproject" onClick={() => {setHamburgerMenu(false)}}>Upload business project</Link>
            </li>
            <li>
              <Link className={currentRoute.includes("studentprojectslist") ? "tab active" : "tab"} to="/studentprojectslist" onClick={() => {setHamburgerMenu(false)}}>Student Projects</Link>
            </li>
            <li>
              <Link className={currentRoute.includes("requeststatus") ? "tab active" : "tab"} to="/requeststatus" onClick={() => {setHamburgerMenu(false)}}>Request Status</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    </div>
  )
}




export default SideMenuBusiness
