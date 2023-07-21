import React from "react";
import "./Project.css";
import ReactionTesterImage from "../assets/ReactionTester.png";
import StudentFeedbackForm from '../assets/StudentFeedbackForm.png';
import FatherResume from '../assets/FatherResume.png'
import Twitter from '../assets/TwitterClone.png'
const ProjectWithOutFooter = () => {
  // Sample project data, replace this with your own project details
  const projects = [{
    title: "Reaction Tester",
    description:
      "The Reaction Tester is an interactive web application created using HTML, CSS, and JavaScript. It is designed to test users' reaction speed in a fun and engaging way. The application displays circles on the screen, and when the user clicks on a circle, it triggers an alert with the time taken to click. This allows users to challenge themselves, measure their reaction time, and aim for better performance as they strive to improve their reaction speed. The combination of HTML, CSS, and JavaScript makes it a dynamic and responsive tool that provides an enjoyable experience for users while testing their reflexes.",
    imageUrl: ReactionTesterImage, // Use the imported image here
    projectUrl:
      "https://github.com/prasanthmalla77/ReactionTesterUsingJavascript",
    Live: "https://brilliant-bublanina-e5b4d6.netlify.app/",
  },
  {
    title: "Student Feedback Form",
    description: "The Student Feedback Form project is a web application that allows students to provide feedback using a user-friendly form. It utilizes HTML, CSS, and JavaScript for the frontend interface, while integrating Google Sheets and Apps Script for seamless data storage. Students can easily submit their feedback, which is directly saved into a designated Google Sheets spreadsheet, enabling efficient data collection and analysis. Additionally, the project offers the convenience of generating downloadable PDF reports, making it a comprehensive tool for efficient feedback management and analysis.",
    imageUrl: StudentFeedbackForm, // Use the imported image here
    projectUrl:
      "https://github.com/prasanthmalla77/Student_FeedbackForm",
    Live: "https://chipper-cobbler-c6a615.netlify.app/",
  },
  {
    title: "Father Resume",
    description: "I have developed an online resume for my father using HTML, CSS, and JavaScript. The project showcases all the essential details of his background and achievements in a well-organized and visually appealing manner. To make it accessible to a wider audience, I deployed the resume using Netlify, ensuring it can be easily accessed and viewed by anyone online. The combination of HTML, CSS, and JavaScript allowed me to create a dynamic and interactive resume that highlights my father's skills and experience effectively.",
    imageUrl: FatherResume, // Use the imported image here
    projectUrl:
      "https://github.com/prasanthmalla77/Father_resume",
    Live: "https://lambent-gumdrop-deea4d.netlify.app/",
  },
  {
    title: "Twitter Clone",
    description: "I have developed a user interface (UI) for a Twitter clone using HTML, CSS, and JavaScript. The UI replicates the design and layout of the original Twitter platform, featuring similar components such as tweet cards, profile sections, and navigation bars. While the current version does not have any functional backend, the focus has been on creating a visually appealing and responsive UI that closely resembles the look and feel of Twitter. By deploying the UI using Netlify, it can be easily accessed and viewed, showcasing my expertise in web design and front-end development. ",
    imageUrl: Twitter, // Use the imported image here
    projectUrl:
      "https://github.com/prasanthmalla77/twitter_clone",
    Live: "https://super-donut-ae36d6.netlify.app/",
  }
];

  return (
    <div>
      <div className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <b><h3>{project.title}</h3></b>
              <p>{project.description}</p>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a
                href={project.Live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectWithOutFooter;
