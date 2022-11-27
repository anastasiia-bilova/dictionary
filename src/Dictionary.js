import React, { useState } from "react";
// import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} autoComplete="off">
        <input
          type="search"
          className="form-control"
          onChange={handleKeywordChange}
          placeholder="Search for location"
        />
      </form>
    </div>
  );
}
