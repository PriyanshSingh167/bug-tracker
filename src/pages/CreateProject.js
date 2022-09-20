import { useState } from "react";
import { getAuth } from "firebase/auth";
//import uuid v4
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase.config";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
const CreateProject = () => {
  const unique_id = uuid();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    members: "",
  });
  const { name, description, type, members } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      formData.timeStamp = serverTimestamp();
      formData.projectNo = auth.currentUser.uid;
      formData.projectId = unique_id;
      await setDoc(doc(db, "listings", unique_id), formData);
      navigate("/home");
    } catch (error) {
      toast.error("Somethin went wrong");
      console.log(error);
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHader">Create Your Project</p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Please Enter Project Name"
            value={name}
            id="name"
            onChange={onChange}
          />
          <textarea
            placeholder="Description"
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={onChange}
          ></textarea>
          <select
            id="type"
            value={type}
            onChange={onChange}
            placeholder="Select Project Type"
          >
            <option value="Web">Web</option>
            <option value="Android">Andriod</option>
            <option value="ios">ios</option>
            <option value="other">other</option>
          </select>
          <select
            id="members"
            value={members}
            placeholder="No. of Team Members"
            onChange={onChange}
          >
            <option value="1">Single</option>
            <option value="2-5">2-5</option>
            <option value="5-10">5-10</option>
            <option value="10+">10+</option>
          </select>
          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
