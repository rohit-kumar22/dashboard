import wallpaper from "./images/wallpaper.png";
import logo from "./images/logo.png";
import profile from "./images/profile.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleForm = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    setUserDetails({ ...userDetails, [key]: value });
  };
  const handleSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex-container">
      <img src={wallpaper} className="left-image" alt="wallpaper not found"></img>
      <div className="spacer"></div>
      <img src={wallpaper} className="right-image" alt="wallpaper not found"></img>
      <div className="card">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo not found"/>
        </div>
        <div style={{ display: "flex" }}>
          <div className="blob-container">
            <div className="profile-image">
              <img src={profile} className="profile-image" alt="profile missing"/>
            </div>
          </div>
          <div style={{ width: "53%" }}>
            <h2>Welcome back...</h2>
            <input
              placeholder="username"
              name="username"
              type="text"
              value={userDetails.username}
              onChange={handleForm}
              className="input-box"
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={userDetails.password}
              onChange={handleForm}
              className="input-box"
            />
            <div className="remember-me-box">
              <input type="checkbox" style={{ marginBottom: "0px" }} />
              <span style={{ paddingTop: "5px" }}>Remember Me</span>
            </div>
            <button
              style={{
                backgroundColor:
                  userDetails.username === "" || userDetails.password === ""
                    ? "#c7c7c7"
                    : "#000",
                cursor:
                  userDetails.username === "" || userDetails.password === ""
                    ? "not-allowed"
                    : "pointer",
              }}
             
              className="login-button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
