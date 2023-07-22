import React from "react";
import mine from "../assets/mine.jpg";
import { Link } from "react-router-dom";
import "./HeroImg.css";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={mine} alt="personal Image" />
      </div>
      <div className="content">
        <p>Hi, this is PrasantH</p>
        <h1>Software Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
