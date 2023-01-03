/* eslint-disable react/prop-types */
import React from "react";
import "../styles/Alert.css";

function Alert({ message, variant }) {
  return <div className={`alert-cont ${variant}`}>{message}</div>;
}

export default Alert;
