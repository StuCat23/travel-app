
const Hero = ({
    title = 'Travel Like a Local',
    subtitle = 'Explore and discover amazing places around the world with us!',
    button = 'Start Exploring'
}) => {
    return (
    <div className='bg-gradient-to-r from-gray-800 to-black text-white py-40'>
        <div className='container mx-auto text-center'>
            <h1 className='text-4xl font-bold mb-4'>{ title }</h1>
            <p className='text-xl mb-8'>{ subtitle }</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                { button }
            </button>
        </div>
    </div>
  );
};

export default Hero;