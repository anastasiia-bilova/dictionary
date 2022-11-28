import React from "react";

export default function Antonyms(props) {
  if (props.antonyms.length !== 0) {
    return (
      <div className="Antonyms m-2">
        <strong>Antonyms: </strong>
        {props.antonyms.map(function (antonym, index) {
          return (
            <span className="p-1 m-1 border border-danger" key={index}>
              {antonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
