/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Ellipsis } from "react-spinners-css";
import Alert from "./Alert";
import "../styles/NewClient.css";

function NewClient() {
  const [newClient, setNewClient] = useState({
    name: "",
    surname: "",
    contactNumber: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState("");

  const handleChange = (e) => {
    setMessage(null);
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    console.log(newClient);
    if (newClient.contactNumber.length !== 11) {
      setVariant("error");
      setLoading(false);
      setMessage("Client number must be 11 digits");
    } else if (!newClient.name.length || !newClient.surname.length) {
      setVariant("error");
      setLoading(false);
      setMessage("Client name and surname not complete");
    } else {
      setVariant("success");
      setMessage("New client created");
    }
  };

  return (
    <div className="new-client-page">
      <div className="new-client-cont container">
        <h2>New Client</h2>
        <form className="new-client-form" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="name"
            value={newClient.name}
            onChange={handleChange}
          />
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            value={newClient.surname}
            onChange={handleChange}
          />
          <label>Contact Number</label>
          <input
            type="tel"
            name="number"
            value={newClient.contactNumber}
            onChange={handleChange}
          />
          {!loading && (
            <button type="submit" className="create-button" disabled={loading}>
              Create
            </button>
          )}

          {loading && <Ellipsis color="#1f1f1f" size={60} />}
        </form>
        {message && <Alert variant={variant} message={message} />}
      </div>
    </div>
  );
}

export default NewClient;
