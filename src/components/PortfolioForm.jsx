// src/components/PortfolioForm.jsx

import React, { useState, useEffect } from 'react';

const PortfolioForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        about: '',
        skills: '',
        experience: '',
        projects: '',
        email: '',
        linkedinId: '',
        githubUrl: '',
        bgColor: '#ffffff',
        image: null,
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    useEffect(() => {
        const isValid = Object.values(formData).every(field => field !== '' && field !== null);
        setIsFormValid(isValid);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: '0 auto' }}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
            <textarea name="about" placeholder="About Me" value={formData.about} onChange={handleChange} required />
            <textarea name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} required />
            <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
            <textarea name="projects" placeholder="Projects" value={formData.projects} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="linkedinId" placeholder="LinkedIn ID" value={formData.linkedinId} onChange={handleChange} required />
            <input type="text" name="githubUrl" placeholder="GitHub URL" value={formData.githubUrl} onChange={handleChange} required />
            <input type="color" name="bgColor" value={formData.bgColor} onChange={handleChange} required />
            <input type="file" name="image" onChange={handleImageChange} accept="image/*" required />
            {isFormValid && <button type="submit">Generate Portfolio</button>}
        </form>
    );
};

export default PortfolioForm;
