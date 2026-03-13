import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
        setFormData({name: '', email: '', message: ''});
    };

    return (
        <section>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;