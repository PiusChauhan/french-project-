import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>France<span className="brand-accent">Tourism</span></h3>
                        <p>Your gateway to the most beautiful country in the world. Let us help you discover the magic of France.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Explore</h4>
                        <ul>
                            <li><Link to="/destinations">Destinations</Link></li>
                            <li><Link to="/culture">Culture</Link></li>
                            <li><Link to="/guide">Travel Guide</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Top Destinations</h4>
                        <ul>
                            <li><Link to="/destinations">Paris</Link></li>
                            <li><Link to="/destinations">French Riviera</Link></li>
                            <li><Link to="/destinations">Provence</Link></li>
                            <li><Link to="/destinations">Loire Valley</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#instagram">Instagram</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                            <li><a href="#facebook">Facebook</a></li>
                            <li><a href="#youtube">YouTube</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} France Tourism. All rights reserved.</p>
                    <p>Made with ❤️ for travelers worldwide</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;