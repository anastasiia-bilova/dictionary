import React from "react";

import "./Meaning.css";
import Antonyms from "./Antonyms";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p className="fs-5 fw-normal mb-0 opacity-50 text-decoration-underline">
        <em>{props.meaning.partOfSpeech}</em>
      </p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="py-1 px-4">
            <span className="definition fw-light">
              {index + 1}.&nbsp;&nbsp;{definition.definition.toLowerCase()}
            </span>
            <Example example={definition.example} />
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
