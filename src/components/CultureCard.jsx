import React from 'react';

function CultureCard({ culture }) {
    return (
        <div className="culture-card">
            <img src={culture.image} alt={culture.title} />
            <h3>{culture.title}</h3>
            <p>{culture.description}</p>
        </div>
    );
}

export default CultureCard;