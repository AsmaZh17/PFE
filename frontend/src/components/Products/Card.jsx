/* eslint-disable react/prop-types */
import image from "@/assets/ecommerce/01.jpg"
import { StarIcon } from "lucide-react";
const Card = ({ product }) => {
  return (
    <div className=" bg-white dark:bg-gray-800 rounded-md shadow-md flex flex-col items-center">
      <div className="relative w-full h-full">
        <img src={image} alt={product.title} className="w-full h-full object-cover rounded-md border border-gray-300 dark:border-borderDark" />
      </div>
      <div className="w-full p-4 text-center">
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>
              <StarIcon />
            </span>
          ))}
        </div>
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <div className="mt-2">
          <span className="text-lg font-bold text-purple-600">${product.price}</span>
          {product.oldPrice && (
            <span className="ml-2 text-gray-400 line-through">${product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
