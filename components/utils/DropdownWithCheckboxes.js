"use client"
import React, { useState } from 'react';

const DropdownWithCheckboxes = ({ firstOrderList }) => {
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleCheckboxChange = (label) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter((selectedLabel) => selectedLabel !== label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center border rounded py-2 px-4 bg-white">
        {selectedLabels.map((label) => (
          <span key={label} className="mr-2">
            {label}
          </span>
        ))}
      </div>
      <svg
        className="absolute right-0 top-0 mt-6 mr-4 pointer-events-none"
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute top-10 left-0 right-0 bg-white border border-gray-300 rounded mt-1">
        {firstOrderList.map((label) => (
          <label key={label} className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
            <input
              type="checkbox"
              value={label}
              checked={selectedLabels.includes(label)}
              onChange={() => handleCheckboxChange(label)}
              className="mr-2"
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default DropdownWithCheckboxes;