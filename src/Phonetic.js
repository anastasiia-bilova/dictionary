import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Phonetic.css";

export default function Phonetic(props) {
  const ref = useRef(null);

  function playAudio() {
    ref.current.play();
  }

  if (props.phonetic.audio.length !== 0) {
    return (
      <div className="Phonetic py-2 me-2">
        <a
          href="/#"
          onClick={playAudio}
          className="p-2 border rounded-circle"
          role="button"
        >
          <FontAwesomeIcon icon="fa-solid fa-volume-high" />
        </a>
        <p className="d-inline px-2 fs-5 fw-bolder">
          {props.phonetic.audio.slice(-6, -4)}
        </p>
        <p className="d-inline pe-1 fw-light">{props.phonetic.text}</p>
        <audio
          ref={ref}
          id="audio"
          src={props.phonetic.audio}
          preload="auto"
        ></audio>
      </div>
    );
  } else {
    return null;
  }
}
