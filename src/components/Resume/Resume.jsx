import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Resume.css";
import heroImage from "../../../assets/hero/herox.jpg";
import skillsData from "../../data/skills.json";
import projectsData from "../../data/projects.json";

function Resume() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="resume-embed-container">
      <div className="resume-header">
        <div className="resume-title-wrapper">
          <h1 className="resume-heading">Resume</h1>
          <p className="resume-subtitle">My Professional Journey</p>
        </div>
        <button className="cert-btn" onClick={() => navigate("/certifications")}>
          View Certifications
        </button>
      </div>

      <motion.div
        className="resume-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Profile & Skills */}
        <div className="resume-left">
          <motion.div className="profile-section" variants={itemVariants}>
            <div className="profile-img-container">
              <img src={heroImage} alt="Sai Tejas" className="resume-profile-img" />
              <div className="profile-glow"></div>
            </div>
          </motion.div>

          <motion.div className="sidebar-section" variants={itemVariants}>
            <h3>Technical Skills</h3>
            <div className="skill-category">
              <div className="tags">
                {skillsData.map((skill, id) => (
                  <span key={id}>{skill.title}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="sidebar-section" variants={itemVariants}>
            <h3>Languages</h3>
            <ul className="lang-list">
              <li>English <span className="level">Fluent</span></li>
              <li>Telugu <span className="level">Native</span></li>
              <li>Hindi <span className="level">Intermediate</span></li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Experience & Projects */}
        <div className="resume-right">
          <motion.section className="main-section" variants={itemVariants}>
            <h3 className="section-title">Education</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>B.Tech in Information Technology</h4>
                <p className="institution">Manipal Institute of Technology, Bangalore</p>
                <span className="date">Aug 2023 – May 2027</span>
                <p className="grade">CGPA: 8.22</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>High School (Class X)</h4>
                <p className="institution">Bharatiya Vidya Bhavan’s, Telangana</p>
                <span className="date">June 2019 – April 2021</span>
                <p className="grade">Percentage: 87.6%</p>
              </div>
            </div>
          </motion.section>

          <motion.section className="main-section" variants={itemVariants}>
            <h3 className="section-title">Experience</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Software Development Intern</h4>
                <p className="institution">Ada Insis, Hyderabad</p>
                <span className="date">June 2025 – July 2025</span>
                <ul className="resume-list">
                  <li>Designed and developed real-world web applications using React.js, focusing on admin dashboards and interactive data tables.</li>
                  <li>Built the KL University Hostel Electricity Bill Management Dashboard, reducing manual data entry time by 40%.</li>
                  <li>Implemented API integration and testing protocols, ensuring seamless data flow and stability in a simulated production environment.</li>
                  <li>Utilized Git/GitHub for version control, effectively managing code branches and collaborating on feature deployments.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section className="main-section" variants={itemVariants}>
            <h3 className="section-title">Key Projects</h3>

            {projectsData.map((project, id) => (
              <div className="project-card" key={id}>
                <div className="project-header">
                  <h4>
                    <a href={project.source} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h4>
                  <span className="tech-stack">{project.skills.join(", ")}</span>
                </div>
                <ul className="project-details">
                  <li>{project.description}</li>
                </ul>
              </div>
            ))}
          </motion.section>

          <motion.section className="main-section" variants={itemVariants}>
            <h3 className="section-title">Achievements</h3>
            <ul className="achievement-list">
              <li>🥇 Secured Gold Medal in Intercollegiate Volleyball tournament, demonstrating teamwork and strategy</li>
              <li>🚀 Successfully participated in a 24-hour hackathon organized by the ACM club</li>
            </ul>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
