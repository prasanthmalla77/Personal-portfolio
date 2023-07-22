import React from "react";
import "./certification.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import ReactionTesterImage from "../assets/ReactionTester.png"; // Import the PNG image
import Background from "../Components/Background";
import HackerRank from "../assets/HackerRankJSBasic.png";
import HRJSI from "../assets/HRJSIntermediate.png";
import HRPython from "../assets/HRPythonBasic.png";
import SQL from "../assets/SQLHR.png";
import Ds from "../assets/DSSimpliLearn.png";
import Lp from "../assets/LPInfosys.png";
const Certification = () => {
  const Certifications = [
    {
      title: "JavaScript (Basic)",
      description:
        "'Certified in JavaScript by HackerRank, my portfolio proudly showcases my proficiency in this dynamic language. This recognition celebrates my dedication to mastering web development and fuels my passion for creating innovative digital solutions.'",
      imageUrl: HackerRank, // Use the imported image here
      certificateUrl:
        "https://github.com/prasanthmalla77/ReactionTesterUsingJavascript",
      Live: "https://brilliant-bublanina-e5b4d6.netlify.app/",
    },
    {
      title: "JavaScript (Intermediate)",
      description:
        "'Certified in JavaScript by HackerRank, my portfolio proudly showcases my proficiency in this dynamic language. This recognition celebrates my dedication to mastering web development and fuels my passion for creating innovative digital solutions.'",
      imageUrl: HRJSI, // Use the imported image here
      certificateUrl: "https://www.hackerrank.com/certificates/709e86e94752",
    },
    {
      title: "Python(basic)",
      description:
        "'Certified in Python by HackerRank, my portfolio proudly showcases my proficiency in this dynamic language. This recognition celebrates my dedication to mastering python development and fuels my passion for creating innovative digital solutions.'",
      imageUrl: HRPython, // Use the imported image here
      certificateUrl: "https://www.hackerrank.com/certificates/eb2788a4d4ba",
    },
    {
      title: "SQL (Basic)",
      description:
        "'Certified in SQL by HackerRank, my portfolio proudly showcases my proficiency in this dynamic language. This recognition celebrates my dedication to mastering web development and fuels my passion for creating innovative digital solutions.'",
      imageUrl: SQL, // Use the imported image here
      certificateUrl: "https://www.hackerrank.com/certificates/0b09c053bdcc",
    },
    {
      title: "Data Science using Python",
      description:
        "'Certified in Data Science using Python by Simplilearn, this achievement highlights my expertise in leveraging Python for data analysis, machine learning, and predictive modeling. Equipped with practical knowledge and skills, I am ready to tackle complex data challenges and drive data-driven insights to fuel innovation and decision-making.'",
      imageUrl: Ds, // Use the imported image here
      certificateUrl:
        "https://certificates.simplicdn.net/share/thumb_3755507_1662640488.png",
    },
    {
      title: "Python(basic)",
      description:
        "'Certified in Python by Infosys Springboard, my portfolio proudly showcases my proficiency in this dynamic language. This recognition celebrates my dedication to mastering python development and fuels my passion for creating innovative digital solutions.'",
      imageUrl: Lp, // Use the imported image here
      certificateUrl:
        "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01329494214980403239095_shared/1-ff6918d4-dd49-48d1-8c1a-b35d148984a5.pdf",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="certificates">
          <Background />
          <h2 className="section-title">Certifications</h2>
          <div className="certificates-container">
            {Certifications.map((certificate, index) => (
              <div className="certificate" key={index}>
                <img src={certificate.imageUrl} alt={certificate.title} />
                <b>
                  <h3>{certificate.title}</h3>
                </b>
                <p>{certificate.description}</p>
                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Certification;
