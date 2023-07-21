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
              <p>1-147,Venkateswara colony</p>
              <p>Tekkali, Srikakulam </p>
              <p>532201</p>
            </div>
            
          </div>
          
          <div className="phone">
            
              
              <FaPhone
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <p>+91 9491920031 </p>
            
          </div>

          <div className="email">
            
              <FaMailBulk
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <p>prasanthmalla77@gmail.com</p>
            
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
