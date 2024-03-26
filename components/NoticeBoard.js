"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoadingScreen from "./utils/LoadingScreen"; // Import the LoadingScreen component
const HighLevelDiagramPlaceholder = () => {
  return (
    <div className="bg-gray-200 rounded-md p-4">
      <p className="text-gray-600 mb-4">Check out the project HLD here</p>
      <img
        src="https://assets.devfolio.co/hackathons/13c95f978203433d8f81a7c73bcb03e0/projects/c97d124263954539a026cbe48219133a/acfb7ce7-fdee-46d9-a701-46b25543454d.jpeg"
        alt="Diagram 1"
        className="mb-4"
      />
      <img
        src="https://assets.devfolio.co/hackathons/13c95f978203433d8f81a7c73bcb03e0/projects/c97d124263954539a026cbe48219133a/86e75810-312b-4fbc-9631-c94543c88d03.png"
        alt="Diagram 2"
      />
    </div>
  );
};

const NoticeBoard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <LoadingScreen />}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Uh oh! Credits Exhausted!
        </h1>

        <div className="mt-8">
          <p className="text-red-500 mb-4 text-center">
            Notice: The registration pipeline might not work now as we have
            exhausted our ES Server credits. However, you can check the demo
            video on YouTube{" "}
            <div className="video-container mb-4">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/65YMlOO90fU"
      title="Demo Video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
    Additionally, you can view our project on Devfolio
    <a href="https://devfolio.co/projects/ticketinsiteai-fb2c" className="ml-2 text-blue-500 hover:text-blue-700 underline" target="new">
      <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded-md ">
        View
      </button>
    </a>
            
          </p>
          <div className="flex justify-center mb-8 space-x-4">
            <HighLevelDiagramPlaceholder />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeBoard;
