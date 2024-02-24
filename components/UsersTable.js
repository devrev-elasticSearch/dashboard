import UserTableRow from "./utils/UserTableRow";
const UsersTable = ({ data }) => {
  if (!data || !data.data) return null; // Check for empty or undefined data

  const listData = Object.entries(data.data).filter(([_, amount]) => amount !== 0);
  const totalSum = listData.reduce((acc, [_, amount]) => acc + amount, 0); // Correct way to calculate totalSum

  // Function to generate a random color
  

  return (
    <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
      <div className="rounded-t mb-0 px-0 border-0">
        <div className="flex flex-wrap items-center px-4 py-2">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
              Users
            </h3>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Role
                </th>
                <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Amount
                </th>
                <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              {listData.map(([role, amount], index) => ( // Iterate over listData
                <UserTableRow
                  key={role} // Use a unique key for each row
                  role={role}
                  amount={amount}
                  totalSum={totalSum}// Example color, you can replace it with the actual color value
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;