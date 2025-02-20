import { Search } from "lucide-react";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Filtre = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["Electronics", "Clothing", "Accessories"];
  const brands = ["Nike", "Adidas", "Apple"];
  const colors = {
    Red: "bg-red-500",
    Blue: "bg-blue-500",
    Green: "bg-green-500",
  };

  return (
    <div className="mt-6 flex gap-6 relative z-50">
      {/* Premier champ de recherche - taille fixe */}
      <div className="relative flex items-center">
        <Dropdown
          isOpen={isOpen}
          toggleOpen={() => setIsOpen(!isOpen)}
          categories={categories}
          brands={brands}
          colors={colors}
        />
      </div>

      {/* Deuxième champ de recherche - occupe tout l'espace restant */}
      <div className="relative flex items-center flex-1">
        <span className="absolute left-3">
          <Search className="w-5 h-5 text-gray-400 dark:text-gray-600" />
        </span>
        <input
          type="text"
          placeholder="Rechercher"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full py-1.5 pr-5 pl-10 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400/70 focus:border-purple-500 focus:ring-2 focus:ring-purple-400 focus-visible:outline-none shadow-sm"
        />
      </div>
    </div>
  );
}

export default Filtre;
