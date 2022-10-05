import TopWrapper from "../components/TopWrapper";
import LeftWrapper from "../components/LeftWrapper";
import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  const addProject = () => {
    navigate("/create-project");
  };

  return (
    <div className="wrapper">
      <div className="top-wrapper">
        <TopWrapper />
      </div>
      <div className="left-wrapper">
        <LeftWrapper />
      </div>
      <div className="main-wrapper"></div>
    </div>
  );
};

export default Home;
