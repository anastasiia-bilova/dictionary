import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h4 className="p-2 text-decoration-underline">{props.phonetic.text}</h4>
      <audio controls src={props.phonetic.audio}>
        <a href={props.phonetic.audio}>Download audio</a>
      </audio>
    </div>
  );
}
