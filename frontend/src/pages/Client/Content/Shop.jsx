import { FaArrowUp, FaShoppingCart, FaEye } from 'react-icons/fa';
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Card from "@/components/Products/Card";
import "aos/dist/aos.css";
import Filtre from "@/components/Products/Filtre";
import FiltreHeader from "@/components/Products/FiltreHeader";
import { getProduits } from "@/service/ProduitService";


const Shop = () => {
  const [gridCols, setGridCols] = useState(3);
  const [isGrid, setIsGrid] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [produits, setProduits] = useState([]);

  useEffect(() => { (async () => setProduits(await getProduits()))(); }, []);

  const gridClasses = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    6: "grid-cols-6",
  };

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 200);
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="px-8 dark:bg-customDark">
      <FiltreHeader onChange={setGridCols} onToggleView={setIsGrid} isGrid={isGrid} gridCols={gridCols} />
      <Filtre />
      <div className={`mt-10 ${isGrid ? `grid ${gridClasses[gridCols]} gap-6` : "flex flex-col gap-4"}`}>
        {produits.map((product) => (
          isGrid ? (
            <Card key={product.id} product={product} />
          ) : (
            <div key={product.id} className="flex items-center gap-6 p-4 border-b bg-white dark:bg-gray-800"> 
              <div className="relative w-32 h-32 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-lg overflow-hidden group">
                <img
                  src={`/produits/${product.image}`}
                  alt={product.nom}
                  className="w-full h-full object-cover brightness-110 transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaShoppingCart className="text-white w-6 h-6 mx-2" />
                  <FaEye className="text-white w-6 h-6 mx-2" />
                </div>
              </div>
              <div className="flex flex-col text-gray-800 dark:text-white">
                <h3 className="font-semibold text-lg">{product.nom}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                <div className="mt-2 text-xl font-bold">${product.prix}</div>
              </div>
            </div>
          )
        ))}
      </div>


      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all transform hover:scale-110 z-10" 
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Shop;
