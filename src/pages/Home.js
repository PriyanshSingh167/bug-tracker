import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import React from "react";

const Home = () => {
  const navigate = useNavigate();
  const addProject = () => {
    navigate("/create-project");
  };
  const toggleNavbar = () => {
    navigate("/navbar");
  };

  return (
    <div className="box-container">
      <div className="toggleNavbar">
        <div className="bars">
          {
            <FaIcons.FaBars
              fill="#ffffff"
              width="54px"
              height="44px"
              className="svgBar"
              onClick={toggleNavbar}
            />
          }
        </div>
      </div>
      <div className="projects">
        <div className="homeProject" onClick={addProject}>
          <button className="signUpButton">
            <AiOutlinePlus fill="#ffffff" width="34px" height="34px" />
          </button>
        </div>
      </div>
      <div className="home-content pageHeader">
        Click On + To get Started with new Project
      </div>
    </div>
  );
};

export default Home;
