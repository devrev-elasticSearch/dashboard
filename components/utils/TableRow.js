"use client"
import { formatUnixTimestamp } from "./utils";
import DropdownMenu from "./DropdownMenu";
import { FaRegSadCry, FaRegSmile } from "react-icons/fa";
import { FaArrowDown, FaArrowUp, FaExclamationTriangle } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
const TableRow = ({ item, options }) => {
  if(!item) return;
  // console.log(item)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // console.log(item)
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
  // console.log(item.attributes.priority);
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
    case "Critical":
      priorityIcon = <FaExclamationTriangle className="text-red-700" />;
      priorityText = "Critical";
      break;
    default:
      priorityIcon = null;
      priorityText = "";
  }
  return (
    <>
    <tr onClick={handleRowClick} className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
        <td className="py-2 px-2 border-b border-gray-50 w-1/10">
          <span className="text-xs text-gray-600 font-medium">
            {formatUnixTimestamp(item.date, 'dd-MM-yyyy')}
          </span>
        </td>

        <td className="py-2 px-4 border-b border-gray-50 w-1/10">
          <div className="flex items-center">
            {priorityIcon}
            <span className="inline-block py-1 px-2 rounded-md text-sm">{priorityText}</span>
          </div>
        </td>

        <td className="py-2 px-4 border-b border-gray-50 w-1/10">
          <div className="flex items-center">
            {sentimentIcon}
            <span className="inline-block py-1 px-2 rounded-md text-sm">{sentimentText}</span>
          </div>
        </td>

        <td className="py-2 px-4 border-b border-gray-50 w-1/4">
          <div className="flex flex-wrap gap-1">
            {item.attributes.keywords.map((keyword, index) => (
              <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md text-sm">{keyword}</span>
            ))}
          </div>
        </td>

        <td className="py-2 px-4 border-b border-gray-50">
          <div className="flex flex-wrap gap-1">
            {item.attributes.first_order_labels.map((label, index) => (
              <span key={index} className="bg-green-200 text-green-800 px-2 py-1 rounded-md text-sm">{label}</span>
            ))}
          </div>
        </td>

        <td className="py-2 px-4 border-b border-gray-50">
          <div className="flex flex-col gap-1">
            {/* {Object.keys(item.attributes.second_order_labels).map((key) => (
              <span key={key} className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md text-sm">
                <strong>{key}:</strong> {item.attributes.second_order_labels[key].join(", ")}
              </span>
            ))} */}
            {item.attributes.second_order_label_to_keywordlist.map((label, index) => (
    <span key={index} className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md text-sm">
        <strong>{label.name}:</strong> {label.keywords.join(", ")}
    </span>
))}
          </div>
        </td>

        
      </tr>
      <Modal isOpen={isModalOpen} closeModal={closeModal} item={item} />
    </>
  );
};

export default TableRow;