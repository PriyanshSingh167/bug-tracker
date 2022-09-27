import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import { AiFillCalendar } from "react-icons/ai";
const ProjectItem = ({ listing, id, onDelete }) => {
  return (
    <li className="categoryListing">
      <Link to={`/my-project/${id}`} className="categoryListingLink">
        <img
          src={listing.imageUrl}
          alt={listing.name}
          className="categoryListingImg"
        />
        <div className="categoryListingDetails">
          <p className="categoryListingName">{listing.name}</p>
          <p className="categoryListingLocation">{listing.description}</p>
          <p className="categoryListingPrice">{listing.type}</p>
        </div>
        <div className="categoryListingInfoDiv">
          <AiFillCalendar />
          <p className="categoryListingInfoText">{listing.timeStamp.Date}</p>
        </div>
      </Link>
      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76,60)"
          onClick={() => onDelete(listing.id)}
        />
      )}
    </li>
  );
};

export default ProjectItem;
