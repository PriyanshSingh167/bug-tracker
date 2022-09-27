import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "../firebase.config";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import {
  doc,
  setDoc,
  serverTimestamp,
  addDoc,
  collection,
} from "firebase/firestore";
import { toast } from "react-toastify";
const CreateProject = () => {
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
      const imageUrl = `https://source.unsplash.com/random/300x200?sig=${Math.random()}`;
      formData.timeStamp = serverTimestamp();
      formData.imageUrl = imageUrl;
      formData.projectNo = auth.currentUser.uid;
      const dbRef = collection(db, "listings");
      await addDoc(dbRef, formData);
      navigate("/my-project");
    } catch (error) {
      toast.error("Somethin went wrong");
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Create Your Project</p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            className="nameInput"
            type="text"
            placeholder="Please Enter Project Name"
            value={name}
            id="name"
            onChange={onChange}
          />
          <textarea
            className="nameInput"
            placeholder="Description"
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={onChange}
          ></textarea>
          <select
            className="nameInput"
            id="type"
            value={type}
            onChange={onChange}
            placeholder="Select Project Type"
          >
            <option value="Type">Select Project Type</option>
            <option value="Web">Web</option>
            <option value="Android">Andriod</option>
            <option value="ios">ios</option>
            <option value="other">other</option>
          </select>
          <select
            className="nameInput"
            id="members"
            value={members}
            placeholder="No. of Team Members"
            onChange={onChange}
          >
            <option value="Members">Select Team Members</option>
            <option value="1">Single</option>
            <option value="2-5">2-5</option>
            <option value="5-10">5-10</option>
            <option value="10+">10+</option>
          </select>
          <div className="signUpBar">
            <p className="signUpText">Create Project</p>
            <button className="signUpButton">
              <AiOutlinePlus fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
