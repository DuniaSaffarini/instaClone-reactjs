import React from "react";
import "./post.css";
import Head from "./head";
import Footer from "./footer";

export default function Post() {
  return (
    <div className="post-margin">
      <div className="posts">
        <Head />
        <div className="post-img"></div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
