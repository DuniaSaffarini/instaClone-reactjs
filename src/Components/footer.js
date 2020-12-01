import React from "react";
import {
  BsHeartFill as Heart,
  BsCursor as Cursor,
  BsFillBookmarkFill as Bookmark,
} from "react-icons/bs";
import { FiMessageSquare as Message } from "react-icons/fi";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-margin">
      <span>
        {" "}
        <Heart color="#f73e60" />
      </span>
      <span>
        {" "}
        <Message color="#cccccc" />
      </span>
      <span>
        {" "}
        <Cursor color="#cccccc" />
      </span>
      <span className="book-mark">
        {" "}
        <Bookmark color="#cccccc" />
      </span>
    </div>
  );
}
