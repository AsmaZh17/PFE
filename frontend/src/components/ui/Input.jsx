/* eslint-disable react/prop-types */

const Input = ({type = "text", name, value, onChange, onClick, placeholder = "", width = "", required = false, readOnly = false}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
      className={`mt-1 px-4 py-2 text-gray-700 dark:text-grayDark dark:bg-contentDark focus:outline-none rounded-md border border-gray-300 dark:border-borderDark placeholder:text-gray-300 dark:placeholder:text-grayDark ${width ? width : "w-full"} ${onClick ? "cursor-pointer" : ""}`}
      required={required}
      readOnly={readOnly}
    />
  );
};

export default Input;
