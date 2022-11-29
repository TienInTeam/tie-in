import { useQuery } from '@tanstack/react-query';
import { Link, Outlet } from 'react-router-dom';
import { getBusinessByEmail } from '../api/business';

function SideMenuBusiness() {
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
              <Link to="/dashboard">Dashboard Company</Link>
            </li>
            <li>
              <Link to="/uploadbusinessproject">Upload business project</Link>
            </li>
            <li>
              <Link to="/studentprojectslist">Student Projects</Link>
            </li>
            <li>
              <Link to="/requeststatus">Request Status</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    </div>
  )
}




export default SideMenuBusiness
