import { formatUnixTimestamp } from "./utils"


const CardComponent = ({date,text,title}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
    <div className="px-2 py-0">
      <div className="font-bold text-base mb-2 mx-2">{title}</div>
      <p className="text-gray-700 text-sm">
        {text}
      </p>
    </div>
    <div className="px-2 pt-4 pb-1">
      <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-xs font-semibold text-gray-700 mr-2">{formatUnixTimestamp(date).split(" ")[0]}</span>
      {/* Additional tags can be added here if needed */}
    </div>
  </div>
  )
}

export default CardComponent