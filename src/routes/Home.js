import React from "react";
//rafce for automatiic functional component
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
import ProjectWithOutFooter from "./ProjectWithOutFooter";
import Certification from "./CertificationWithoutFooter";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <HeroImg />
        <ProjectWithOutFooter />
        <Certification />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
