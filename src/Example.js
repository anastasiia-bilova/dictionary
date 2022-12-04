import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <em className="opacity-75">"{props.example}"</em>
      </div>
    );
  } else {
    return null;
  }
}
