import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Avatar from "../components/Avatar";

const Navbar = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <nav className="nav-menu">
        <div className="exit">
          <div className="exit-icon">
            {
              <AiIcons.AiFillCloseCircle
                fill="#ffffff"
                width="34px"
                height="34px"
                className="closeCircle signUpButton"
                onClick={handleClick}
              />
            }
          </div>
        </div>
        <div className="restPage">
          <ul className="list">
            <Link to="/profile">
              <li className="items">{<Avatar />}</li>
            </Link>
            <li className="items">
              <h4>{auth?.currentUser?.displayName}</h4>
            </li>
            <li>
              <Link to="/profile" className="items mainIcons">
                {<FaIcons.FaUserNinja />} <span>Profile</span>
              </Link>
            </li>
            <Link className="items mainIcons" to="/my-project">
              <li>
                {<FaIcons.FaProjectDiagram />} <span>Projects</span>
              </li>
            </Link>
            <li className="items mainIcons">
              {<AiIcons.AiOutlineUserAdd />} <span>Help</span>
            </li>
            <li className="items mainIcons">
              {<FaIcons.FaTicketAlt />} <span>Tickets</span>
            </li>

            <li className="items mainIcons" onClick={onLogout}>
              {<AiIcons.AiOutlineLogout />} <span>Logout</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
