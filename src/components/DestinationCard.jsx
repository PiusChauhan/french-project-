import React from 'react';

function DestinationCard({ destination }) {
    return (
        <div className="destination-card">
            <div className="card-image-wrapper">
                <img src={destination.image} alt={destination.name} loading="lazy" />
                {destination.badge && (
                    <span className="card-badge">{destination.badge}</span>
                )}
                <div className="card-overlay">
                    <span className="card-location">📍 {destination.location}</span>
                </div>
            </div>
            <div className="card-body">
                <h3>{destination.name}</h3>
                {destination.rating && (
                    <div className="card-rating">
                        <span className="stars">{destination.rating}</span>
                        {destination.reviews && (
                            <span className="reviews">({destination.reviews} reviews)</span>
                        )}
                    </div>
                )}
                <p>{destination.description}</p>
                {destination.features && (
                    <div className="card-features">
                        {destination.features.map((f, i) => (
                            <span key={i} className="feature-tag">{f}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default DestinationCard;