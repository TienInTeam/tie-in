import { useQuery } from '@tanstack/react-query';
import { Link, Outlet } from 'react-router-dom';
import { getBusinessByEmail } from '../api/business';

function SideMenuBusiness({ setHamburgerMenu }) {
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
              <Link to="/dashboard" onClick={() => {setHamburgerMenu(false)}}>Dashboard</Link>
            </li>
            <li>
              <Link to="/uploadbusinessproject" onClick={() => {setHamburgerMenu(false)}}>Upload Project</Link>
            </li>
            <li>
              <Link to="/studentprojectslist" onClick={() => {setHamburgerMenu(false)}}>Student Projects</Link>
            </li>
            <li>
              <Link to="/requeststatus" onClick={() => {setHamburgerMenu(false)}}>Request Status</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    </div>
  )
}




export default SideMenuBusiness
