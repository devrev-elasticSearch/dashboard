const UserTableRow = ({ role, amount, totalSum}) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const color=getRandomColor();
  const barColor = `${color}-500`;
  const percentage = totalSum !== 0 ? ((amount / totalSum) * 100).toFixed(2) + "%" : "0%";
    return (
      <tr className="text-gray-700 dark:text-gray-100">
  <th className="border-t-0 px-4 py-2 border-l-0 border-r-0 text-xs whitespace-nowrap text-left w-1/2">
    <span className="text-xs truncate">{role.slice(0, 50)}</span>
  </th>
  <td className="border-t-0 px-4 py-2 border-l-0 border-r-0 text-xs whitespace-nowrap w-1/4">
    {amount}
  </td>
  <td className="border-t-0 px-4 py-2 border-l-0 border-r-0 text-xs whitespace-nowrap w-1/4">
    <div className="flex items-center">
      <span className="mr-2">{percentage}</span>
      <div className="relative w-full">
        <div className={`overflow-hidden h-2 text-xs flex rounded`} style={{ width: percentage, backgroundColor: color }}>
          <div style={{ width: percentage }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${barColor}`}></div>
        </div>
      </div>
    </div>
  </td>
</tr>
    );
  };

export default UserTableRow