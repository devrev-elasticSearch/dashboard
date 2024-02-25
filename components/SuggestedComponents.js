"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import CardComponent from "./utils/CardComponent";

const SuggestedComponents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(process.env.NEXT_PUBLIC_APP_FEATURES_URL, { app_name: "Hey" });
        // Create a map to store unique items based on date
        const uniqueDataMap = new Map();
        response.data.forEach(item => {
          uniqueDataMap.set(item.date, item);
        });
        // Convert map values to an array
        const uniqueDataArray = Array.from(uniqueDataMap.values());
        setData(uniqueDataArray.slice(0, 4));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative min-w-0 lg:mb-0  bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
  <div className="text-xl font-semibold py-4 px-6">Suggested Features Based On Similar Apps</div>
  <div className="grid grid-cols-1 md:grid-cols-2  p-2">
    {data.map((item, index) => (
      <CardComponent key={index} date={item.date} text={item.text} title={item.title} />
    ))}
  </div>
</div>
  );
};

export default SuggestedComponents;