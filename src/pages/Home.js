import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Header from "../components/Header";
import Avatar from "../components/Avatar";
import CreateProject from "./CreateProject";

function Home() {
  const auth = getAuth();

  const navigate = useNavigate();
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const addProject = () => {
    navigate("/create-project");
  };

  return (
    <div className="box-container">
      <div className="left-panel">
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            {/* <li className="nav-text insect">
                <AiIcons.AiFillBug className="bug" onClick={homeLink} />
              </li> */}
            <li className="nav-text">{<Avatar />}</li>
            <li className="nav-text">
              <h4>
                Welcome, <br />
                {auth?.currentUser?.displayName}
              </h4>
            </li>
            <li>
              <Link to="/profile" className="nav-text">
                {<FaIcons.FaUserNinja />} <span>Profile</span>
              </Link>
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

            <li className="nav-text" onClick={onLogout}>
              {<AiIcons.AiOutlineLogout />} <span>Logout</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-panel">
        <Header />
        <div className="projects">
          <div className="add-project">
            <button onClick={addProject}>+Add</button>
          </div>
          <div className="view-projects">View Projects</div>
          <div className="add-timeline">Set TimeLines</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
