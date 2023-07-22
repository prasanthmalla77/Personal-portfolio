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
const facebookLink = "https://www.facebook.com/prasanth.cherry.927";
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
          <p>Malla Naga Venkata Prasanth Naidu</p>
          <p>JNTUGV</p>
          <p>Vizianagaram</p>
          <div className="social">
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <FaFacebook
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://github.com/prasanthmalla77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGit
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/naga-venkata-prasanth-naidu-malla-86ba3223b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
