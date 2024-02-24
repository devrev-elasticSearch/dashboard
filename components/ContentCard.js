import CardComponent from "./utils/CardComponent"

const ContentCard = () => {
  return (
    <div className="grid grid-cols-6">
        <div className="col-span-4"><CardComponent/>
        <CardComponent/></div>
        <div className="col-span-2"><CardComponent/>
    </div></div>
        
        
  )
}

export default ContentCard