import Card2 from "./utils/Card2";
import LineChart from "./utils/LineChart";

const GraphComponent = ({ title, data }) => {
  if (!data) return null;
  
  let fields = [];
  let totalCount = 0;

  if (data.type === "sentiment") {
    fields = ["Positive", "Negative", "Neutral"];
    totalCount = Object.values(data.data).reduce(
      (total, dateData) =>
        total + dateData.positive + dateData.negative + dateData.neutral,
      0
    );
  } else if (data.type === "priority") {
    fields = ["High", "Moderate", "Low", "Critical"]; // Include "Critical"
    totalCount = Object.values(data.data).reduce(
      (total, dateData) =>
        total +
        dateData.high +
        dateData.moderate +
        dateData.low +
        dateData.critical, // Add critical count
      0
    );
  }

  return (
    <div className="lg:col-span-2">
      <Card2 title={title}>
        <div className="flex">
          {fields.map((field) => (
            <div
              key={field}
              className="flex-grow rounded-md border border-dashed border-gray-200 p-4"
            >
              <div className="flex items-center mb-0.5">
                <div className="text-xl font-semibold">
                  {getCount(data, field)}
                </div>
              </div>
              <span className="text-gray-400 text-sm">{field}</span>
            </div>
          ))}
        </div>
        <div className="col-span-full">
          <LineChart data={data} />
        </div>
      </Card2>
    </div>
  );
};

// Helper function to get count based on field and data type
const getCount = (data, field) => {
  if (data.type === "sentiment") {
    return Object.values(data.data).reduce(
      (total, dateData) => total + dateData[field.toLowerCase()],
      0
    );
  } else if (data.type === "priority") {
    return Object.values(data.data).reduce(
      (total, dateData) => total + dateData[field.toLowerCase()],
      0
    );
  }
};

export default GraphComponent;