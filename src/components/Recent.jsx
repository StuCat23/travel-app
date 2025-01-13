
const recommendedPlaces = [
    {
      id: 1,
      name: "Santorini, Greece",
      description: "Santorini is known for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
      image: "/src/assets/images/santorini.jpg",
      user: "John Doe"
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      description: "Kyoto is famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
      image: "/src/assets/images/kyoto.jpg",
      user: "Jane Smith"
    },
    {
      id: 3,
      name: "Banff, Canada",
      description: "Banff is a resort town in the province of Alberta, located within Banff National Park.",
      image: "/src/assets/images/banff.jpg",
      user: "Alice Johnson"
    }
  ];

function Where() {
    return (
      <div className="text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Recent Adventures</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedPlaces.map((place) => (
                <div key={place.id} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <img src={place.image} alt={place.name} className="h-40 w-full object-cover rounded-md mb-4" />
                  <div className="opacity-75 hover:opacity-100 transition duration-300">
                    <h2 className="text-2xl font-bold mb-2">{place.name}</h2>
                    <p className="text-gray-400 mb-4">{place.description}</p>
                    <p className="text-gray-500 italic mb-4">Recommended by {place.user}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    );
  }

export default Where;