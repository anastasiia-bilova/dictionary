import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h2 className="p-5">What word do you want to look up?</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
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
  } else {
    load();
    return null;
  }
}
