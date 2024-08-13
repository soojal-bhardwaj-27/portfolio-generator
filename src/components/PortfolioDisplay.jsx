// src/components/PortfolioDisplay.jsx

import React from 'react';
import './PortfolioDisplay.css';

const PortfolioDisplay = ({ portfolioData }) => {
    const {
        name,
        title,
        about,
        skills,
        experience,
        projects,
        email,
        linkedinId,
        githubUrl,
        bgColor,
        image,
    } = portfolioData;

    return (
        <div className="portfolio-display" style={{ backgroundColor: bgColor }}>
            <div className="profile-container">
                {image && (
                    <img src={URL.createObjectURL(image)} alt="Profile" className="profile-photo" />
                )}
            </div>
            <div className="portfolio-content">
                <h1>{name}</h1>
                <h2>{title}</h2>
                <section>
                    <h3>About Me</h3>
                    <p>{about}</p>
                </section>
                <section>
                    <h3>Skills</h3>
                    <p>{skills}</p>
                </section>
                <section>
                    <h3>Experience</h3>
                    <p>{experience}</p>
                </section>
                <section>
                    <h3>Projects</h3>
                    <p>{projects}</p>
                </section>
                <section>
                    <h3>Contact</h3>
                    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                    <p>LinkedIn: <a href={linkedinId} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                    <p>GitHub: <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                </section>
            </div>
        </div>
    );
};

export default PortfolioDisplay;
