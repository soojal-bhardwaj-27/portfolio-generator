// src/components/ImageUpload/ImageUpload.jsx

import React from 'react';
import './ImageUpload.css';

const ImageUpload = ({ onImageChange }) => {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onImageChange(file); // Pass the file to the parent component
        }
    };

    return (
        <div className="image-upload">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
        </div>
    );
};

export default ImageUpload;
