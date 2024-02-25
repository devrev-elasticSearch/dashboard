
import RegisterApp from "@/components/RegisterApp";
import Stats3 from "@/components/Stats3";
import TableCard from "@/components/TableCard";
import ViewApp from "@/components/ViewApp";
import Navbar from "@/components/utils/Navbar";
export default function Home() {
  
  return (
    <div className="bg-gray-100 min-h-screen">
  <Navbar />

  <div className="container mx-auto py-8 px-4">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">TicketinSite.AI</h1>
    <h2 className="text-lg text-center text-gray-600 mb-2">Turning Feedback Into Action, Effortlessly</h2>
    <h2 className="text-lg text-center text-gray-600 mb-8">Integrating VoC From Play Store and Twitter</h2>
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
      <ViewApp />
    </div>

    <div className="max-w-lg mt-6 mx-auto bg-white rounded-lg shadow-md p-6">
      <RegisterApp />
    </div>
  </div>
</div>
  );
}
