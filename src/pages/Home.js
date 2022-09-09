import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import Avatar from "../components/Avatar";
function Home() {
  const auth = getAuth();
  // const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  // const homeLink = () => {
  //   navigate("/home");
  // };

  return (
    <>
      <div className="left-panel">
        <nav className="nav-menu">
          {user ? (
            <ul className="nav-menu-items">
              {/* <li className="nav-text insect">
                <AiIcons.AiFillBug className="bug" onClick={homeLink} />
              </li> */}
              <li className="nav-text">{<Avatar />}</li>
              <li className="nav-text">
                <h4>
                  Welcome, <br />
                  {user.displayName}
                </h4>
              </li>
              <li className="nav-text">
                {<FaIcons.FaUserNinja />} <span>Profile</span>
              </li>
              <li className="nav-text">
                {<FaIcons.FaProjectDiagram />} <span>Projects</span>
              </li>
              <li className="nav-text">
                {<AiIcons.AiOutlineUserAdd />} <span>Help</span>
              </li>
              <li className="nav-text">
                {<FaIcons.FaTicketAlt />} <span>Tickets</span>
              </li>

              <li className="nav-text">
                {<AiIcons.AiOutlineLogout />} <span>Logout</span>
              </li>
            </ul>
          ) : (
            <>
              <Link to="/">
                <h1>Log In First</h1>
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  );
}

export default Home;
