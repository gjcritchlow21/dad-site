import React from "react";
import { Link } from "react-router-dom";
import Banner from "../images/white-wooden-header.jpg";

function Header() {
  return (
    <div className="header-container">
      <img className="background-image" src={Banner} alt="header" />
      <div classname="header-wrapper">
        <Link className="home-link" to={"/"}>
          <h1>Critchlow<br />
          Construction</h1>
        </Link>
      </div>
      <div className="link-wrapper">
        <Link id="links" to={"/About"}>
          About
        </Link>
        <Link id="links" to={"/Contact"}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
