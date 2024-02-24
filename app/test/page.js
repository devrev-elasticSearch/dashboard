import ContentCard from "@/components/ContentCard";
import Header from "@/components/Header";
import OverviewCard from "@/components/OverviewCard";
import Stats from "@/components/Stats";
import Stats2 from "@/components/Stats2";
import Stats3 from "@/components/Stats3";
import Sidebar from "@/components/utils/Sidebar";

export default function Home() {
    return (
      <div className="container mx-auto px-4">
        {/* <Sidebar/> */}
        <Header/>
        <OverviewCard/>
        <ContentCard/>
        <div className="p-6">
        <Stats/>
        <Stats2/>
        <Stats3/>
        </div>
      </div>
    );
  }