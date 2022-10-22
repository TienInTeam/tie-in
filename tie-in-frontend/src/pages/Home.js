import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
            <li>
                <Link to="/uploadstudentproject">Upload student project</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Home;
