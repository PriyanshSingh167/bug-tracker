import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
const LeftWrapper = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <>
      <div className="ed-grid-sidebar dark:bg-dark-80">
        <>
          <Link to="/my-projects">
            <div className="myIcons">
              {<AiIcons.AiOutlineFundProjectionScreen className="monitor" />}
            </div>
            <span className="spanTitle">My Projects</span>
          </Link>
        </>
        <>
          <Link to="/profile">
            <div className="myIcons">
              {<FaIcons.FaUserNinja className="monitor" />}
            </div>
            <span className="spanTitle">Profile</span>
          </Link>
        </>
        <>
          <div className="myIcons">
            {<FaIcons.FaTicketAlt className="monitor" />}
          </div>
          <span className="spanTitle">Ticket</span>
        </>
        <>
          <div className="myIcons">
            {<FaIcons.FaKickstarter className="monitor" />}
          </div>
          <span className="spanTitle">Getting Started</span>
        </>
        <>
          <div className="myIcons">
            {<AiIcons.AiOutlineLogout className="monitor" onClick={onLogout} />}
          </div>
          <span className="spanTitle">Logout</span>
        </>
      </div>
    </>
  );
};

export default LeftWrapper;
