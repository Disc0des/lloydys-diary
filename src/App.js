/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import "./styles/App.css";
import "./styles/Global.css";
// import { Form, Button, Card, Alert } from "react-bootstrap";
import fadedink from "./images/faded-ink.png";
import fadedlines from "./images/faded-lines.png";

function App() {
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleDetailsChange = (e) => {
    setDetails({ ...details, [e.target.name]: [e.target.value] });
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className="app">
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
          <button type="submit" className="button">
            Log in
          </button>
        </div>
        <img src={fadedlines} alt="faded lines logo" className="fadedlines" />
      </form>
    </div>
  );
}

export default App;
