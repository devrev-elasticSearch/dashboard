import Card2 from "./utils/Card2";
import LineChart from "./utils/LineChart";

const Stats2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="lg:col-span-2"> {/* Expanded column for the "Order Statistics" card */}
        <Card2 title="Order Statistics">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="rounded-md border border-dashed border-gray-200 p-4">
              <div className="flex items-center mb-0.5">
                <div className="text-xl font-semibold">10</div>
                <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">
                  80
                </span>
              </div>
              <span className="text-gray-400 text-sm">Active</span>
            </div>
            <div className="rounded-md border border-dashed border-gray-200 p-4">
              <div className="flex items-center mb-0.5">
                <div className="text-xl font-semibold">50</div>
                <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">
                  +469
                </span>
              </div>
              <span className="text-gray-400 text-sm">Completed</span>
            </div>
            <div className="rounded-md border border-dashed border-gray-200 p-4">
              <div className="flex items-center mb-0.5">
                <div className="text-xl font-semibold">4</div>
                <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">
                  -130
                </span>
              </div>
              <span className="text-gray-400 text-sm">Canceled</span>
            </div>
          </div>
          <div className="col-span-full">
            <LineChart />
          </div>
        </Card2>
      </div>
      <div className="lg:col-span-1"> {/* Remaining column for the "Earnings" card */}
        <Card2 title="Earnings">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[460px]">
              <thead>
                <tr>
                  <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                    Source
                  </th>
                  <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                    Return
                  </th>
                  <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <div className="flex items-center">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="w-8 h-8 rounded object-cover block"
                      />
                      <a
                        href="#"
                        className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                      >
                        Loditya X Ram
                      </a>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="text-[13px] font-medium text-emerald-500">
                      +235
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                      Pending
                    </span>
                  </td>
                </tr>
                {/* More table rows can be added here */}
              </tbody>
            </table>
          </div>
        </Card2>
      </div>
    </div>
  );
};

export default Stats2;
