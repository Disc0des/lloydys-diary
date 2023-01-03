import React from "react";
import { FaSearch } from "react-icons/fa";
import ContactCard from "./ContactCard";
import alphabet from "../helpers/alphabet";
import clients from "../helpers/clients";
import capitaliseName from "../helpers/capitaliseName";
import "../styles/SearchClients.css";

function SearchClients() {
  return (
    <div className="search-clients-page">
      <div className="search-cont container">
        <h2 className="header">Search Clients</h2>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="search" className="search-input" />
        </div>
        <div className="results-cont">
          <ul className="contact-cont">
            {clients.map((client) => (
              <ContactCard
                name={capitaliseName(client.name)}
                surname={capitaliseName(client.surname)}
                contactNumber={client.contactNumber}
              />
            ))}
          </ul>
          <ul className="alphabet-bar">
            {alphabet.map((letter) => (
              <li className="letters">{letter}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchClients;
