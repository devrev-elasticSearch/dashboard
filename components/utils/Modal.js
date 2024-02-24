"use client"
import React from "react";
import { formatUnixTimestamp } from "./utils";
const Modal = ({ isOpen, closeModal, item }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md max-w-md">
        {/* Content of the modal */}
        <h2 className="text-xl font-bold mb-4">{item.app_name}</h2>
        <p>Date: {formatUnixTimestamp(item.date, "dd-MM-yyyy")}</p>
        <p>Priority: {item.attributes.priority}</p>
        <p>Sentiment: {item.attributes.sentiment}</p>
        <p>Main Text:{item.main_text}</p>
        <button onClick={closeModal} className="mt-4 bg-gray-300 px-4 py-2 rounded-md">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;