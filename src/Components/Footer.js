import React from "react";
import "./Footer.css";
import { FaHome, FaPhone ,FaMailBulk} from "react-icons/fa";
const Footer = () => {
    
  return (
    <div className="footer">
      <div className="foooter-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
                <p>1-147,Venkateswara colony,Tekkali</p>
                <p>Srikakulam,Andhra Pradesh,India </p>
                <p>532201</p>
            </div>
          </div>
          <div className="phone">
          <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
                <h4>+91 9491920031</h4>
            </div>

          </div>
          <div className="email">
          <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
                <h4>prasanthmalla77@gmail.com</h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
