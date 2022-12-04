import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h5>{props.phonetic.text}</h5>
      <audio controls src={props.phonetic.audio}>
        <a href={props.phonetic.audio}>Download audio</a>
      </audio>
    </div>
  );
}
