import Calender from "../components/Calender"
import { CiSearch } from "react-icons/ci"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";



import Table1 from "../components/Table1.jsx";

import ListofQueue from "../components/ListofQueue.jsx";

const Queue = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center">

    
       <div className="w-[85vw] h-full flex flex-col  ">
        <span className="absolute top-[69px] left-[139px] w-[258px] h-[16px] text-left font-roboto text-[#141414] opacity-100 text-[12px] flex flex-row">
        {"Dashboard > Queue"}
        </span>

        <h3 className="absolute top-[105px] left-[139px] w-[207px] h-[29px] text-left font-roboto font-bold text-[#141414] opacity-100 leading-[29px] text-[22px] tracking-normal">
        Queue
        </h3>

       <Calender />
       
    

    <div className=" absolute top-[163px] left-[127px] flex">

      <div className="w-[92px] h-[40px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.09)] rounded-md m-2 flex items-center justify-center text-[14px] text-[#002341]">Approval</div>
      <div className="w-[92px] h-[40px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.09)] rounded-md m-2 flex items-center justify-center text-[14px] text-[#002341]">Rejected</div>
      <div className="w-[92px] h-[40px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.09)] rounded-md m-2 flex items-center justify-center text-[14px] text-[#002341]">Pending</div>

    </div>


   <div className="relative flex"></div>
    <div className="absolute top-[187px] right-[387px] w-[284px] h-[32px] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.16)] border-[0.4px] border-[#E0E0E0] rounded-sm flex">
    <CiSearch className="text-[30px] pl-2 text-slate-500 cursor-pointer"  />
        <input type="text" placeholder="Search"
        className="w-full h-[30px] leading-[28px] px-4 border-2 border-transparent rounded-[16px] outline-none bg-white text-[#0d0c22] transition-all duration-300 ease-in-out"/>
        
    </div>
    
    <div className="absolute top-[187px] right-[340px] h-[32px] w-[32px] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.16)] border-[0.4px] border-[#E0E0E0] rounded-sm flex items-center justify-center">
      <HiOutlineAdjustmentsHorizontal />
    </div>

    <button type="button" className=" absolute top-[187px] right-[180px] w-[146px] h-[32px] bg-[#D5E3FF] shadow-[0px_1px_1px_rgba(0,0,0,0.17)] rounded-[4px] text-[15px]">Add new queue</button>

    <div className="relative">

     <ListofQueue />
     <Table1 />
     </div>

    </div>
    </div>

    

    </>
  )
}

export default Queue