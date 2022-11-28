import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms m-3">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="p-1 m-1 border border-primary" key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
