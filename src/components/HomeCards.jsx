// import React from 'react';
import Card from './Card';

function HomeCards() {
    const cards = [
        {
            title: 'Explore Destinations',
            description: 'Discover new and exciting places around the world. We offer detailed information and reviews to help plan your next adventure.'
        },
        {
            title: 'Plan Your Trip',
            description: 'Use TravelLocalAi to create a personalized itineray for your trip. Add destinations, activities, and accommodations to your plan.'
        },
        {
            title: 'Share Your Experience',
            description: 'Connect with other travelers and share your experiences. Read reviews and recommendations from other users.'
        },
        {
            title: 'Get Travel Alerts',
            description: 'Sign up to receive travel alerts and notifications. Stay informed about travel advisories and updates.'
        }
    ]

  return (
    <div className='bg-gradient-to-r from-gray-800 to-black text-white py-20'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card>
                <h2 className='text-2xl font-bold mb-4'>{cards[0].title}</h2>
                <p className='text-gray-400 mb-4'>
                    {cards[0].description}
                </p>
            </Card>
            <Card>
                <h2 className='text-2xl font-bold mb-4'>{cards[1].title}</h2>
                <p className='text-gray-400 mb-4'>
                    {cards[1].description}
                </p>
            </Card>
            <Card>
                <h2 className='text-2xl font-bold mb-4'>{cards[2].title}</h2>
                <p className='text-gray-400 mb-4'>
                    {cards[2].description}
                </p>
            </Card>
            <Card>
                <h2 className='text-2xl font-bold mb-4'>{cards[3].title}</h2>
                <p className='text-gray-400 mb-4'>
                    {cards[3].description}
                </p>
            </Card>
        </div>
    </div>
  );
}

export default HomeCards;