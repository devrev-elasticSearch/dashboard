
import StatCard from './utils/StatCard';

const GridComponent = ({ data }) => {
    // console.log(data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {data.map((item, index) => (
        
        <StatCard key={index} title={item.title} number={item.number} link={item.link} />
      ))}
    </div>
  );
};

export default GridComponent;