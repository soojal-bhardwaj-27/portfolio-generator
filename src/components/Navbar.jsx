
import React from 'react';

const Navbar = () => {
    const websites = [
        'https://www.free-css.com/',
        'https://www.canva.com/website-builder/templates/portfolio/',
        'https://bootstrapmade.com/bootstrap-portfolio-templates/',
    ];

    const openRandomWebsite = () => {
        const randomIndex = Math.floor(Math.random() * websites.length);
        window.open(websites[randomIndex], '_blank');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Portfolio Generator</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             IDEAS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="https://www.free-css.com/" target="_blank" rel="noopener noreferrer">Free CSS</a></li>
                                <li><a className="dropdown-item" href="https://www.canva.com/website-builder/templates/portfolio/" target="_blank" rel="noopener noreferrer">Canva</a></li>
                                <li><a className="dropdown-item" href="https://bootstrapmade.com/bootstrap-portfolio-templates/" target="_blank" rel="noopener noreferrer">Bootstrap Made</a></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
