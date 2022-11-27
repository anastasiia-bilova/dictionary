import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2 className="p-5">What word do you want to look up?</h2>
      <form onSubmit={search} autoComplete="off">
        <input
          type="search"
          className="form-control"
          onChange={handleKeywordChange}
          placeholder="Search for location"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
