import { FaArrowUp, FaShoppingCart, FaEye } from 'react-icons/fa';
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Card from "@/components/Products/Card";
import List from "@/components/Products/List";
import "aos/dist/aos.css";
import Filtre from "@/components/Products/Filtre";
import FiltreHeader from "@/components/Products/FiltreHeader";
import { getProduits } from "@/service/ProduitService";
import { getSousCategories } from "@/service/SousCategorieService";
import { getMarques } from "@/service/MarqueService";
import { getPromotions } from "@/service/PromotionService";
import { getCouleurs } from "@/service/CouleurService";

const Shop = () => {
  const [gridCols, setGridCols] = useState(3);
  const [isGrid, setIsGrid] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [filters, setFilters] = useState({ category: [], brand: [] , color: [] , price: []});

  const [produits, setProduits] = useState([]);
  const [sousCategories, setSousCategories] = useState([]);
  const [marques, setMarques] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [couleurs, setCouleurs] = useState([]); 

  useEffect(() => { 
    (async () => {
      setProduits(await getProduits()); 
    })(); 
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setSousCategories(await getSousCategories());
        setMarques(await getMarques());
        setPromotions(await getPromotions());
        setCouleurs(await getCouleurs());
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchCategories();
  }, []);
  
  useEffect(() => {
    console.log("Filtres appliqués :", filters); 

    const fetchProduits = async () => {
      let url = "http://localhost:8000/api/produits";
      const queryParams = new URLSearchParams();

      if (filters.category.length > 0) queryParams.append("categories", filters.category.join(","));
      if (filters.brand.length > 0) queryParams.append("marques", filters.brand.join(","));
      if (filters.color.length > 0) queryParams.append("couleurs", filters.color.join(","));
      if (filters.search) queryParams.append("search", filters.search);
      if (filters.price) queryParams.append("prix_max", filters.price);

      if (queryParams.toString()) url += `?${queryParams.toString()}`;

      console.log("URL finale :", url);

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Produits reçus :", data);
        setProduits(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    fetchProduits();
  }, [filters]);

  useEffect(() => {
    window.addEventListener("scroll", () => {setIsVisible(window.scrollY > 200)});
    return () => window.removeEventListener("scroll", () => {setIsVisible(window.scrollY > 200)});
  }, []);

  return (
    <div className="px-8 dark:bg-customDark">
      <FiltreHeader onChange={setGridCols} onToggleView={setIsGrid} isGrid={isGrid} gridCols={gridCols} produits={produits} setProduits={setProduits} />
      <Filtre onApplyFilters={setFilters}/>
      <div className={`mt-10 ${isGrid ? `grid grid-cols-${gridCols} gap-6` : "flex flex-col gap-4"}`}>
        {produits.map((product) => (
          isGrid ? (
            <Card key={product.id} product={product} />
          ) : (
            <List key={product.id} product={product} />
          )
        ))}
      </div>

      {isVisible && ( <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" })}}
        className="fixed bottom-16 right-4 bg-purpleLight text-white p-4 rounded-full shadow-lg hover:bg-purpleLight transition-all transform hover:scale-110 z-10">
          <FaArrowUp />
      </button>)}

      <Footer />
    </div>
  );
};

export default Shop;
