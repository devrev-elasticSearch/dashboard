"use client";
import Stats2 from "@/components/Stats2";
import TableCard from "@/components/TableCard";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/utils/LoadingScreen";
import axios from 'axios';
import GraphComponent from "@/components/GraphComponent";
import { formatUnixTimestamp, getPriorData, getSentData } from "@/components/utils/utils";
import UsersTable from "@/components/UsersTable";
import ComparativeComponent from "@/components/ComparativeComponent";
import Header from "@/components/Header";
import Navbar from "@/components/utils/Navbar";
import CardComponent from "@/components/utils/CardComponent";
import SuggestedComponents from "@/components/SuggestedComponents";

export default function Home({ params }) {
    const [selectedIssues,setSelectedIssues]=useState([])
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sentimentData, setSentimentData] = useState(null);
    const [priorityData, setPriorityData] = useState(null);
    const [firstOrderListData, setFirstOrderListData] = useState(null);
    const [firstOrderList, setFirstOrderList] = useState(null);
    const [origData,setOrigData]=useState(null);
    const [dateRange, setDateRange] = useState({ start: null, end: null });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestBody = {
                    "app_name": decodeURIComponent(params.appName)
                };
          
                const response = await axios.post(
                    process.env.NEXT_PUBLIC_APP_ALL_URL, 
                    requestBody
                );

                setOrigData(response.data)
                setLoading(false); // Move setLoading inside try block to ensure it runs after data is fetched
                
                // console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); // Ensure setLoading is called in case of error
            }
        };
        
        const fetchFirstOrderList = async () => {
            try {
                const requestBody = {
                    "app_name": decodeURIComponent(params.appName)
                };
          
                const response = await axios.post(
                    process.env.NEXT_PUBLIC_APP_FIRST_URL, 
                    requestBody
                );
                setFirstOrderList(response.data);
                setSelectedIssues(response.data);
            } catch (error) {
                console.error("Error fetching first order list:", error);
            }
        }

        fetchData();
        fetchFirstOrderList();
    }, [params.appName]);
    useEffect(() => {
    //   const filteredData=//filter from data here+
    }, [selectedIssues])
    // console.log(data)
    // console.log(origData)
    useEffect(() => {
        if (origData && firstOrderList) {
            let filteredDataWithSelectedIssues;
            if (selectedIssues.length === 0) {
                filteredDataWithSelectedIssues = origData;
            } else {
                const selectedIssuesSet = new Set(selectedIssues);
                filteredDataWithSelectedIssues = origData.filter(entry => {
                    return entry.attributes.first_order_labels.some(label => selectedIssuesSet.has(label));
                });
            }
        
            const filteredData = filteredDataWithSelectedIssues.filter(entry => {
                const timestamp = entry.date;
                return timestamp >= dateRange.start && timestamp <= dateRange.end;
            });
            setData(filteredData);
            const sentData = getSentData(filteredData);
            const priorData = getPriorData(filteredData); 
            const firstData = {};
            
            
            firstOrderList.forEach(label => {
                firstData[label] = 0;
            });
            filteredData.forEach(entry => {
                entry.attributes.first_order_labels.forEach(label => {
                    if (firstData.hasOwnProperty(label)) {
                        firstData[label]++;
                    }
                });
            });
            
            setSentimentData({
                type: "sentiment",
                fields: ["Positive", "Negative","Neutral"],
                data: sentData
            });
            
            setPriorityData({
                type: "priority",
                fields: ["Critical", "High", "Moderate", "Low"],
                data: priorData
            });
            
            setFirstOrderListData({ data: firstData });

        }
    }, [origData, firstOrderList, dateRange,selectedIssues]);

    useEffect(() => {
        if (origData) {
            
            const currentDate = new Date();
            const startDate = new Date();
            startDate.setDate(currentDate.getDate() - 30);
            setDateRange({
                start: startDate.getTime()/1000, // Converting to Unix timestamp
                end: currentDate.getTime()/1000 // Converting to Unix timestamp
            });
        }
    }, [origData]);
    const handleDateRangeChange = (start, end) => {
        setDateRange({ start, end });
    };

    const handleSelectedIssuesChange = (selected) => {
        setSelectedIssues(selected);
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
            
  {loading ? (
    <LoadingScreen />
  ) : (
    <div className="container mx-auto px-4">
      <Navbar />
      <Header
        appName={decodeURIComponent(params.appName)}
        handleDateRangeChange={handleDateRangeChange}
        dateRange={dateRange}
        firstOrderList={firstOrderList}
        handleSelectedIssuesChange={handleSelectedIssuesChange}
      />
      {data && data.length === 0 ? (
  <div className="text-center bg-white">
    <h1 className="text-3xl font-bold text-red-500">No Data Found.</h1>
    <p className="text-lg mt-2">You need to add the app_name to your snap-in to get data</p>
    <p className="text-lg mt-2">
      Read Docs <a className="text-blue-500 hover:underline" href="https://github.com/devrev-elasticSearch/snapins">here</a>
    </p>
  </div>
) : (
    <div>
      <TableCard data={data} firstOrderList={firstOrderList} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <GraphComponent title="Sentiment Overview" data={sentimentData} />
        <GraphComponent title="Priority Overview" data={priorityData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 mb-6">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
          <ComparativeComponent initialData={origData} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
          <UsersTable data={firstOrderListData} />
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
          <SuggestedComponents />
        </div>
      </div>
    </div>
  )}
      

      
    </div>
  )}
</div>
    );
}