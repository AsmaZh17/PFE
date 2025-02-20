/* eslint-disable react/prop-types */
import {  ChevronDown} from "lucide-react";

const Dropdown = ({ isOpen, toggleOpen, categories, brands, colors }) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between cursor-pointer border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition duration-200" onClick={toggleOpen}>
        <span className="text-gray-700 dark:text-gray-300 font-medium">Filtres</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </div>
      {isOpen && (
        <div className="absolute bg-white dark:bg-gray-800 p-4 mt-2 shadow-lg rounded-lg w-64 z-50 top-full left-0 border border-gray-200 dark:border-gray-700">
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Catégorie</h4>
            <div className="space-y-2">
              {categories?.map((category, index) => (
                <label key={index} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-primary focus:ring-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Marque</h4>
            <div className="space-y-2">
              {brands?.map((brand, index) => (
                <label key={index} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-primary focus:ring-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Couleurs</h4>
            <div className="flex space-x-2">
              {colors &&
                Object.entries(colors).map(([color, className], index) => (
                  <div key={index} className={`w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 ${className} cursor-pointer`} />
                ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Prix</h4>
            <input type="range" className="w-full focus:ring-purple-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
