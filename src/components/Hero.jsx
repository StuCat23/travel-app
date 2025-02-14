
const Hero = ({
    title = 'Travel Like a Local',
    subtitle = 'Explore and discover amazing places around the world with us!',
    button = 'Start Exploring'
}) => {
    return (
    <div className='py-40'>
        <div className='container mx-auto text-center'>
            <h1 className='text-4xl font-bold mb-4'>{ title }</h1>
            <p className='text-xl mb-8'>{ subtitle }</p>
            <button className='bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded'>
                { button }
            </button>
        </div>
    </div>
  );
};

export default Hero;