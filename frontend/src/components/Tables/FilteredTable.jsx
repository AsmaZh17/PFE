/* eslint-disable react/prop-types */
import { useState } from "react";
import { ArrowDownToLine, Plus, Search, ChevronDown, ArrowDownAZ, ArrowUpAZ, Trash2Icon } from "lucide-react";
import FilterButtons from "@/components/Tables/FilterButtons";
import Pagination from "@/components/Pagination/Pagination";
import EmptyState from "@/components/Tables/EmptyState";
import img from "@/assets/default/image.png";
import DeleteModal from "@/components/Modals/DeleteModal";
import ViewModal from "@/components/Modals/ViewModal";
import FormModal from "@/components/Modals/FormModal";
import Checkbox from "@/components/ui/Checkbox";

const FilteredTable = ({ label, datas, viewData, filtres, formActions, identifiant }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("Tous");

    const itemsPerPage = [5, 10, 15, 20, 25];
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItemPerPage, setSelectedItemPerPage] = useState(5);
    const [isSelectedItemOpen, setIsSelectedItemOpen] = useState(false);

    const [sortOrder, setSortOrder] = useState("asc");
    const [sortedColumnKey, setSortedColumnKey] = useState(formActions.columns[0]?.key || "");

    const handleSort = (data) => {
        return data.sort((a, b) => {
        if (a[sortedColumnKey] < b[sortedColumnKey]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortedColumnKey] > b[sortedColumnKey]) return sortOrder === "asc" ? 1 : -1;
        return 0;
        });
    };

    const toggleSortOrder = (columnKey) => {
        setSortedColumnKey(prevKey => (prevKey === columnKey ? prevKey : columnKey));
        setSortOrder(prevOrder => (sortedColumnKey === columnKey && prevOrder === "asc") ? "desc" : "asc");
        setCurrentPage(1);
    };
    
    const data = handleSort(datas);

    const currentItems = data
    .filter(item => {
        const matchesSearchTerm = searchTerm.length === 0 || formActions.columns.some(column =>
            
            item[column.key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );

        const matchesFilter = selectedFilter === 'Tous' ||
            filtres && filtres.field && item[filtres.field] === selectedFilter;

        return matchesSearchTerm && matchesFilter;
    })
    .slice((currentPage * selectedItemPerPage) - selectedItemPerPage, currentPage * selectedItemPerPage);

    const [isOpen, setIsOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(false);

    const [selectedItems, setSelectedItems] = useState([]);
    const isAllSelected = selectedItems.length === currentItems.length && currentItems.length > 0;

    const handleSelectAll = () => {
        if (isAllSelected) { setSelectedItems([]) } 
        else { setSelectedItems(currentItems.map((item) => item.id)) }
    };
    const handleSelectOne = (id) => {
        if (selectedItems.includes(id)) { setSelectedItems(selectedItems.filter((itemId) => itemId !== id)) } 
        else { setSelectedItems([...selectedItems, id]) }   
    };

    return (
        <section className="mx-6 py-6">
            <div className="flex flex-col">
                <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden bg-customLight dark:bg-customDark border border-contentLight dark:border-borderDark rounded-lg p-6 shadow-sm">
                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center gap-x-3">
                                <h2 className="text-lg font-medium text-gray-800 dark:text-white">{label.charAt(0).toUpperCase() + label.slice(1)}</h2>
                                <span className="px-3 py-1 text-xs bg-bgLight dark:bg-bgDark text-purpleLight rounded-full">{data.length} {label}</span>
                            </div>
                            <div className="flex items-center mt-4 gap-x-3 justify-end">
                                {selectedItems.length > 0 && 
                                    <>
                                        <button onClick={() => {setIsOpen(true);}} className="flex items-center px-2 py-2 rounded-md bg-bgLight dark:bg-bgDark text-purpleLight">
                                            <Trash2Icon size={20} />
                                        </button>
                                        {isOpen && ( <DeleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => {setIsOpen(false)}} header={true} message={`Êtes-vous sûr de vouloir supprimer tous ces ${label} ?`} />)}
                                    </>
                                }
                                <button className="flex items-center px-2 py-2 rounded-md bg-bgLight dark:bg-bgDark text-purpleLight">
                                    <ArrowDownToLine size={20} />
                                </button>
                                <>
                                    <button onClick={() => {setIsAddOpen(true); formActions.setFormData({})}} className="flex items-center px-4 py-2 text-sm text-white bg-purpleLight rounded-md gap-x-2">
                                        <Plus size={17}/><span>Ajouter {label.slice(0, -1)}</span>
                                    </button>
                                    {isAddOpen && (
                                        <FormModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} formLabel={label} header={true} action="Ajouter" formData={formActions.formData} setFormData={formActions.setFormData} fields={formActions.fields} onSubmit={async () => { await formActions.handleCreate(); setIsAddOpen(false); }}  />
                                    )}
                                </>
                            </div>
                        </div>

                        <div className="mt-6 md:flex md:items-center md:justify-between">
                            <div className="block sm:flex justify-between md:w-1/2 lg:w-1/2 gap-5">
                                {data.length > 5 && 
                                    <div className="mb-6 sm:mb-0 -mt-[60px] sm:mt-0">
                                        <button onClick={() => {setIsSelectedItemOpen(!isSelectedItemOpen)}} className="flex items-center px-3 py-2 gap-2 rounded-md bg-bgLight dark:bg-bgDark text-purpleLight text-sm">
                                            <span>{selectedItemPerPage}</span><ChevronDown size={20} />
                                        </button>
                                        <div className="relative">
                                            {isSelectedItemOpen && (
                                            <div className="absolute mt-1 z-10 bg-customLight dark:bg-contentDark border border-bgLight dark:border-bgDark rounded-lg shadow-lg w-full">
                                                {itemsPerPage.map((option, index) => (
                                                <div key={index} className={`px-4 py-1 text-gray-700 hover:bg-bgLight hover:dark:bg-bgDark dark:hover:text-white cursor-pointer text-center
                                                    ${selectedItemPerPage === option ? "bg-bgLight dark:bg-bgDark dark:text-white" : "dark:text-grayDark" } ${index === 0 ? "rounded-t-md" : ""} ${index === itemsPerPage.length - 1 ? "rounded-b-md" : ""}`}
                                                    onClick={() => {setSelectedItemPerPage(option); setIsSelectedItemOpen(false)}}> {option} 
                                                </div> ))}
                                            </div>)}
                                        </div>
                                    </div>
                                }
                                {filtres && <FilterButtons filtre={filtres.value} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />}
                            </div>
                            <div className="relative flex items-center mt-4 md:pl-4 md:mt-0">
                                <span className="absolute">
                                    <Search fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600 focus:dark:text-bgDark"/>
                                </span>
                                <input type="text" placeholder="Rechercher" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value);}} className="block w-full py-1.5 pr-5 dark:bg-contentDark text-gray-700 dark:text-gray-300 border border-borderGrayLight dark:border-borderGrayDark rounded-md md:w-80 placeholder-gray-400/70 pl-11 focus:border-purpleLight focus:dark:border-borderDark focus:ring-2 focus:ring-bgLight focus:dark:ring-bgDark focus-visible:outline-none" />
                            </div>
                        </div>

                        {data.length > 0 && currentItems.length > 0 ? (
                            <div className="mt-6 py-2 flex flex-col w-full max-w-sm sm:max-w-[310px] md:max-w-3xl w-990:max-w-[650px] lg:max-w-full max-h-[400px] overflow-y-auto">
                            {/* <div className="mt-6 py-2 flex flex-col w-full max-w-[100vh] lg:max-w-full max-h-[400px] overflow-y-auto"> */}    
                            <div className="overflow-x-auto scrollbar">
                                    <table className="min-w-full">
                                        <thead>
                                            <tr className="border-b border-contentLight dark:border-borderDark">
                                                {formActions.columns.map((column, index) => (
                                                    <th key={index} className={`py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400 ${column.type === "checkbox" ? "pr-2 pl-4 w-10" : "px-4"}`}>
                                                        {column.type === "checkbox" ? (
                                                            <Checkbox checked={isAllSelected} onChange={handleSelectAll} />
                                                        ) : column.type === "text" ? (
                                                            <button onClick={() => toggleSortOrder(column.key)} className="flex items-center gap-x-2 focus:outline-none">
                                                                {column.label} {sortedColumnKey === column.key && (sortOrder === "asc" ? <ArrowDownAZ size={15}/> : <ArrowUpAZ size={15}/>)}
                                                            </button> ) : ( column.label )}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentItems.map((item, index) => (
                                                <tr key={index} className="border-b border-contentLight dark:border-borderDark">
                                                    {formActions.columns.map((column, colIndex) => (
                                                        <td key={colIndex} className={`py-4 text-sm whitespace-nowrap ${column.type === "checkbox" ? "pr-2 pl-4 w-10" : "px-4"}`}>
                                                            {column.type === "checkbox" && (
                                                                <Checkbox checked={selectedItems.includes(item.id)} onChange={() => handleSelectOne(item.id)} />
                                                            )}                                        
                                                            {column.type === "text" && (
                                                                <h4 className="text-gray-700 dark:text-gray-200">
                                                                    {item[column.key].length > 70 ? item[column.key].substring(0, 70) + '...' : item[column.key]}
                                                                </h4>
                                                            )}
                                                            {column.type === "id" && column.options && (() => {
                                                                const selectedOption = column.options.find(option => option.value === item[column.key]);
                                                                return selectedOption ? (
                                                                    <h4 className="text-gray-700 dark:text-gray-200">
                                                                        {selectedOption.label} 
                                                                    </h4>
                                                                ) : null;
                                                            })()}

                                                            {column.type === "img" && (
                                                                <div className="flex items-center">
                                                                    <img src={item[column.key] ? (`/${label}/${item[column.key]}`) : img} alt="Image" 
                                                                        className="object-cover w-12 h-12 -mx-1 border-2 border-contentLight rounded-full dark:border-contentDark" />
                                                                </div>
                                                            )}
                                                            {column.type === "images" && (
                                                                <div className="flex items-center">
                                                                    <img className="object-cover w-6 h-6 -mx-1 border-2 border-contentLight rounded-full dark:border-contentDark" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                                                    <img className="object-cover w-6 h-6 -mx-1 border-2 border-contentLight rounded-full dark:border-contentDark" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                                                    <img className="object-cover w-6 h-6 -mx-1 border-2 border-contentLight rounded-full dark:border-contentDark" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
                                                                    <img className="object-cover w-6 h-6 -mx-1 border-2 border-contentLight rounded-full dark:border-contentDark" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                                                    <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-purpleLight bg-bgLight dark:bg-bgDark border-2 border-contentLight rounded-full dark:border-contentDark">+4</p>
                                                                </div>
                                                            )}
                                                            {column.type === "date" && (
                                                                <h2 className="text-gray-800 dark:text-white">
                                                                    {item[column.key].slice(0,10)}
                                                                </h2>
                                                            )}
                                                            {column.type === "date with Date" && (
                                                                <h2 className="text-gray-800 dark:text-white">
                                                                    {new Date(item[column.key]).toLocaleDateString()}
                                                                </h2>
                                                            )}
                                                            {column.type === "progress" && (
                                                                <div className="w-48 h-1.5 bg-bgLight dark:bg-bgDark overflow-hidden rounded-full">
                                                                    <div className="bg-purpleLight" style={{ width: `${item[column.key]}%`, height: "100%" }}></div>
                                                                </div>
                                                            )}
                                                            {column.type === "actions" && (
                                                                <div className="flex items-center gap-x-3">
                                                                    {item.actions.view && (
                                                                        <>
                                                                            <button onClick={() => {setIsViewOpen(true); item.actions.view(item[identifiant]);}} type="button" className="text-gray-500 transition-colors duration-200 dark:hover:text-blue-500 dark:text-gray-300 hover:text-blue-500 focus:outline-none">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c-4.688 0-8.625 3.135-10.5 7.5 1.875 4.365 5.813 7.5 10.5 7.5s8.625-3.135 10.5-7.5c-1.875-4.365-5.813-7.5-10.5-7.5z" />
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                                                </svg>
                                                                            </button>
                                                                            {isViewOpen && <ViewModal isOpen={isViewOpen} onClose={() => setIsViewOpen(false)} label={label} viewData={viewData}/> }
                                                                        </>
                                                                    )}
                                                                    {item.actions.edit && (
                                                                        <>
                                                                            <button onClick={() => {setIsEditOpen(true); item.actions.edit(item[identifiant]);}} className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                                </svg>
                                                                            </button>
                                                                            {isEditOpen && (
                                                                                <FormModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} formLabel={label} action="Modifier" formData={formActions.formData} setFormData={formActions.setFormData} fields={formActions.fields} onSubmit={async () => { await formActions.handleEdit(); setIsEditOpen(false); }} />
                                                                            )}
                                                                        </>
                                                                    )}
                                                                    {item.actions.delete && (
                                                                        <>
                                                                            <button onClick={() => {setIsDeleteOpen(true); setItemToDelete(item[identifiant])}} type="button" className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                                </svg>
                                                                            </button>
                                                                            {isDeleteOpen && <DeleteModal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} onConfirm={() => {item.actions.delete(itemToDelete); setIsDeleteOpen(false)}} message={`Êtes-vous sûr de vouloir supprimer ce ${label} ?`}/> }
                                                                        </>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : (
                            <EmptyState label={label} searchTerm={searchTerm} setSearchTerm={setSearchTerm} data={data}/>
                        )}
                        {data.length > 0 && currentItems.length > 0 && (<Pagination indexOfFirstItem={(currentPage * selectedItemPerPage) - selectedItemPerPage} indexOfLastItem={currentPage * selectedItemPerPage} currentPage={currentPage} totalItems={data.length} itemsPerPage={selectedItemPerPage} onPageChange={(pageNumber) => setCurrentPage(pageNumber)}/>)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FilteredTable;
