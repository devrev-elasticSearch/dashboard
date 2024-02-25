import {DateRangeSelector2} from "./utils/DateSelector"
import DropdownMenu from "./utils/DropdownMenu";
import Navbar from "./utils/Navbar"
import { formatUnixTimestamp } from "./utils/utils"
import {DropdownWithCheckboxes} from "./utils/DropdownClick";
const Header = (props) => {
  if(!props.dateRange) return;
  
  return (
    <header>
    <div className="flex justify-between items-center py-4 border-b border-gray-200">
      {/* Channel and date section */}
      <div className="flex items-center space-x-4">
        <img
          src="./logo.png" // Replace with your channel logo
          alt="Channel logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-gray-700">
          <h1 className="text-xl font-bold">{props.appName}</h1>
          <p className="text-sm">{formatUnixTimestamp( props.dateRange.start).split(" ")[0]} - {formatUnixTimestamp( props.dateRange.end).split(" ")[0]}</p>
        {/* Date selector here */}
        <DateRangeSelector2
              text="Change Date Range"
              fromDate={props.dateRange.start}
              toDate={props.dateRange.end}
              onDateChange={props.handleDateRangeChange}
            />
        </div>
      </div>

      {/* Advanced mode button and user menu */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Advanced Mode</button>
        <div className="relative inline-block text-left">
        <DropdownMenu options={props.firstOrderList} onChange={props.handleSelectedIssuesChange} />
          <div
            className="absolute right-0 z-10 hidden transform translate-y-1 shadow-lg sm:block"
          >
            <div className="bg-white rounded-md shadow-xs">
              <ul className="py-1" aria-labelledby="dropdownMenuButton">
                {/* Include user menu options here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </header>
  )
}

export default Header