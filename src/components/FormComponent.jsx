
import React, { useState } from 'react';
import ImageUpload from './ImageUpload/ImageUpload';
import './FormComponent.css';

const FormComponent = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        academics: '',
        skills: '',
        email: '',
        linkedin: '',
        github: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (file) => {
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <form className="form-component" onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Date of Birth:
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Academics:
                <input
                    type="text"
                    name="academics"
                    value={formData.academics}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Skills:
                <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                LinkedIn URL:
                <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                GitHub URL:
                <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                />
            </label>
            <br />
            <ImageUpload onImageChange={handleImageChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
