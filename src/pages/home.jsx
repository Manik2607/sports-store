import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Sports Store!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="path/to/image1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-bold">Product 1</h2>
          <p className="text-gray-700">Description of Product 1</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Buy Now</button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="path/to/image2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-bold">Product 2</h2>
          <p className="text-gray-700">Description of Product 2</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Buy Now</button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src="path/to/image3.jpg" alt="Product 3" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-bold">Product 3</h2>
          <p className="text-gray-700">Description of Product 3</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;