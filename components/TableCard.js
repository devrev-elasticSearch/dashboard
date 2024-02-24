"use client";
import DropdownMenu from "./utils/DropdownMenu";
import DropdownWithCheckboxes from "./utils/DropdownWithCheckboxes";
import TableRow from "./utils/TableRow";
import { useState, useEffect } from "react";
const TableCard = ({ appName, data,firstOrderList }) => {
  if (!data) return;
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortedData, setSortedData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change the number of items per page as needed
  const tableOptions = ["Profile", "Settings", "Logout"];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleSort = (column) => {
    // If the same column is clicked again, toggle sort direction
    if (column === sortedColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // If a new column is clicked, set it as the sorted column and default sort direction to ascending
      setSortedColumn(column);
      setSortDirection("asc");
    }
    if (column == "sentiment") {
      const sorted = [...sortedData].sort((a, b) => {
        // Modify this comparison logic based on your column data structure
        const valueA = a["attributes"][column];
        const valueB = b["attributes"][column];
        return sortDirection === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      });
      setSortedData(sorted);
    } else if (column == "priority") {
      const sortOrder = { Low: 1, Moderate: 2, High: 3, Severe: 4 };

      const sorted = [...sortedData].sort((a, b) => {
        const valueA = sortOrder[a["attributes"][column]];
        const valueB = sortOrder[b["attributes"][column]];
        console.log(valueA)
        console.log(a["attributes"][column])
        if (valueA < valueB) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortDirection === "asc" ? 1 : -1;
        }
      });
      setSortedData(sorted);
    } else {
      const sorted = [...sortedData].sort((a, b) => {
        // Modify this comparison logic based on your column data structure
        const valueA = a[column];
        const valueB = b[column];
        return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
      });
      setSortedData(sorted);
    }
  };
  useEffect(() => {
    setSortedData(data);
  }, [data]);
  useEffect(() => {
    setCurrentPage(1)
  }, [data]);
  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="overflow-hidden">
        <table className="w-full min-w-[540px]">
          <thead>
            <tr>
              <th
                className="py-2 px-4 border-b border-b-gray-50 cursor-pointer"
                onClick={() => handleSort("date")} // Add onClick handler for sorting by date
              >
                Date
                {/* Add sort icon based on sorting direction */}
                {sortedColumn === "date" && (
                  <span className="ml-1">
                    {sortDirection === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </th>
              <th
                className="py-2 px-4 border-b border-b-gray-50 cursor-pointer"
                onClick={() => handleSort("priority")} // Add onClick handler for sorting by priority
              >
                Priority
                {/* Add sort icon based on sorting direction */}
                {sortedColumn === "priority" && (
                  <span className="ml-1">
                    {sortDirection === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </th>
              <th
                className="py-2 px-4 border-b border-b-gray-50 cursor-pointer"
                onClick={() => handleSort("sentiment")} // Add onClick handler for sorting by priority
              >
                Sentiment
                {sortedColumn === "sentiment" && (
                  <span className="ml-1">
                    {sortDirection === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </th>
              {/* <th className="py-2 px-4 border-b border-b-gray-50">Sentiment</th> */}
              <th className="py-2 px-4 border-b border-b-gray-50">Keywords</th>
              <th className="py-2 px-4 border-b border-b-gray-50" onClick={toggleDropdown}>
                <div className="flex">
                First Order List</div>
              </th>
              <th className="py-2 px-4 border-b border-b-gray-50">
                Second Order Labels
              </th>
              <th className="py-2 px-4 border-b border-b-gray-50">Action</th>
            </tr>
          </thead>
          <tbody>
  {currentItems &&
    currentItems.map((item, index) => (
      <TableRow
        key={index}
        item={item}
        options={tableOptions}
        onSort={handleSort}
      />
    ))}
</tbody>
        </table>
        {/* Pagination */}
      <div className="flex justify-end mt-4">
        <ul className="flex border border-gray-300 rounded-md">
          {Array(Math.ceil(sortedData.length / itemsPerPage))
            .fill()
            .map((_, index) => (
              <li
                key={index}
                className={`cursor-pointer py-2 px-4 ${
                  index + 1 === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </div>
    </div>
      </div>
  );
};

export default TableCard;
