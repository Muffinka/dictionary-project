import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <span className="material-symbols-outlined">volume_up</span>
      </a>
      {props.phonetic.text}
    </div>
  );
}
