import React from "react";
import logo from "./logo.svg";
import "./header.css";

const Footer = () => {
  return (
    <div>
      <div id="header">
        <a href="/"><img src={logo} alt="로고" id="logo" /></a>
      </div>
      <div id="mainLine" />
    </div>
  );
};
export default Footer;
