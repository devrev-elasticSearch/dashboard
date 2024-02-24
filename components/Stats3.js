import UsersTable from "./UsersTable"
import TableCard from "./TableCard"


const Stats3 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <UsersTable/>
        
        <TableCard title="Who cares"/>
        </div>
  )
}

export default Stats3