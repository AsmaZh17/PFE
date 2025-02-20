import { Search } from "lucide-react";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Filtre = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 flex gap-6">
        {/* Premier champ de recherche - taille fixe */}
        <div className="relative flex items-center">
            <Dropdown name="filtres" isOpen={isOpen}
            toggleOpen={() => {
                setIsOpen(!isOpen);
            }} />
        </div>

        {/* Deuxième champ de recherche - occupe tout l'espace restant */}
        <div className="relative flex items-center flex-1">
            <span className="absolute">
            <Search fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600 focus:dark:text-bgDark" />
            </span>
            <input
            type="text"
            placeholder="Rechercher"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full py-1.5 pr-5 dark:bg-contentDark text-gray-700 dark:text-gray-300 border border-borderGrayLight dark:border-borderGrayDark rounded-md placeholder-gray-400/70 pl-11 focus:border-purpleLight focus:dark:border-borderDark focus:ring-2 focus:ring-bgLight focus:dark:ring-bgDark focus-visible:outline-none"
            />
        </div>
    </div>
  );
};

export default Filtre;
