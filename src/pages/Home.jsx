import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import Button from '../components/Button';
import '../styles/home.css';

function Home() {
  const [stats, setStats] = useState([
    { number: 0, label: 'Annual Visitors', final: 90 },
    { number: 0, label: 'Most Visited', final: 1 },
    { number: 0, label: 'UNESCO Sites', final: 50 },
    { number: 0, label: 'Michelin Regions', final: 16 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          number: Math.min(stat.number + 1, stat.final)
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const destinations = [
    {
      name: 'Eiffel Tower',
      location: 'Paris',
      badge: 'Must See',
      image: 'https://images.unsplash.com/photo-1502602898657-fa38591595e0?w=500&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '2,500',
      description: 'The iconic iron lattice tower with breathtaking views of Paris from three observation levels.',
      features: ['Three levels', 'Restaurants', 'Sunset views', 'Year-round']
    },
    {
      name: 'The Louvre',
      location: 'Paris',
      badge: 'Cultural',
      image: 'https://images.unsplash.com/photo-1499856871957-5b8620a42033?w=500&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '3,200',
      description: 'The world\'s largest art museum with over 35,000 artworks including the Mona Lisa.',
      features: ['35K+ artworks', 'Mona Lisa', 'Egyptology', 'Audio guide']
    },
    {
      name: 'Mont-Saint-Michel',
      location: 'Normandy',
      badge: 'UNESCO',
      image: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=500&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '1,800',
      description: 'A stunning medieval monastery on a tidal island, one of France\'s most iconic sights.',
      features: ['UNESCO Site', 'Tidal bay', 'Abbey tour', 'Medieval village']
    },
    {
      name: 'French Riviera',
      location: 'Côte d\u0027Azur',
      badge: 'Beach',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe966ce51b?w=500&h=400&fit=crop',
      rating: '★★★★☆',
      reviews: '2,100',
      description: 'Glamorous Mediterranean coastline with beautiful beaches and upscale lifestyle.',
      features: ['Beaches', 'Luxury', 'Sunshine', 'Film Festival']
    },
    {
      name: 'Provence',
      location: 'South France',
      badge: 'Nature',
      image: 'https://images.unsplash.com/photo-1524978122844-abcc67833c38?w=500&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '1,900',
      description: 'Picturesque countryside with lavender fields, charming villages, and world-class wines.',
      features: ['Lavender', 'Villages', 'Wine', 'Markets']
    },
    {
      name: 'Palace of Versailles',
      location: 'Near Paris',
      badge: 'Palace',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '2,700',
      description: 'Opulent royal residence with stunning gardens, fountains, and the Hall of Mirrors.',
      features: ['700+ rooms', 'Hall of Mirrors', 'Gardens', 'Fountains']
    }
  ];

  const testimonials = [
    {
      text: 'France exceeded all my expectations! The food, architecture, and people made this the best vacation ever. Paris is truly magical!',
      author: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5
    },
    {
      text: 'The South of France is paradise. Lavender fields in Provence were breathtaking. Highly recommended for romantic getaways!',
      author: 'Emma Wilson',
      location: 'London, UK',
      rating: 5
    },
    {
      text: 'Amazing châteaux visits and wine tastings. French hospitality is warm and welcoming. Will definitely come back!',
      author: 'Michael Chen',
      location: 'Singapore',
      rating: 5
    }
  ];

  const reasons = [
    { icon: '🎨', title: 'Art & Culture', description: 'World-class museums and artistic heritage' },
    { icon: '🍷', title: 'Cuisine & Wine', description: 'Exquisite food and fine wines' },
    { icon: '🏰', title: 'Historic Landmarks', description: 'Iconic monuments and castles' },
    { icon: '🌄', title: 'Beautiful Scenery', description: 'Stunning landscapes everywhere' },
    { icon: '🚂', title: 'Easy Access', description: 'Excellent transportation network' },
    { icon: '💎', title: 'Luxury & Comfort', description: 'World-class services' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover the Magic of France</h1>
          <p>Experience culture, cuisine, and charm in the world's most visited destination</p>
          <div className="hero-buttons">
            <Button to="/destinations" variant="primary">Explore Destinations</Button>
            <Button to="/culture" variant="secondary">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{stat.number}{stat.label === 'Most Visited' ? '' : stat.label === 'Annual Visitors' ? 'M+' : '+' }</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Destinations</h2>
            <p>Explore the most iconic places in France</p>
          </div>
          <div className="destinations-grid">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
          <div className="section-cta">
            <Button to="/destinations" variant="primary">View All Destinations</Button>
          </div>
        </div>
      </section>

      <section className="why-france">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose France?</h2>
            <p>Discover what makes France the world's favorite destination</p>
          </div>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Travelers Say</h2>
            <p>Real experiences from real travelers</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {'★'.repeat(testimonial.rating)}<span style={{ opacity: 0.3 }}>{'★'.repeat(5 - testimonial.rating)}</span>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for travel tips, exclusive offers, and updates from France</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="Enter your email" required />
              <Button variant="primary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;