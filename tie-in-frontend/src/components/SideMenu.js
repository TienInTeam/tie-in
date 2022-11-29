import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getBusinessByEmail, getBusinesses } from '../api/business';
import { getStudentByEmail, requestStudents } from '../api/student';

function SideMenu() {
  const userType = sessionStorage.getItem("userType");
  const isLoggedIn = sessionStorage.getItem("userLoggedIn");

   const requestBusiness = useQuery(["business"], () => getBusinesses(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });
  const requestStudent = useQuery(["student"], () => requestStudents(),
    {
      onError: (error) => {
        alert(error.message);
      }
    });
  if (requestBusiness.isLoading) {
    return <span>Loading...</span>
  }
  if (requestStudent.isLoading) {
    return <span>Loading...</span>
  }

  console.log(requestStudent.data);
  if (isLoggedIn === "true") {
    if (userType === "business") {
      return (
        <div className="side-menu">
          <>
          <div className="image-wrapper">
            <img src="https://firebasestorage.googleapis.com/v0/b/tie-in-b8590.appspot.com/o/pexels-cottonbro-studio-6209564.jpg?alt=media&token=69187a6b-7c6b-470c-9c36-b45eeb9e3d83" alt="business" />
            <h3>Business</h3>
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
    } else {
      return (
        <div className="side-menu">
          <>
          <div className="image-wrapper">
            <img src="https://firebasestorage.googleapis.com/v0/b/tie-in-b8590.appspot.com/o/pexels-cottonbro-studio-6209564.jpg?alt=media&token=69187a6b-7c6b-470c-9c36-b45eeb9e3d83" alt="business" />
            <h3>Student</h3>
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
