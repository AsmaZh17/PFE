/* eslint-disable react/prop-types */
import { CgClose } from "react-icons/cg";

const DeleteModal = ({ isOpen, onClose, onConfirm, message, header }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed z-50 w-full h-full inset-0 flex items-center justify-center bg-contentLight dark:bg-customDark ${header ? "bg-opacity-80 dark:bg-opacity-80" : "bg-opacity-25 dark:bg-opacity-30"}`}>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-customLight dark:bg-customDark rounded-md shadow-[0px_0px_8px_0px] shadow-gray-200 dark:shadow-borderGrayDark">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 end-2.5 text-gray-500 dark:text-gray-200 hover:bg-bgLight hover:dark:bg-bgDark hover:text-purpleLight dark:hover:text-purpleLight rounded-md w-8 h-8 inline-flex justify-center items-center"
          >
            <CgClose size={20} />
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-500 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-200">
              {message || "Are you sure you want to delete this item?"}
            </h3>
            <button
              onClick={onConfirm}
              type="button"
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-0 rounded-md px-5 py-2.5"
            >
              Yes, I&apos;m sure
            </button>
            <button
              onClick={onClose}
              type="button"
              className="py-2.5 px-5 ms-3 text-gray-500 dark:text-gray-200 rounded-md border border-gray-500 dark:border-gray-200 focus:ring-0"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
