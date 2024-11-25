import { RxDashboard } from "react-icons/rx";
import { FiFileText } from "react-icons/fi";
import { FiFilePlus } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { RiFileList3Line } from "react-icons/ri";
import { BsBagPlus } from "react-icons/bs";

// Sidenav Items
const sideNavItems = [
    {
        name: 'Dashboard', icon: <RxDashboard />, link: '/dashboard'
    },
    {
        name: 'Report', icon: <FiFileText />, link: '#'
    },
    {
        name: 'Add Invoice', icon: <FiFilePlus />, link: '#'
    },
    {
        name: 'Add User', icon: <LuUsers />, link: '#'
    },
    {
        name: 'Without PO', icon: < RiFileList3Line/>, link: '#'
    },
    {
        name: 'Company', icon: <BsBagPlus />, link: '#'
    }
]

const Sidebar = () => {
  return (
    <div className="bg-white fixed top-1/2 left-0 transform -translate-y-1/2 w-15 rounded  text-white h-auto  flex flex-col items-start space-y-2 ">
        
        
        {sideNavItems.map((item, index) => (
            <div key={index} href={item.link} className={`flex items-center rounded w-full flex-col py-[7px] group
                ${
                    index === 0
                      ? 'bg-blue-950 text-white'  // Dark blue for the first item
                      : 'hover:bg-gray-300 text-black'  // Default hover effect
                  }`}>
                {/* Icon */}
                <div className="text-xl">{item.icon}</div>
                {/* Name */}
                <span className="text-[10px] px-[4px] py-[2px]">{item.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Sidebar;
