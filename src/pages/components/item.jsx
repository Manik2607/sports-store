import React from 'react';

const Item = () => {
  return (
    <div className="border bg-gray-200 border-gray-400 p-4 w-72 m-2 rounded">
        <div className=' bg-slate-100 min-h-44 mb-7'>
            <img
                src="https://m.media-amazon.com/images/I/613VIbBJcKL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Image"
                className="w-32 h-48 object-cover mx-auto"
            />
        </div>

      <h3 className="text-sm text-gray-700 mb-2">
        STEFFER Heavy Duty Plastic Cricket Bat, Full Size Premium Bat for Kids
        of Age Between 10 Yrs to 15 Yrs (Red)
      </h3>
      <div className="flex items-center text-yellow-500 mb-2">
        <span>⭐⭐⭐⭐☆</span> 
        <span className="text-gray-700 ml-2">8</span>
      </div>
      <div className="text-lg font-semibold text-red-700 mb-2">
        ₹399
        {/* <span className="text-sm text-gray-500 line-through ml-2">M.R.P: ₹999</span> */}
        {/* <span className="text-red-700 ml-2">(60% off)</span> */}
      </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
        </button>
        <button className='bg-green-600 mx-2 text-white px-4 py-2 rounded'>Buy</button>
    </div>
  );
};

export default Item;
