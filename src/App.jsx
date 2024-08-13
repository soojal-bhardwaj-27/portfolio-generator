// src/App.jsx

import React, { useState } from 'react';
import PortfolioForm from './components/PortfolioForm';
import PortfolioDisplay from './components/PortfolioDisplay';

const App = () => {
    const [portfolioData, setPortfolioData] = useState(null);

    const handleFormSubmit = (data) => {
        setPortfolioData(data);
    };

    return (
        <div className="App">
            {!portfolioData ? (
                <PortfolioForm onSubmit={handleFormSubmit} />
            ) : (
                <PortfolioDisplay portfolioData={portfolioData} />
            )}
        </div>
    );
};

export default App;
