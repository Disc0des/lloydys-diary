/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import React, { useContext } from "react";
import Context from "../utils/Context";
import "../styles/Login.css";
import "../styles/Global.css";
import fadedink from "../images/faded-ink.png";
import fadedlines from "../images/faded-lines.png";

const Login = () => {
  const { details, setDetails, setIsLoggedIn, isLoggedIn } =
    useContext(Context);

  const handleSubmit = (e) => {
    setIsLoggedIn(true);
    e.preventDefault();
    console.log(isLoggedIn);
  };

  const handleDetailsChange = (e) => {
    setDetails({ ...details, [e.target.name]: [e.target.value] });
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className="login-page">
      <form className="login-cont container" onSubmit={handleSubmit}>
        <img src={fadedink} alt="faded ink logo" className="fadedink" />
        <div className="input-cont">
          <label htmlFor="username" className="label">
            username
          </label>
          <input
            type="text"
            className="input"
            name="username"
            value={details.username}
            onChange={handleDetailsChange}
          />
          <label htmlFor="username" className="label">
            password
          </label>
          <input
            type="password"
            className="input"
            name="password"
            value={details.password}
            onChange={handleDetailsChange}
            onFocus={handleFocus}
          />
          <button type="submit" className="login-button">
            Log in
          </button>
        </div>
        <img src={fadedlines} alt="faded lines logo" className="fadedlines" />
      </form>
    </div>
  );
};

export default Login;
