import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between p-3 bg-white drop-shadow-[0px_1px_1px_#00000029] space-x-6 z-50">
        <div className="flex items-center">
       <IoMenu className="text-[30px] pl-2 text-[#0d0c22] cursor-pointer" />
       <span className="text-[#0d0c22] px-3 text-[18px] font-semibold">Logo</span>
       </div>

       <div className="flex items-center relative w-[450px] border-2 rounded-[8px]">
        <CiSearch className="text-[30px] pl-2 text-slate-500 cursor-pointer"  />
        <input type="text" placeholder="Search"
        className="w-full h-[30px] leading-[28px] px-4 border-2 border-transparent rounded-[16px] outline-none bg-white text-[#0d0c22] transition-all duration-300 ease-in-out"/>
       </div>

       <div className="flex items-center">
        <IoIosNotificationsOutline className="text-[30px] pl-2 sm:mx-3 text-[#0d0c22] cursor-pointer relative inline-block" />
        <span className="hidden absolute top-[20px] right-[138px] w-[6px] h-[6px] bg-[#FFA741] text-white rounded-full text-xs sm:flex items-center justify-center "></span>
        <BsQuestionCircle className="text-[30px] pl-2 text-[#0d0c22] sm:mx-3 cursor-pointer" />
        <span className="rounded-full bg-cyan-950 p-2 mx-3 text-sm w-8 h-8 flex items-center font-semibold text-white justify-center">JA</span>
       </div>

    </div>
  )
}

export default Navbar