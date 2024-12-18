// import React from 'react';

const Hero = ({
    title = 'Welcome to The Travel App',
    subtitle = 'Explore and discover amazing places around the world with us!'
}) => {
    return (
    <div className='bg-gradient-to-r from-gray-800 to-black text-white py-20'>
        <div className='container mx-auto text-center'>
            <h1 className='text-4xl font-bold mb-4'>{ title }</h1>
            <p className='text-xl mb-8'>{ subtitle }</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Exlpore Now!
            </button>
        </div>
    </div>
  );
};

export default Hero;