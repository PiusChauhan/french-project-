import React, { useState } from 'react';
import '../../styles/contact.css';

function Contact() {
    const [formData, setFormData] = useState({name: '', email: '', subject: '', message: ''});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({name: '', email: '', subject: '', message: ''});
        }, 3000);
    };

    return (
        <div className="contact-page">
            <div className="page-hero" style={{
                backgroundImage: 'linear-gradient(rgba(10,22,40,0.6), rgba(10,22,40,0.7)), url(https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1920&q=80)'
            }}>
                <div className="page-hero-content">
                    <span className="section-label" style={{color: 'var(--gold-light)'}}>Get in Touch</span>
                    <h1>Contact Us</h1>
                    <p>Have questions about your trip to France? We'd love to help you plan the perfect journey.</p>
                </div>
            </div>

            <div className="container">
                <div className="contact-layout">
                    <div className="contact-info">
                        <h2>Let's Connect</h2>
                        <p>Whether you're planning your first visit or your hundredth, our team of France travel experts is here to help.</p>

                        <div className="info-items">
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <strong>Visit Us</strong>
                                    <p>25 Rue de Rivoli, 75001 Paris, France</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <div>
                                    <strong>Email Us</strong>
                                    <p>hello@francetourism.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">📞</span>
                                <div>
                                    <strong>Call Us</strong>
                                    <p>+33 1 42 68 50 00</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">🕐</span>
                                <div>
                                    <strong>Working Hours</strong>
                                    <p>Mon — Fri: 9:00 AM — 6:00 PM CET</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {submitted ? (
                            <div className="success-message">
                                <span className="success-icon">✓</span>
                                <h3>Message Sent!</h3>
                                <p>We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <input type="text" placeholder="Jean Dupont" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="jean@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="Trip planning help" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="Tell us about your dream trip to France..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Send Message →</button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;