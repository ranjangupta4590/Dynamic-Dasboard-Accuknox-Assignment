import CSPM_Dashboard from "@/components/CSPM";
import CWPP_Dashboard from "@/components/CWPP";
import Navbar2 from "@/components/Navbar2";
import Registry from "@/components/Registry";


const Dashboard = () => {
  return (
    <div className="w-full mx-9 mt-7 mb-7">
      <div className="w-full"><Navbar2/></div>
      
      <div className="grid mt-3">
        <div className="">
          <CSPM_Dashboard/>
        </div>
        <div className="">
          <CWPP_Dashboard/>
        </div>
        <div className="">
          <Registry/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;