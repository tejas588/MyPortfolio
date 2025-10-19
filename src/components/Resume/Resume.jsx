import React from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils";
import "./Resume.css";
import heroImage from "../../../assets/hero/herox.jpg"; 

function Resume() {
  const navigate = useNavigate();

  return (
    <div className="resume-embed-container">
      <div className="resume-header">
  <div className="resume-title-wrapper">
    <h1 className="resume-heading">Resume</h1>
  </div>
  <button className="cert-btn" onClick={() => navigate("/certifications")}>
    View Certifications
  </button>
</div>


    <div className="resume-body">
      <div className="resume-image-wrapper">
  <div className="image-and-sidebar">
  <img
    src={heroImage}
    alt="Hero image of me"
    className="resume-heroImg"
  />

  <div className="sidebar-box">
    <h3>Skills</h3>
    <ul>
      <li><strong>Programming:</strong> Java, C, Python, HTML & CSS, JavaScript, SQL, React, Node.js</li>
      <li><strong>Operating Systems:</strong> Windows 11</li>
      <li><strong>Developer Tools:</strong> VS Code, Eclipse, Code Blocks, Oracle, MySQL</li>
      <li><strong>Field of Interest:</strong> DSA, Full Stack Dev, Web Dev</li>
    </ul>
  </div>

  <div className="sidebar-box">
    <h3>Languages</h3>
    <ul>
      <li>English</li>
      <li>Telugu</li>
      <li>Hindi</li>
    </ul>
  </div>
</div>

</div>

      <div className="resume-content">
        <section>
          <h3>Education</h3>
          <ul>
            <li><strong>B.Tech in Information Technology</strong> – Manipal Institute of Technology, Bangalore (2023–2027), CGPA: 8.08</li>
            <li><strong>Intermediate</strong> – Sri Chaitanya Kalashala (2021–2023),<p> Percentage: 93%</p></li>
            <li><strong>High School</strong> – Bharatiya Vidya Bhavan's (2019–2021), <p>Percentage: 87.6%</p></li>
          </ul>
        </section>

        

        <section>
          <h3>Projects</h3>
          <ul>
            <li>
              <strong>Online Voting System</strong> | React, Nodejs, Express, Mysql
              <ul>
                <li>Online Voting System is a secure, web-based application that enables users to cast votes electronically in a transparent and efficient manner.</li>
                <li>The system includes role-based access for admins and voters, secure authentication, and real-time vote counting.</li>
                <li>The system was developed to simplify the voting process, increase voter participation, and enhance the transparency and integrity of election results.</li>
              </ul>
            </li>
            <li>
              <strong>Expense Tracker</strong> | HTML, CSS, JavaScript, React
              <ul>
                <li>Expense Tracker is a fully responsive single-page application to track income and expenses in real time.</li>
                <li>The app provides a clear visual overview of financial activity, including current balance, transaction history, and categorized spending.</li>
                <li>Designed clean, intuitive user interface using modern CSS layout techniques.</li>
              </ul>
            </li>
            <li>
              <strong>Rock Paper Scissors</strong> | HTML, CSS, JavaScript
              <ul>
                <li>Rock Paper Scissors is an interactive web-based game built using HTML, CSS, and JavaScript, allowing users to play against a computer opponent with real-time score tracking.</li>
                <li>The game features responsive UI, smooth animations, logic-driven gameplay and real-time feedback.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h3>Certifications</h3>
          <ul>
            <li>Programming for Everybody (Getting Started with Python)</li>
            <li>Generative AI: Introduction and Applications</li>
          </ul>
        </section>

        <section>
          <h3>Co-curricular Activities</h3>
          <ul>
            <li>-Secured gold medal 🥇 in Intercollegiate Volleyball tournament as a key team member, demonstrating strong teamwork, strategy, and competitive spirit.  </li>
            <li>Participated in ACM 24-hour Hackathon</li>
          </ul>
        </section>
      </div>
      </div>
    </div>
  );
}

export default Resume;
