/* eslint-disable react/prop-types */
import { CgClose } from "react-icons/cg";

const ViewModal = ({ isOpen, onClose, label, viewData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 w-full h-full inset-0 flex items-center justify-center bg-contentLight dark:bg-customDark bg-opacity-10 dark:bg-opacity-10">
      <div className="relative p-4 w-full max-w-xl max-h-full">
        <div className="relative bg-customLight dark:bg-customDark rounded-md shadow-[0px_0px_6px_0px] shadow-gray-200 dark:shadow-borderGrayDark">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-borderDark border-contentLight">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Afficher {label?.slice(0, -1)}
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-200 hover:bg-bgLight hover:dark:bg-bgDark hover:text-purpleLight dark:hover:text-purpleLight rounded-md w-8 h-8 inline-flex justify-center items-center"
            >
              <CgClose size={20} />
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4 max-h-[80vh] scrollbar overflow-y-auto">
            {viewData && Object.entries(viewData).map(([key, value]) => (
              <div key={key}>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  {key.replace(/_/g, ' ')}:
                </h4>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 break-words whitespace-pre-wrap">
                  {typeof value === "string" ? value : JSON.stringify(value, null, 2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
