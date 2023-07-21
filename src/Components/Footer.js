import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaGit,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>1-147,Venkateswara colony,Tekkali</p>
              <p>Srikakulam,Andhra Pradesh,India </p>
              <p>532201</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91 9491920031
            </h4>
          </div>

          <div className="email">
          <h4><FaMailBulk
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
            
              prasanthmalla77@gmail.com</h4>
            
          </div>
        </div>
        <div className="right">
          <p>1-147,Venkateswara colony,Tekkali</p>
          <p>Srikakulam,Andhra Pradesh,India </p>
          <p>532201</p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaGit size={30} style={{ color: "white", marginRight: "1rem" }} />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
