import { Grid, List } from "lucide-react";
import { useState } from "react";


const FiltreHeader = ({ onChange, onToggleView, isGrid }) => {
  const [columns, setColumns] = useState(2);

  const handleSelect = (cols) => {
    setColumns(cols);
    onChange(cols);
  };

  return (
    <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-3">
            <button 
              className={`p-2 rounded-md hover:bg-gray-200 ${isGrid ? "bg-gray-300" : ""}`} 
              onClick={() => onToggleView(true)}
            >
                <Grid className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className={`p-2 rounded-md hover:bg-gray-200 ${!isGrid ? "bg-gray-300" : ""}`} 
              onClick={() => onToggleView(false)}
            >
                <List className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
                {[2, 3, 4, 6].map((cols) => (
                <button
                    key={cols}
                    className={`p-2 rounded-md border ${
                    columns === cols ? "bg-purple-500 text-white" : "bg-gray-100"
                    }`}
                    onClick={() => handleSelect(cols)}
                >
                    {cols}
                </button>
                ))}
            </div>
        </div>
        <div className="flex items-center justify-center gap-3">
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
  );
};

export default FiltreHeader;