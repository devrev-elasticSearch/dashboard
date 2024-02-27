"use client"
import { useState,useEffect } from 'react';
import dynamic from 'next/dynamic'; 
import Navbar from '@/components/utils/Navbar';
import axios from 'axios';
export default function Home() {
    return (
      <div className="container mx-auto px-4">
        <Navbar />  
        <AppComparator />
      </div>
    );
  }
  const Histogram = dynamic(() => import('@/components/utils/Histogram'), { ssr: false });
  function AppComparator() {
    const [selectedApps, setSelectedApps] = useState([]);
    const [appList, setAppList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedApp, setSelectedApp] = useState('');
    const [selectedAppData,setSelectedAppData]=useState([]);
    const [data,setData]=useState([])
    const getAppData = async () => {
        console.log("called")
        setLoading(true)
        try {
          const result = [];
          for (const app of selectedApps) {
            const response = await axios.post(process.env.NEXT_PUBLIC_APP_ALL_URL, {
              app_name: app // Assuming the name of the app is stored in `name` property
            });
            result.push({ dateRange: { // Corrected syntax for dateRange object
              "fromDate": app,
              "toDate": ""
            }, filtered: response.data });
          }
          console.log(result); // You can use result as per your requirement (e.g., set it to state)
          setLoading(false)
          setData(result)
          return result;
        } catch (error) {
          console.error('Error getting app data:', error);
          setLoading(false)
          return [];
        }
        
      };
    
    const fetchApps = async () => {
      try {
        setLoading(true);
        const response = await axios.get(process.env.NEXT_PUBLIC_APP_NAME_URL);
        setAppList(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching app list:', error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchApps();
    }, []);
    useEffect(() => {
      console.log(appList)
    
      
    }, [appList])
    
    const addApp = () => {
      setSelectedApps(prevSelectedApps => [...prevSelectedApps, selectedApp]);
      setSelectedApp('');
    }
  
    return (
        <div className="p-6">
  <h2 className="text-2xl font-bold mb-4">Comparative Analysis for Apps for the last month</h2>
  <div className="flex items-center mb-4">
    <select
      className="border border-gray-300 rounded-md mr-4 px-4 py-2 focus:outline-none focus:border-blue-500"
      value={selectedApp}
      onChange={(e) => setSelectedApp(e.target.value)}
    >
      <option value="">Select an app</option>
      {appList.map((app) => (
        <option key={app.id} value={app}>
          {app}
        </option>
      ))}
    </select>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
      onClick={addApp}
      disabled={loading || !selectedApp}
    >
      {loading ? 'Loading...' : 'Load App'}
    </button>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mx-4"
      onClick={getAppData}
      disabled={loading || selectedApps.length === 0}
    >
      {loading ? 'Loading...' : 'Get Data'}
    </button>
  </div>
  {selectedApps.map((app, index) => (
    <div key={index} className="mb-4">
    <h3 className="text-xl font-semibold mb-2">{app}</h3>
    {/* Ensure that 'app' object contains necessary properties like 'name' */}
    {/* Only render Histogram component in the browser environment */}
    {typeof window !== 'undefined' && <Histogram data={data} />}
  </div>
  ))}
  {/* Render Histogram for 'data' */}
  {data.length !== 0 && <Histogram data={data} />}
</div>
    );
  }