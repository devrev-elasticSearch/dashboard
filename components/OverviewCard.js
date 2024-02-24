import CardComponent from "./utils/CardComponent";

function OverviewCard({
    channelName,
    views,
    impressions,
    ctr,
    averageViewDuration,
    subscribers,
    watchTime,
    engagementRate,
    // ...other metrics
  }) {
    return (
        <div className="grid grid-cols-3 gap-4 mt-4 ">
        <div className="col-span-2 grid grid-rows-6">
          <h2 className="text-center font-bold">Your channel got no views lmao</h2>
          <div className="row-span-4">Heavy graph here</div>
          <div className="row-span-1">Heavy row</div>
          <p className="text-gray-500 text-sm">Impressions</p>
          <p className="text-base font-medium text-gray-800">{impressions}</p>
        </div>
        <div className="col-span-1">
          <CardComponent/>
        </div>
        
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">See More</button>
      </div>
    );
  }
  
export default OverviewCard