import React from 'react';


const genres = [
  { id: 'fiction', name: 'Fiction', image: 'https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'fantasy', name: 'Fantasy', image: 'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'mystery', name: 'Mystery', image: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 'biography', name: 'Biography', image: 'https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
];

const GenreSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto ">
        <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">
          Explore by Genre
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {genres.map(genre => (
            <div
              key={genre.id}
              // to={`/books?genre=${genre.id}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/30 z-10"></div>
              <img 
                src={genre.image} 
                alt={genre.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-xl font-medium text-white">{genre.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreSection;