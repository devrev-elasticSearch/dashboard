
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
