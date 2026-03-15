import React from 'react';
import '../../styles/culture.css';

const Culture = () => {
    const cultureItems = [
        {
            icon: '🎨',
            title: 'Art & Museums',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop',
            description: 'Home to the Louvre, Musée d\'Orsay, and Centre Pompidou — France houses some of the world\'s most extraordinary art collections spanning millennia.'
        },
        {
            icon: '👗',
            title: 'Fashion Capital',
            image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
            description: 'Paris leads the global fashion industry with legendary houses like Chanel, Dior, Louis Vuitton, and Hermès setting trends every season.'
        },
        {
            icon: '🥐',
            title: 'Culinary Excellence',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
            description: 'From buttery croissants and fine wine to Michelin-starred cuisine — French gastronomy is a UNESCO Intangible Cultural Heritage.'
        },
        {
            icon: '🏛️',
            title: 'Architecture',
            image: 'https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=600&h=400&fit=crop',
            description: 'Gothic cathedrals like Notre-Dame, Romanesque abbeys, Art Nouveau gems, and bold modern designs by world-famous architects.'
        },
        {
            icon: '🍷',
            title: 'Wine Heritage',
            image: 'https://images.unsplash.com/photo-1560148218-1a83060f7b32?w=600&h=400&fit=crop',
            description: 'Bordeaux, Burgundy, Champagne, and Rhône Valley — France\'s wine regions produce some of the most celebrated wines on Earth.'
        },
        {
            icon: '🎭',
            title: 'Literature & Philosophy',
            image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop',
            description: 'The homeland of Voltaire, Hugo, Camus, and Sartre. France\'s intellectual tradition continues to shape global thought and creativity.'
        }
    ];

    return (
        <div className="culture-page">
            <div className="page-hero" style={{
                backgroundImage: 'linear-gradient(rgba(10,22,40,0.6), rgba(10,22,40,0.7)), url(https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&q=80)'
            }}>
                <div className="page-hero-content">
                    <span className="section-label" style={{color: 'var(--gold-light)'}}>Experience France</span>
                    <h1>Culture & Heritage</h1>
                    <p>Explore the art, fashion, cuisine, and traditions that make France a cultural superpower.</p>
                </div>
            </div>

            <div className="container" style={{padding: '80px 24px'}}>
                <div className="culture-grid">
                    {cultureItems.map((item, index) => (
                        <div key={index} className="culture-card">
                            <div className="culture-card-image">
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <div className="culture-card-icon">{item.icon}</div>
                            </div>
                            <div className="culture-card-body">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Culture;