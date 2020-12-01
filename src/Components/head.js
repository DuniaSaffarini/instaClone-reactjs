import React from "react";
import "./head.css";
import { BsThreeDotsVertical as Menu } from "react-icons/bs";
export default function Head() {
  return (
    <div className="headStyle">
      <div className="pro"></div>
      <div className="proContent">
        <p>Emma Waston</p>
        <p>Paris,France</p>
      </div>
      <div className="menu-color">
        <Menu />
      </div>
    </div>
  );
}
