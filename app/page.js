
import Stats3 from "@/components/Stats3";
import TableCard from "@/components/TableCard";
export default function Home() {

  
  return (
    <div>
      {/* <Sidebar/> */}
      {/* <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div> */}
      
      <TableCard appName="Google Pay"/>
      <Stats3/>
    </div>
  );
}
