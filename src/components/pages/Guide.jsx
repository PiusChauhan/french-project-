import React from 'react';
import '../../styles/guide.css';

function Guide() {
    const tips = [
        {
            icon: '✈️',
            title: 'Getting There',
            items: ['Paris has two international airports: CDG and Orly', 'TGV high-speed trains connect major cities', 'EuroStar links London to Paris in 2.5 hours', 'Budget airlines serve regional airports']
        },
        {
            icon: '🗣️',
            title: 'Language Tips',
            items: ['Learn basic phrases: Bonjour, Merci, S\'il vous plaît', 'English is widely spoken in tourist areas', 'Use a translation app for rural regions', 'French people appreciate when you try their language']
        },
        {
            icon: '💶',
            title: 'Budget & Currency',
            items: ['Currency is Euro (€)', 'Tipping is not obligatory but appreciated', 'Paris Museum Pass saves money on attractions', 'Free entry to many museums on first Sundays']
        },
        {
            icon: '☀️',
            title: 'Best Time to Visit',
            items: ['Spring (Apr-Jun): Mild weather, fewer crowds', 'Summer (Jul-Aug): Warm, festivals, peak season', 'Autumn (Sep-Nov): Beautiful foliage, wine harvest', 'Winter (Dec-Feb): Christmas markets, skiing in Alps']
        },
        {
            icon: '🚇',
            title: 'Getting Around',
            items: ['Paris Métro is efficient and affordable', 'Rent a car for countryside exploration', 'SNCF trains cover the entire country', 'Vélib\' bike sharing available in Paris']
        },
        {
            icon: '🛡️',
            title: 'Safety & Etiquette',
            items: ['France is generally very safe for tourists', 'Beware of pickpockets at tourist hotspots', 'Greet shopkeepers when entering stores', 'Dress modestly when visiting churches']
        }
    ];

    return (
        <div className="guide-page">
            <div className="page-hero" style={{
                backgroundImage: 'linear-gradient(rgba(10,22,40,0.6), rgba(10,22,40,0.7)), url(https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=1920&q=80)'
            }}>
                <div className="page-hero-content">
                    <span className="section-label" style={{color: 'var(--gold-light)'}}>Plan Your Trip</span>
                    <h1>Travel Guide</h1>
                    <p>Everything you need to know for an unforgettable journey through France.</p>
                </div>
            </div>

            <div className="container" style={{padding: '80px 24px'}}>
                <div className="guide-grid">
                    {tips.map((tip, index) => (
                        <div key={index} className="guide-card">
                            <div className="guide-card-icon">{tip.icon}</div>
                            <h3>{tip.title}</h3>
                            <ul>
                                {tip.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Guide;