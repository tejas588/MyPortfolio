// src/components/Certifications.jsx
import React from "react";
import "./Certifications.css";

const certificates = [
  {
    title: "Python for Everybody (Coursera)",
    file: "/certs/Coursera SUR29X4DFRS5.pdf",
  },
  {
    title: "Generative AI: Introduction and Applications (Coursera)",
    file: "/certs/Coursera Q767Q8UT4KU9.pdf",
  },
  {
    title: "Microcontroller and Industrial Applications (Coursera)",
    file: "/certs/Coursera 8VE35XGSK4PI.pdf",
  },
  {
    title: "ACM Hackathon",
    file: "/certs/Repala Sai Tejas.jpg",
  },
  {
    title: "ACM Hackathon Team",
    file: "/certs/Hackathon certificate.jpg",
  },
  {
    title: "Ada Insis Internship",
    file: "/certs/Ada Insis internship.pdf",
  },
  {
    title: "Infosys SpringBoot-Introduction to Data Science",
    file: "/certs/1-57c63a8a-294a-4b48-8728-f530ef1c71ec.pdf",
  },
{
    title: "Infosys SpringBoot-Introduction to Natural Language Processing",
    file: "/certs/1-d2957ea2-8b67-4680-91e2-5b542450aec6.pdf",
  },
{
    title: "Infosys SpringBoot-Introduction to Artificial Intelligence",
    file: "/certs/1-f15bfe15-4545-4184-9d48-67603ac6d563.pdf",
  },
{
    title: "Infosys SpringBoot- Introduction to Deep Learning",
    file: "/certs/1-f3bde26e-35d7-40be-8978-4384e33c9ea4.pdf",
  },
{
    title: "Infosys SpringBoot-Time Management",
    file: "/certs/1-e01f5d51-e4ba-43b8-8ab4-e4729d5c85e6.pdf",
  },
{
    title: "Infosys SpringBoot- Email Writing Skills",
    file: "/certs/1-43a6c1e3-a38d-4883-873f-b9547026a957.pdf",
  },

  {
    title: "Infosys SpringBoot- High Impact Presentations",
    file: "/certs/1-a402eab5-874a-4c7a-9159-865332ea3cb7.pdf",
  },
    
  // Add more certificates as needed
];

function Certifications() {
  return (
    <div className="cert-container">
      <h2 className="cert-title">My Certifications</h2>

      <div className="cert-table-wrapper">
        <table className="cert-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <tr key={index}>
                <td>{cert.title}</td>
                <td>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                  >
                    View Certificate
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Certifications;
