import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();
  const onInputChange = (e) => {
    let copyUserData = { ...userData };
    copyUserData[e.target.name] = e.target.value;
    setUserData(copyUserData);
  };

  const loginUser = () => {
    if (userData.firstName && userData.lastName) {
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/questions");
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-6 offset-3">
          <input
            type="text"
            className="form-control mb-3"
            name="firstName"
            placeholder="First name"
            onInput={onInputChange}
          />
          <input
            type="text"
            className="form-control mb-3"
            name="lastName"
            placeholder="Last name"
            onInput={onInputChange}
          />
          <button className="form-control btn btn-primary" onClick={loginUser}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
