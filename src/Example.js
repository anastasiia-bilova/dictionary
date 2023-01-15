import React from "react";

import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example mx-3">
        <em className="ms-1 opacity-50 fw-light">«{props.example}»</em>
      </div>
    );
  } else {
    return null;
  }
}
