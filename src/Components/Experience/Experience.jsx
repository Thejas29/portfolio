import React from "react";
import "./Experience.css";
import carBookingImg from "../../assets/car-booking.jpg";
import chauffeurImg from "../../assets/chauffeur.jpg";
import hospitalImg from "../../assets/hospital.jpg";
import rewardImg from "../../assets/reward.jpg";

const experiences = [
    {
        role: "Software Engineer",
        company: "Leuwint Technologies",
        duration: "September 2024 – Present",
        description: "Led development of secure REST APIs with Node.js, Express, and PostgreSQL, improving response times by 25%. Built scalable React.js frontends for client dashboards, enabling 3 enterprise customers to manage 10k+ transactions monthly. Integrated Sequelize ORM for efficient database queries and reduced errors by 30%."
    }      
];

const projects = [
  {
    title: "Car Booking System",
    tech: "Node.js, MySQL",
    description: "Built a car booking system with Node.js and MySQL.",
    image: carBookingImg, // 👈 Add thumbnail path
  },
  {
    title: "Chauffeur Management System",
    tech: "Node.js, Express, PostgreSQL, DynamoDB",
    description: "Designed and implemented a chauffeur management system.",
    image: chauffeurImg,
  },
  {
    title: "Hospital Management System",
    tech: "React.js, Firebase",
    description: "Built a hospital management system with React.js and Firebase.",
    image: hospitalImg,
  },
  {
    title: "Shopping & Reward Management System",
    tech: "Node.js, Express, PostgreSQL, Sequelize",
    description: "Developed a purchase and reward management system.",
    image: rewardImg,
  }
];

const Experience = () => {
  return (
    <section className="experience container" id="experience">
      <h2>Work Experience</h2>
      <div className="experience__list">
        {experiences.map((exp, i) => (
          <div key={i} className="experience__item">
            <h3>{exp.role}</h3>
            <span className="experience__company">{exp.company}</span>
            <span className="experience__duration">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <h2>Projects</h2>
      <div className="projects__grid">
        {projects.map((proj, i) => (
          <div key={i} className="project__card">
            {proj.image && (
              <img src={proj.image} alt={proj.title} className="project__thumbnail" />
            )}
            <h3>{proj.title}</h3>
            <span className="project__tech">{proj.tech}</span>
            <p>{proj.description}</p>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noreferrer" className="btn btn--ghost">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
