import React from 'react';
import Header from '../Client/Header/Header';
import Filters from './Filters';
import ProductGrid from './ProductGrid';
import { GoHome } from "react-icons/go";

const Boutique = () => {
  return (
    <>
        <div className="col-xl-3 col-sm-5 box-col-4 p-0 m-0 product-sidebar dark:bg-bgDark bg-white">
            <div className="flex items-center justify-between px-4 py-2">
                <span className="text-lg font-bold text-gray-700 dark:text-white">
                    Product
                </span>

                <ol className="flex items-center justify-end space-x-3 text-base pr-10">
                    <GoHome className="text-gray-500 hover:text-gray-700 w-5 h-5" />
                    <li>
                        <span className="text-gray-500">/</span>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-700 font-bold">
                        ECommerce
                        </a>
                    </li>
                    <li>
                        <span className="text-gray-500">/</span>
                    </li>
                    <li>
                        <span className="text-gray-500 font-medium">Product</span>
                    </li>
                </ol>
            </div>
        </div>
        <div className="w-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="mb-4">
                    <div className="flex flex-wrap -mx-2">
                        <Filters />
                        <div className="col-md-9 col-sm-12">
                            <form>
                            <div className="form-group m-0">
                                <input className="form-control" type="search" placeholder="Search.." />
                                <i className="fa fa-search"></i>
                            </div>
                            </form>
                            <ProductGrid />
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Boutique;
