import React from "react";

import "./Meaning.css";
import Antonyms from "./Antonyms";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="text-decoration-underline">
        {props.meaning.partOfSpeech}
      </h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="p-1">
            <strong>{index + 1}. </strong>
            <span>{definition.definition}</span>
            <Example example={definition.example} />
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
