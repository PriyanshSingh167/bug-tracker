import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";

const ProjectItem = ({ listing, id }) => {
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
      </Link>
    </li>
  );
};

export default ProjectItem;
