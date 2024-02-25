import UserTableRow from "./utils/UserTableRow";
const UsersTable = ({ data }) => {
  if (!data || !data.data) return null; // Check for empty or undefined data

  const listData = Object.entries(data.data).filter(([_, amount]) => amount !== 0);
  const totalSum = listData.reduce((acc, [_, amount]) => acc + amount, 0); // Correct way to calculate totalSum

  // Function to generate a random color
  

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 shadow-lg rounded">
  <div className="rounded-t bg-white dark:bg-gray-600 px-4 py-2">
    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
      Major Issues
    </h3>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-3 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 border border-solid border-gray-200 dark:border-gray-500 text-xs uppercase font-semibold text-left">
            Issue
          </th>
          <th className="w-1/4 px-4 py-3 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 border border-solid border-gray-200 dark:border-gray-500 text-xs uppercase font-semibold text-left">
            Frequency
          </th>
          <th className="w-1/4 px-4 py-3 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 border border-solid border-gray-200 dark:border-gray-500 text-xs uppercase font-semibold text-left">
            Percentage
          </th>
        </tr>
      </thead>
      <tbody>
        {listData.map(([role, amount], index) => (
          <UserTableRow
            key={role}
            role={role}
            amount={amount}
            totalSum={totalSum}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
};

export default UsersTable;