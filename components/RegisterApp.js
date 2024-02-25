"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import LoadingScreen from './utils/LoadingScreen'; // Import the LoadingScreen component

const RegisterApp = () => {
  const [loading, setLoading] = useState(false); // State variable for loading status
  const [appName, setAppName] = useState('');
  const [appId, setAppId] = useState('');
  const [appData, setAppData] = useState({});
  const [firstOrderLabels, setFirstOrderLabels] = useState([]);
  const router = useRouter();

  const handleRegister = async () => {
    setLoading(true); // Set loading to true when registering
    try {
      // Make post axios call with app name and app id
      const response = await axios.post('http://127.0.0.1:8000/api/app/appmodel/getdata', {
        app_name: appName,
        app_id: appId,
      });

      // Extract first order labels from the response
      setAppData(response.data);
      setFirstOrderLabels(response.data.first_order_labels);
      // Navigate to another route to show success
      console.log(response.data);
    } catch (error) {
      console.error('Error registering app:', error);
      // Handle error, show error message, etc.
    } finally {
      setLoading(false); // Set loading back to false when registration process completes
    }
  };

  const handleSave = async () => {
    try {
      // Make post request with updated data
      console.log(firstOrderLabels)
      console.log(appData)
      const response = await axios.post('http://127.0.0.1:8000/api/app/appmodel/insert', {
        ...appData,
        first_order_labels: firstOrderLabels,
      });
      console.log(response);
      console.log('Updated data sent successfully:', response.data);
      router('/');
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle error, show error message, etc.
    }
  };

  const handleLabelNameChange = (index, newName) => {
    const updatedLabels = [...firstOrderLabels];
    updatedLabels[index].name = newName;
    setFirstOrderLabels(updatedLabels);
  };

  return (
    <>
      {loading && <LoadingScreen />} {/* Display LoadingScreen component when loading is true */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Register New App</h1>
        <div className="mb-4">
          <label htmlFor="appName" className="block font-medium">App Name:</label>
          <input
            type="text"
            id="appName"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="appId" className="block font-medium">App ID:</label>
          <input
            type="text"
            id="appId"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={appId}
            onChange={(e) => setAppId(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
          onClick={handleRegister}
        >
          Register
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={handleSave}
        >
          Save
        </button>

        {/* Display first order labels for editing */}
        <div className="mt-8">
  {firstOrderLabels.map((label, index) => (
    <div key={index} className="mb-4">
      <label className="block font-medium">Label {index + 1}:</label>
      <input
        type="text"
        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={label.name}
        onChange={(e) => handleLabelNameChange(index, e.target.value)}
      />
      <ul className="mt-2">
        <h3> Items under this label are</h3>
        {label.second_order_labels.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
      </div>
    </>
  );
};

export default RegisterApp;