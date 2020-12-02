import React from "react";
import "./sidebarComponent.css";
import {
  AiFillHome as Home,
  AiOutlinePoweroff as Logout,
} from "react-icons/ai";
import { GiAerialSignal as Live } from "react-icons/gi";
import { FiMessageSquare as Message } from "react-icons/fi";
import {
  MdNotifications as Notification,
  MdSettings as Settings,
} from "react-icons/md";

export default function SidebarComponent() {
  return (
    <div className="sidebar">
      <div className="list">
        <div className="continar">
          <div className="header"></div>
        </div>
        <ul className="men">
          <li>
            <a href="/">
              <Home className="dim" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <Live className="dim" />
              <span>Live</span>
            </a>
          </li>
          <li>
            <a href="/">
              <Message className="dim" />
              <span>Message</span>
            </a>
          </li>
          <li>
            <a href="/">
              <Notification className="dim" />
              <span>Notification</span>
            </a>
          </li>
          <li>
            <a href="/">
              <Settings className="dim" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="/">
              <Logout className="dim" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
