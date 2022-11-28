import React from "react";

import "./Meaning.css";
import Antonyms from "./Antonyms";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="p-2 text-decoration-underline">
        {props.meaning.partOfSpeech}
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition: </strong>
            <em>{definition.definition}</em>
            <Example example={definition.example} />
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
