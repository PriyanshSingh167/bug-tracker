import * as GiIcons from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <div className="bug-picture">
          <GiIcons.GiBugNet className="bug" />
        </div>
        <div className="xHead pageHeader">Bug-Tracker</div>
      </div>
    </>
  );
};

export default Header;
