/* eslint-disable react/prop-types */
import React from "react";
import { RxAvatar } from "react-icons/rx";

function ContactCard({ name, surname }) {
  return (
    <div className="contact-card container">
      <RxAvatar className="avatar" />
      <ul>
        <li className="client-name">{`${name} ${surname}`}</li>
      </ul>
    </div>
  );
}

export default ContactCard;
