import React from "react";

import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms.length !== 0) {
    return (
      <div className="Antonyms">
        <p className="ms-4 fs-6 fw-normal mb-0 opacity-50 text-decoration-underline">
          <em>antonyms</em>
        </p>
        <ul>
          {props.antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
