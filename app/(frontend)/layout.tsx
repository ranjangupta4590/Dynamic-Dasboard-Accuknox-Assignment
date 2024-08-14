import Navbar from "@/components/Navbar";



const DashboardLayout =async ({children}: {children: React.ReactNode}) => {

    
    return (
      <div className="relative">
        
        <main className="">
        <Navbar/>
        <div  className="flex bg-blue-200 h-full w-full">
          {children}
        </div>
        </main>
      </div>
     );
  }
   
  export default DashboardLayout;