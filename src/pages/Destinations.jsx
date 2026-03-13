import React, { useState } from 'react';
import DestinationCard from '../components/DestinationCard';

function Destinations() {
  const [filter, setFilter] = useState('all');

  const destinations = [
    {
      name: 'Eiffel Tower',
      location: 'Paris',
      image: 'https://images.unsplash.com/photo-1502602898657-fa38591595e0?w=500&h=400&fit=crop',
      description: 'Iconic iron lattice tower'
    }
  ];

  return (
    <section>
      <h1>Destinations</h1>
      <div className="destinations-grid">
        {destinations.map(d => <DestinationCard key={d.name} destination={d} />)}
      </div>
    </section>
  );
}

export default Destinations;