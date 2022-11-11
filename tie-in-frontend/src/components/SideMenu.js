import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function SideMenu() {
  const userType = sessionStorage.getItem("userType");
  const isLoggedIn = sessionStorage.getItem("userLoggedIn");

  if (isLoggedIn === "true") {
    if (userType === "business") {
      return (
        <div className="side-menu">
          <>
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
    } else {
      return (
        <div className="side-menu">
          <>
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
