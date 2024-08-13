import React, { useState } from 'react';
import './ThemeSelector.css';

const ThemeSelector = ({ theme, onThemeChange }) => {
    const [rgbColor, setRgbColor] = useState('#ffffff');

    const handleColorChange = (e) => {
        setRgbColor(e.target.value);
        onThemeChange({ backgroundColor: e.target.value, color: '#000000' }); 
    };

return (
        <div className="theme-selector">
            <label htmlFor="rgb-color">Select RGB Color:</label>
            <input
                type="color"
                id="rgb-color"
                value={rgbColor}
                onChange={handleColorChange}
            />
        </div>
    );
};

export default ThemeSelector;
