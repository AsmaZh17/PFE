import Footer from "../Footer/Footer";
import Card from "@/components/Products/Card"
import "aos/dist/aos.css";
import Filtre from "@/components/Products/Filtre";
import FiltreHeader from "@/components/Products/FiltreHeader";
import { useState } from "react";

const Shop = () => {
  const [gridCols, setGridCols] = useState(2);

  const product = {
    image: "https://via.placeholder.com/300",
    title: "Women's Top",
    description: "Regular Flare Fit Women's white Top",
    price: 50.0,
    oldPrice: 35.0,
    rating: 3, // Sur 5 étoiles
  };

  return (
    <div className="px-8  dark:bg-customDark">
      <FiltreHeader onChange={setGridCols} />
      <Filtre />
      <div className={`mt-10 grid grid-cols-${gridCols} gap-6`}>
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
