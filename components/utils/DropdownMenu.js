"use client"
import React, { useState ,useEffect} from 'react';

const DropdownMenu = ({ options,onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    onChange(selectedOptions);
}, [selectedOptions, onChange]);
  const handleCheckboxChange = (label, event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent the click event from propagating to the parent (dropdown)
    if (selectedOptions.includes(label)) {
      setSelectedOptions(selectedOptions.filter((selectedLabel) => selectedLabel !== label));
    } else {
      setSelectedOptions([...selectedOptions, label]);
    }
  };
  // useEffect(() => {
  //   console.log(selectedOptions);
  // }, [selectedOptions]);
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative z-40">
      <button
        type="button"
        onClick={toggleDropdown}
        className="dropdown-toggle flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 w-full"
      >
        <span className="mr-2">Select Major Issues here</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          className="absolute top-full left-0 w-full max-h-40 overflow-y-auto mt-1.5 shadow-md bg-white border border-gray-100 rounded-md"
        >
          {options.map((option, index) => (
            <li key={index}>
              <div
                className="flex items-center text-sm py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50 cursor-pointer"
                onClick={(event) => handleCheckboxChange(option, event)}
              >
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  className="mr-2"
                  onChange={() => {}} // Dummy onChange handler to avoid console warning
                />
                <span>{option}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;

