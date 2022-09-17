import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import logo from "./favicon.png";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000013cbab0e3bf0241dab3e9054c70be354f";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
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
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Let's discover something new 🧐</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />
          <div className="Hint">
            <strong>Suggested words:</strong> Freedom, Unity, Victory,
            Celebration...
          </div>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
