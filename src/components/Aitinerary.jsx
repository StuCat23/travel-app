import { useState } from 'react';
import axios from 'axios';

function Aitinerary() {
    const [location, setLocation] = useState('');
    const [itinerary, setItinerary] = useState('');

    const generateItinerary = async () => {
        try {
            const response = await axios.post(
                'http://api.openai.com/v1/chat/completions', // This is a placeholder URL
                {
                    model: 'gpt-4',
                    messages: [
                        { role: 'system', content: 'You are a travel itinerary assistant.' },
                        { role: 'user', content: `Generate a 3-day travel itinerary for ${location}. Include popular attractions, dining options and activities.` },
                    ],
                },
                {
                    headers: {
                        Authorization: `Bearer YOUR_API_KEY_HERE`, // Use your OpenAI API key but store it in a .env file
                        'Content-Type': 'application/json',
                    },
                }
            );
            setItinerary(response.data.choices[0].message.content);
        } catch (error) {
            console.error('Error generating itinerary:', error);
        }
    };

    return (
        <div className='py-2'>
            <div className='container mx-auto text-center bg-gray-900 p-6 rounded-lg shadow-lg'>
                <h1 className='text-3xl font-semibold text-white mb-6'>AItinerary</h1>
                <p className='text-lg text-gray-400 mb-6'>Generate a travel itinerary for your next trip with our AI assistant.</p>
                <input 
                    type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='Enter a location'
                    className='w-3/4 border border-gray-300 bg-gray-900 text-white p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button
                    onClick={generateItinerary}
                    className='w-2/4 bg-gray-300 text-black py-3 rounded-lg hover:bg-gray-500 transition duration-300'
                >
                    Generate Itinerary
                </button>
                {itinerary && (
                    <div className='mt-6'>
                        <h2 className='text-2xl font-semibold text-gray-800'>Your Itinerary:</h2>
                        <p className='whitespace-pre-wrap mt-4 text-gray-700'>{itinerary}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Aitinerary;