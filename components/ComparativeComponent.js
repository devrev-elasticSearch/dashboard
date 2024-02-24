"use client"
import { useState } from "react";
import {DateRangeSelector} from "./utils/DateSelector";
import Histogram from "./utils/Histogram";
const ComparativeComponent = ({ initialData }) => {
  
    if(!initialData) return;
    // console.log(initialData)
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [filteredData, setFilteredData] = useState([]);
  
    const handleFromDateChange = (date) => {
      setFromDate(date);
    };
  
    const handleToDateChange = (date) => {
      setToDate(date);
    };
    const handleAddDateRange = () => {
    const filtered = initialData.filter(entry => {
        const entryDate = entry.date * 1000; // Assuming date is stored as Unix timestamp
    //     console.log(new Date(fromDate).getTime());
    // console.log(entryDate);
    // console.log(new Date(toDate).getTime());
        return entryDate >= new Date(fromDate).getTime() && entryDate <= new Date(toDate).getTime();
    });
    
    // Specify date range along with the filtered data
    const filteredWithDateRange = [{
        dateRange: { fromDate, toDate },
        filtered:filtered
    }];

    // Append new filtered data to existing filtered data
    setFilteredData(prevFilteredData => [...prevFilteredData, ...filteredWithDateRange]);
    // console.log(filteredWithDateRange)
}
    return (
      <div>
        <h2> Comparative Analysis on Time Frame</h2>
        
        <DateRangeSelector
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={handleFromDateChange}
          onToDateChange={handleToDateChange}
          onAddDateRange={handleAddDateRange}
        />
        <Histogram data={filteredData} />
      </div>
    );
}

export default ComparativeComponent