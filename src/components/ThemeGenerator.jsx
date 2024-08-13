
import React, { useState } from 'react';

const ThemeGenerator = ({ onThemeChange }) => {
    const [color, setColor] = useState('#f0f0f0');

    const handleColorChange = (e) => {
        const selectedColor = e.target.value;
        setColor(selectedColor);
        onThemeChange({ backgroundColor: selectedColor, color: '#ffffff' });
    };

    return (
        <div className="theme-generator">
            <h2 >CHOOSE COLOUR</h2>
            <input
                type="color"
                value={color}
                onChange={handleColorChange}
                style={{ width: '100%', padding: '10px', margin: '10px 0' }}
            />
            <div
                className="color-preview"
                style={{
                    backgroundColor: color,
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    marginTop: '10px'
                }}
            />
        </div>
    );
};

export default ThemeGenerator;
