"use client"
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

const DropdownClick = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter(); // Initialize useRouter hook

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection (optional)
    router.push(`/${option}`); // Use router.push to navigate to the selected option route
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="dropdown-toggle flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 w-full"
      >
        <span className="mr-2">{selectedOption || "Choose App Here"}</span>
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
        <ul className="absolute top-full left-0 w-full max-h-40 overflow-y-auto mt-1.5 shadow-md bg-white border border-gray-100 rounded-md">
          {options.map((option, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownClick;