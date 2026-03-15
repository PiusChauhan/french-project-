import React from 'react';
import DestinationCard from '../DestinationCard';
import '../../styles/destinations.css';

function Destinations() {
  const destinations = [
    {
      name: 'Eiffel Tower',
      location: 'Paris',
      badge: 'Must See',
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '2,500',
      description: 'The iconic iron lattice tower standing 330m tall, offering breathtaking panoramic views of Paris from three observation levels.',
      features: ['Three levels', 'Restaurants', 'Night lights', 'Year-round']
    },
    {
      name: 'The Louvre Museum',
      location: 'Paris',
      badge: 'Cultural',
      image: 'https://images.unsplash.com/photo-1565099824688-e93eb20fe622?w=600&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '3,200',
      description: 'The world\'s largest art museum with over 35,000 artworks including the Mona Lisa and Venus de Milo.',
      features: ['35K+ artworks', 'Mona Lisa', 'Audio guide', 'Night tours']
    },
    {
      name: 'Mont-Saint-Michel',
      location: 'Normandy',
      badge: 'UNESCO',
      image: 'https://images.unsplash.com/photo-1671010496251-22eab06e3292?w=600&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '1,800',
      description: 'A stunning medieval monastery perched on a tidal island, one of France\'s most recognized landmarks.',
      features: ['UNESCO Site', 'Tidal bay', 'Abbey tour', 'Medieval village']
    },
    {
      name: 'French Riviera',
      location: 'Côte d\'Azur',
      badge: 'Beach',
      image: 'https://images.unsplash.com/photo-1692734686010-be90ca50a3fa?w=600&h=400&fit=crop',
      rating: '★★★★☆',
      reviews: '2,100',
      description: 'Glamorous Mediterranean coastline with crystal-clear waters, luxury resorts, and vibrant nightlife.',
      features: ['Beaches', 'Luxury hotels', 'Sunshine', 'Film Festival']
    },
    {
      name: 'Lavender Fields',
      location: 'Provence',
      badge: 'Nature',
      image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '1,900',
      description: 'Endless purple landscapes in bloom from June to August, surrounded by charming villages and vineyards.',
      features: ['Lavender season', 'Wine tours', 'Villages', 'Local markets']
    },
    {
      name: 'Palace of Versailles',
      location: 'Versailles',
      badge: 'Palace',
      image: 'https://images.unsplash.com/photo-1706192878987-f893eb8cd632?w=600&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '2,700',
      description: 'The opulent royal residence with the legendary Hall of Mirrors, stunning gardens, and ornate fountains.',
      features: ['Hall of Mirrors', '800 hectares', 'Fountains', 'Marie Antoinette']
    },
    {
      name: 'Château de Chambord',
      location: 'Loire Valley',
      badge: 'Heritage',
      image: 'https://images.unsplash.com/photo-1645808533090-6109f7f1f8b3?w=600&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '1,400',
      description: 'The largest château in the Loire Valley, featuring remarkable Renaissance architecture and vast grounds.',
      features: ['Renaissance', 'Da Vinci staircase', 'Hunting grounds', 'Light shows']
    },
    {
      name: 'Strasbourg',
      location: 'Alsace',
      badge: 'Charming',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop',
      rating: '★★★★☆',
      reviews: '1,200',
      description: 'A fairy-tale city blending French and German influences, famous for its half-timbered houses and cathedral.',
      features: ['Half-timbered', 'Cathedral', 'Christmas market', 'Wine route']
    },
    {
      name: 'Bordeaux Vineyards',
      location: 'Bordeaux',
      badge: 'Wine',
      image: 'https://images.unsplash.com/photo-1560148218-1a83060f7b32?w=600&h=400&fit=crop',
      rating: '★★★★★',
      reviews: '1,600',
      description: 'World-renowned wine region with thousands of châteaux, exceptional terroir, and centuries of winemaking tradition.',
      features: ['Wine tasting', 'Château tours', 'Gastronomy', 'UNESCO city']
    }
  ];

  return (
    <section className="destinations-page">
      <div className="page-hero" style={{
        backgroundImage: 'linear-gradient(rgba(10,22,40,0.6), rgba(10,22,40,0.7)), url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80)'
      }}>
        <div className="page-hero-content">
          <span className="section-label" style={{color: 'var(--gold-light)'}}>Explore France</span>
          <h1>Iconic Destinations</h1>
          <p>From ancient monuments to stunning coastlines — discover the places that make France unforgettable.</p>
        </div>
      </div>
      <div className="container" style={{padding: '60px 24px'}}>
        <div className="destinations-grid">
          {destinations.map((d, i) => (
            <DestinationCard key={i} destination={d} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;