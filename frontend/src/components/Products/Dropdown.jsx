/* eslint-disable react/prop-types */

const Dropdown = ({ isOpen, toggleOpen }) => {
  return (
    <div>
      <div className="relative">
        <input readOnly onClick={toggleOpen} value="Filtres" className="block w-full py-1.5 pr-5 dark:bg-contentDark text-gray-700 dark:text-gray-300 border border-borderGrayLight dark:border-borderGrayDark rounded-md placeholder-gray-400/70 pl-11 focus:border-purpleLight focus:dark:border-borderDark focus:ring-2 focus:ring-bgLight focus:dark:ring-bgDark focus-visible:outline-none" />
        {isOpen && (
          <div className="absolute mt-1 z-10 w-full bg-customLight dark:bg-contentDark border border-gray-300 dark:border-purpleLight rounded-md shadow-lg">
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
