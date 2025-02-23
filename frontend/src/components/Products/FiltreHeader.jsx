/* eslint-disable react/prop-types */
import { Grid, List } from "lucide-react";

const FiltreHeader = ({ onChange, onToggleView, isGrid, gridCols }) => {
  return (
    <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-3">
            <button 
              className={`p-2 rounded-md hover:bg-gray-200 ${isGrid ? "bg-gray-300" : ""}`} 
              onClick={() => onToggleView(true)}
            >
                <Grid size={17} />
            </button>
            <button 
              className={`p-2 rounded-md hover:bg-gray-200 ${!isGrid ? "bg-gray-300" : ""}`} 
              onClick={() => onToggleView(false)}
            >
                <List size={17} />
            </button>
            { isGrid &&
              <div className="flex gap-2">
                {[2, 3, 4, 6].map((cols) => (
                  <div key={cols} className="flex gap-0.5">
                    {Array.from({ length: cols }).map((_, index) => (
                      <button key={index} className={`my-2 w-1 rounded-md ${gridCols === cols ? "bg-purple-500" : "bg-black"}`}
                        onClick={() => onChange(cols)}>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            }
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