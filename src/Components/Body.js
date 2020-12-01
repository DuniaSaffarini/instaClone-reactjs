import React from "react";
import "./Body.css";
import Story from "./story";
import Post from "./post";
export default function Body() {
  return (
    <div>
      <div className="stories">
        <div className="flex">
          <div className="addStories">
            <div className="wrapper">
              <span className="plus">+</span>
            </div>
          </div>
          <Story txt1="#Technology" txt2="#Android" />
          <Story txt1="#Travels" txt2="#Airlines" />
          <Story txt1="#Transport" txt2="#Truck" />
          <Story txt1="#Travels" txt2="#Tours" />
        </div>
      </div>
      <div className="bodyBorder">
        <Post />
        <Post />
        <Post />
      </div>
      <div className="bodyBorder">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
