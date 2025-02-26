/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  ChevronDown} from "lucide-react";

const Dropdown = ({ isOpen, toggleOpen, categories, brands, colors , selectedCategories, toggleCategory, selectedBrands, toggleBrand , selectedColors, toggleColor , applyFilters , maxPrice, setMaxPrice}) => {
  
  return (
    <div className="relative">
      <div className="w-64 flex items-center justify-between cursor-pointer border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition duration-200" onClick={toggleOpen}>
        <span className="text-gray-700 dark:text-gray-300 font-medium">Filtres</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </div>
      {isOpen && (
        <div className="absolute bg-white dark:bg-gray-800 p-4 mt-2 shadow-lg rounded-lg w-64 z-20 top-full left-0 border border-gray-200 dark:border-gray-700">
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Catégorie</h4>
            <div className="space-y-2">
            {categories.length > 0 ? (
                categories.map((category) => (
                  <label key={category.categorie_id} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" checked={selectedCategories.includes(category.categorie_id)} onChange={() => toggleCategory(category.categorie_id)} className="form-checkbox text-primary focus:ring-purpleLight" />
                    <span className="text-gray-700 dark:text-gray-300">{category.titre}</span>
                  </label>
                ))
              ) : (
                <p className="text-gray-700 dark:text-gray-300">Aucune catégorie disponible.</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Marque</h4>
            <div className="space-y-2">
            {brands.length > 0 ? (
                brands.map((brand) => (
                  <label key={brand.marque_id} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" checked={selectedBrands.includes(brand.marque_id)} onChange={() => toggleBrand(brand.marque_id)} className="form-checkbox text-primary focus:ring-purpleLight" />
                    <span className="text-gray-700 dark:text-gray-300">{brand.nom}</span>
                  </label>
                ))
              ) : (
                <p className="text-gray-500 text-sm">Aucune marque disponible</p>
              )}
            </div>
          </div> 

          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Couleurs</h4>
            <div className="flex space-x-2">
            {colors.map((color) => (
                <div
                  key={color.couleur_id}
                  className={`w-8 h-8 rounded-full cursor-pointer transition-all duration-200 border-2 ${
                    selectedColors.includes(color.couleur_id) 
                      ? "bg-purpleLight scale-110"  
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.code_hex }}
                  onClick={() => toggleColor(color.couleur_id)}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">Prix</h4>
            
            {/* Barre de prix Max */}
            <input 
              type="range" 
              min="0" 
              max="1000" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(e.target.value)} 
              className="w-full focus:ring-purpleLight"
            />
            <p className="text-sm text-gray-600">Prix maximum: {maxPrice}€</p>
          </div>


          <div className="mt-4">
            <button
              onClick={applyFilters} 
              className="w-full px-4 py-2 bg-purpleLight text-white rounded-lg shadow hover:bg-purpleLight transition"
            >
              Appliquer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
