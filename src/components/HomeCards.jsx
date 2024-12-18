// import React from 'react';
import Card from './Card';

function HomeCards() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-black text-white py-20'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card>
                <h2 className='text-2xl font-bold mb-4'>Explore Destinations</h2>
                <p className='text-gray-400 mb-4'>
                    Discover new and exciting places around the world. We offer detailed information and reviews to help plan your next adventure.
                </p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Learn more
                </button>
            </Card>
            <Card>
                <h2 className='text-2xl font-bold mb-4'>Plan Your Trip</h2>
                <p className='text-gray-400 mb-4'>
                    Use our app to create a personalized itineray for your trip. Add destinations, activities, and accommodations to your plan.
                </p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Get Started
                </button>
            </Card>
            <Card>
                <h2 className='text-2xl font-bold mb-4'>Share Your Experience</h2>
                <p className='text-gray-400 mb-4'>
                    Connect with other travelers and share your experiences. Read reviews and recommendations from other users.
                </p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Join Now
                </button>
            </Card>
            <Card>
                <h2 className='text-2xl font-bold mb-4'>Get Travel Alerts</h2>
                <p className='text-gray-400 mb-4'>
                    Sign up to receive travel alerts and notifications. Stay informed about travel advisories and updates.
                </p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Sign Up
                </button>
            </Card>
        </div>
    </div>
  );
}

export default HomeCards;