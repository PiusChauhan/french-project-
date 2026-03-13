// TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='testimonial-card'>
            <p>{testimonial.quote}</p>
            <h4>{testimonial.author}</h4>
        </div>
    );
};

export default TestimonialCard;