import React from "react";
import "./Project.css"; 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";// Import the CSS file for styling


const Projects = () => {
  // Sample project data, replace this with your own project details
  const projects = [
    {
      title: "Project 1",
      description: "This is the description for Project 1.",
      imageUrl: "https://placekitten.com/300/200", // Replace with your project image URL
      projectUrl: "#", // Replace with the project URL or link
    },
    {
      title: "Project 2",
      description: "This is the description for Project 2.",
      imageUrl: "https://placekitten.com/300/200", // Replace with your project image URL
      projectUrl: "#", // Replace with the project URL or link
    },
    {
      title: "Project 2",
      description: "This is the description for Project 2.",
      imageUrl: "https://placekitten.com/300/200", // Replace with your project image URL
      projectUrl: "#", // Replace with the project URL or link
    },
    {
      title: "Project 2",
      description: "This is the description for Project 2.",
      imageUrl: "https://placekitten.com/300/200", // Replace with your project image URL
      projectUrl: "#", // Replace with the project URL or link
    },
    {
      title: "Project 2",
      description: "This is the description for Project 2.",
      imageUrl: "https://placekitten.com/300/200", // Replace with your project image URL
      projectUrl: "#", // Replace with the project URL or link
    },
    {
      title: "Project 2",
      description: "This is the description for Project 2.",
      imageUrl: "https://placekitten.com/300/200", // Replace with your project image URL
      projectUrl: "#", // Replace with the project URL or link
    },
    // Add more projects as needed
  ];

  return (
    <div>
    <Navbar/>
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              Live Project
            </a>
          </div>
        ))}
      </div>
      
    </div>
    <Footer/></div>
  );
};

export default Projects;
