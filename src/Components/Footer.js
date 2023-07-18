import React from "react";
import "./Footer.css";
import { FaHome } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foooter-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
