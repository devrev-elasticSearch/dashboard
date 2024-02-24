"use client"
import { formatUnixTimestamp } from "./utils";
import DropdownMenu from "./DropdownMenu";
import { FaRegSadCry, FaRegSmile } from "react-icons/fa";
import { FaArrowDown, FaArrowUp, FaExclamationTriangle } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
const TableRow = ({ item, options }) => {
  if(!item) return;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(item)
  const sentimentClass =
    item.attributes.sentiment === "negative"
      ? "bg-red-100 text-red-700"
      : item.attributes.sentiment === "neutral"
      ? "bg-gray-100 text-gray-700"
      : "bg-green-100 text-green-700";
  const sentimentText =
    item.attributes.sentiment === "negative"
      ? "Negative"
      : item.attributes.sentiment === "neutral"
      ? "Neutral"
      : "Positive";
  const sentimentIcon =
    item.attributes.sentiment === "negative" ? (
      <FaRegSadCry className="text-red-500" />
    ) : item.attributes.sentiment === "neutral" ? (
      <FaRegSmile className="text-gray-500" />
    ) : (
      <FaRegSmile className="text-green-500" />
    );
  let priorityIcon;
  let priorityText;

  switch (item.attributes.priority) {
    case "Low":
      priorityIcon = <FaArrowDown className="text-green-500" />;
      priorityText = "Low";
      break;
    case "Moderate":
      priorityIcon = <FaArrowUp className="text-yellow-500" />;
      priorityText = "Moderate";
      break;
    case "High":
      priorityIcon = <FaExclamationTriangle className="text-red-500" />;
      priorityText = "High";
      break;
    case "Severe":
      priorityIcon = <FaExclamationTriangle className="text-red-700" />;
      priorityText = "Severe";
      break;
    default:
      priorityIcon = null;
      priorityText = "";
  }
  return (
    <>
    <tr onClick={handleRowClick}>
      
      <td className="py-2 px-4 border-b border-b-gray-50">
        <span className="text-[13px] font-medium text-gray-400">
          <span className="text-sm text-gray-600">
            {formatUnixTimestamp(item.date,'dd-MM-yyyy')}
          </span>
        </span>
      </td>

      <td className="py-2 px-4 border-b border-b-gray-50  space-x-1">
        <div className="flex items-center">
        {priorityIcon}
        <span className="inline-block py-1 px-2 rounded-md">
          {priorityText}
        </span>
        </div>
      </td>

      <td className="py-2 px-4 border-b border-b-gray-50  space-x-1">
      <div className="flex items-center">
        {sentimentIcon}
        <span className="inline-block py-1 px-2 rounded-md">
          {sentimentText}
        </span>
        </div>
      </td>
      <td className="py-2 px-4 border-b border-b-gray-50">
        <div className="flex flex-wrap gap-1">
          {item.attributes.keywords.map((keyword, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md text-sm"
            >
              {keyword}
            </span>
          ))}
        </div>
      </td>

      {/* Displaying first order labels */}
      <td className="py-2 px-4 border-b border-b-gray-50">
        <div className="flex flex-wrap gap-1">
          {item.attributes.first_order_labels.map((label, index) => (
            <span
              key={index}
              className="bg-green-200 text-green-800 px-2 py-1 rounded-md text-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </td>

      {/* Displaying second order labels */}
      <td className="py-2 px-4 border-b border-b-gray-50">
        <div className="flex flex-wrap gap-1">
          {item.attributes.second_order_labels.map((label, index) => (
            <span
              key={index}
              className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md text-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </td>

      <td className="py-2 px-4 border-b border-b-gray-50">
        {/* <DropdownMenu options={options} /> */}
      </td>
    </tr>
    <Modal isOpen={isModalOpen} closeModal={closeModal} item={item} />
    </>
  );
};

export default TableRow;