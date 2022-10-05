import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
const TopWrapper = () => {
  return (
    <div className="topWrapper">
      <>
        <Link to="/home" className="headingWrapper">
          {<AiIcons.AiOutlineCodeSandbox className="topIcon" />}
          <div className="inlineHeading">Bug Tracker</div>
        </Link>
      </>

      <div className="searchWrapper">
        <>{<FaIcons.FaSearch className="search-bar" />}</>
        <div className="imageWrapper"></div>
      </div>
    </div>
  );
};

export default TopWrapper;
