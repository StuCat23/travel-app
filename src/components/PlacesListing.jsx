const PlacesListing = () => {
  return (
    <div key={place.id} className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <img src={place.image} alt={place.name} className="h-40 w-full object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-2">{place.name}</h2>
        <p className="text-gray-400 mb-4">{place.description}</p>
        <a href={`/places/${place.id}`}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded px-4">
        Explore
        </a>
    </div>
  )
}

export default PlacesListing;