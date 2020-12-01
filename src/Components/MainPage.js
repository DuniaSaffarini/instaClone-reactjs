import React from "react";
import Header from "./header";
import Body from "./Body";
import "./MainPage.css";
export default function MainPage() {
  return (
    <div className="Cont">
      <div className="header-dim">
        <Header />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}
