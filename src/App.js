import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import CreateProject from "./pages/CreateProject";
import MyProjects from "./pages/MyProjects";

import Project from "./pages/Project";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Sign Up */}
          <Route path="/" element={<SignUp />} />
          {/* Sign-in */}
          <Route path="/login" element={<Login />} />
          {/* Profile(Protected) */}
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* Home (Protected) */}
          <Route path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          {/* Forgot password */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/my-projects" element={<MyProjects />} />

          <Route path="/my-project/:projectId" element={<Project />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
