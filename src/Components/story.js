import React from "react";
import "./story.css";

export default function Story(props) {
  return (
    <div className="margin">
      <div className="postStory">
        <div className="sto"></div>
      </div>
      <p className="desc">
        <span className="sp">{props.txt1}</span>
        <span> {props.txt2}</span>
      </p>
    </div>
  );
}
