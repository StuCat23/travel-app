import PlacesListing from './PlacesListing';
import places from '../pages/places.json';

const Places = () => {

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Recommended adventures
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
              <div key={place.id} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <img src={place.image} alt={place.name} className="h-40 w-full object-cover rounded-md mb-4" />
                <h2 className="text-2xl font-bold mb-2">{place.name}</h2>
                <p className="text-gray-400 mb-4">{place.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Places;