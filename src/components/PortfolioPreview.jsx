// src/components/PortfolioPreview.jsx

import React from 'react';

const PortfolioPreview = ({ data }) => {
  const {
    name,
    dateOfBirth,
    academics,
    skills,
    email,
    linkedinId,
    githubUrl,
    bgColor,
  } = data;

  const academicList = academics ? academics.split(',').map(item => item.trim()) : [];
  const skillsList = skills ? skills.split(',').map(item => item.trim()) : [];

  return (
    <div className="preview-container" style={{ backgroundColor: bgColor || '#ffffff' }}>
      <div className="portfolio-content">
        <h2>{name || 'Your Name'}</h2>
        <p><strong>Date of Birth:</strong> {dateOfBirth || 'DD/MM/YYYY'}</p>
        
        <div>
          <strong>Academics:</strong>
          <ul>
            {academicList.length > 0 ? academicList.map((item, index) => <li key={index}>{item}</li>) : <li>Academic details will appear here.</li>}
          </ul>
        </div>
        
        <div>
          <strong>Skills:</strong>
          <ul>
            {skillsList.length > 0 ? skillsList.map((item, index) => <li key={index}>{item}</li>) : <li>Skills will appear here.</li>}
          </ul>
        </div>
        
        <p><strong>Email:</strong> {email || 'your.email@example.com'}</p>
        
        {linkedinId && <p><strong>LinkedIn:</strong> <a href={`https://linkedin.com/in/${linkedinId}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></p>}
        
        {githubUrl && <p><strong>GitHub:</strong> <a href={githubUrl} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></p>}
      </div>
    </div>
  );
};

export default PortfolioPreview;
