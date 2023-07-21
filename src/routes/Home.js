import React from "react";
//rafce for automatiic functional component
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
import Background from "../Components/Background";
import ProjectWithOutFooter from "./ProjectWithOutFooter";
import Certification from "./CertificationWithoutFooter";
const Home = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <HeroImg />
      <ProjectWithOutFooter />
      <Certification />
      <Footer />
    </div>
  );
};

export default Home;
