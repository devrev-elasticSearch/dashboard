import { dateToUnixSeconds, formatUnixTimestamp } from "./utils";

export const DateRangeSelector = ({ fromDate, toDate, onFromDateChange, onToDateChange, onAddDateRange,text }) => {
    return (
      <div className="flex items-center space-x-2">
        <input 
          type="date" 
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          value={fromDate} 
          onChange={(e) => onFromDateChange(e.target.value)} 
        />
        <span className="text-gray-500">to</span>
        <input 
          type="date" 
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          value={toDate} 
          onChange={(e) => onToDateChange(e.target.value)} 
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={onAddDateRange}
        >
          {text}
        </button>
      </div>
    );
  };
  
export const DateRangeSelector2 = ({ fromDate, toDate, onDateChange, onAddDateRange,text }) => {
    return (
      <div className="flex items-center space-x-2">
        <input 
          type="date" 
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          value={formatUnixTimestamp( fromDate,'yyyy-MM-dd')} 
          onChange={(e) =>  onDateChange(dateToUnixSeconds(e.target.value), toDate)}
        />
        <span className="text-gray-500">to</span>
        <input 
          type="date" 
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          value={formatUnixTimestamp( toDate,'yyyy-MM-dd').split(" ")[0]} 
          onChange={(e) =>  onDateChange(fromDate, dateToUnixSeconds(e.target.value))}
        />
        {/* <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={onAddDateRange}
        >
          {text}
        </button> */}
      </div>
    );
  };