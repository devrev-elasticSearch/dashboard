import {DateRangeSelector2} from "./utils/DateSelector"
import DropdownMenu from "./utils/DropdownMenu";
import Navbar from "./utils/Navbar"
import { formatUnixTimestamp } from "./utils/utils"
import {DropdownWithCheckboxes} from "./utils/DropdownClick";
const Header = (props) => {
  if(!props.dateRange) return;
  
  return (
    <header className="border-b border-gray-200 bg-white ">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    {/* Channel and date section */}
    <div className="flex items-center space-x-4">
      <div className="text-gray-700">
        <h1 className="text-xl font-bold">{props.appName}</h1>
        <p className="text-sm">
          {formatUnixTimestamp(props.dateRange.start).split(" ")[0]} - {formatUnixTimestamp(props.dateRange.end).split(" ")[0]}
        </p>
      </div>
      {/* Date selector here */}
      <DateRangeSelector2
        text="Change Date Range"
        fromDate={props.dateRange.start}
        toDate={props.dateRange.end}
        onDateChange={props.handleDateRangeChange}
        className="text-gray-700 dark:text-gray-300" // Ensure consistent text color
      />
    </div>

    {/* Advanced mode button and user menu */}
    <div className="flex items-center space-x-4">
      <div className="relative inline-block text-left">
        <DropdownMenu options={props.firstOrderList} onChange={props.handleSelectedIssuesChange} />
        <div className="absolute right-0 z-4 hidden transform translate-y-1 shadow-lg sm:block">
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