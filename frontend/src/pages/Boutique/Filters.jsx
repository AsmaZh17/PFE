import React from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import {  Grid, List } from "react-feather";

const Filtres = () => {
  const colors = {
    white: 'bg-white',
    gray: 'bg-gray-500',
    black: 'bg-black',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
    pink: 'bg-pink-500',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500'
  };

  return (
    <div className="w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    {/* View Options & Sorting */}
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-4 space-y-2 md:space-y-0">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-gray-200">
          <Grid className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-200">
          <List className="w-5 h-5 text-gray-600" />
        </button>
        <span className="text-gray-600 text-sm hidden md:block">
          Showing Products 1 - 24 of 200
        </span>
        <select className="border border-gray-300 rounded-md p-2 text-gray-600 focus:ring-primary focus:border-primary">
          <option value="opt1">Featured</option>
          <option value="opt2">Lowest Prices</option>
          <option value="opt3">Highest Prices</option>
        </select>
      </div>
    </div>
    
    {/* Search Bar and Filters */}
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-4 space-y-2 md:space-y-0">
      {/* Search Bar */}
      <div className="relative w-full md:w-1/3">
        <input
          type="text"
          className="w-full p-2 border rounded-lg pl-10 text-gray-700 dark:text-white"
          placeholder="Search..."
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>
    </div>

    {/* Filters Section */}
    <div className="w-full p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Filters</h6>
        <FaChevronDown className="text-gray-500 cursor-pointer" />
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Category</h4>
        <div className="space-y-2">
          {["Man Shirt", "Man Jeans", "Woman Top", "Woman Jeans", "Man T-shirt"].map((category, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox text-primary" />
              <span className="text-gray-700 dark:text-white">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Brand</h4>
        <div className="space-y-2">
          {["Levi's", "Diesel", "Lee", "Hudson", "Denizen", "Spykar"].map((brand, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="form-checkbox text-primary" />
              <span className="text-gray-700 dark:text-white">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Colors</h4>
        <div className="flex space-x-2">
          {Object.entries(colors).map(([color, className], index) => (
            <div key={index} className={`w-6 h-6 rounded-full ${className} cursor-pointer`} />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Price</h4>
        <input type="range" className="w-full" />
      </div>
    </div>
  </div>
);
}


export default Filtres;
