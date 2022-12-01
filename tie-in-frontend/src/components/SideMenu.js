import { Link, Outlet } from 'react-router-dom';
import SideMenuBusiness from './SideMenuBusiness';
import SideMenuStudent from './SideMenuStudent';

function SideMenu({hamburgerMenu, setHamburgerMenu}) {
  const userType = sessionStorage.getItem("userType");
  const isLoggedIn = sessionStorage.getItem("userLoggedIn");
  

  if (isLoggedIn === "true") {
    if (userType === "business") {
      return (
         <SideMenuBusiness setHamburgerMenu={setHamburgerMenu}/> 
      )
    } else {
      return (
         <SideMenuStudent setHamburgerMenu={setHamburgerMenu}/>
      );
    }
  } else {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signuplanding">Sign up</Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default SideMenu;
