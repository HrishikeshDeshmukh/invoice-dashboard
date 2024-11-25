import { LiaRupeeSignSolid } from "react-icons/lia";
import { useNavigate } from "react-router";

const Card = ({ name, icon, total, rupees, link }) => {

  const navigate = useNavigate();

  // Handle the click event
  const handleClick = () => {
    navigate(link); // Navigate to the link route
  };
  return (
  
    <div className="w-[280px] h-[120px] bg-white shadow-sm rounded-lg m-1 cursor-pointer z-10" key={name}
    onClick={handleClick}>
      <div className="flex items-center mt-4 px-4">
        {/* Ensure icon is rendered correctly */}
        <div className="mx-2 ">
        <img src={icon} alt={name} className="w-6 h-6" /> 
        </div>
        <span className="text-left text-[16px] font-bold leading-[24px] text-[#2B2B2B] tracking-normal">{name}</span>
      </div>

      <div className="ml-[50px] mt-2">
        <span className="text-[14px] text-[rgba(77,_80,_97,_1)] mr-[12px]">Total</span>
        <span className="text-[18px]  text-[rgba(31,_36,_57,_1)]">{total}</span>
      </div>

      <div className="flex items-center ml-[50px] mt-2" >
        <LiaRupeeSignSolid className="text-[14px] text-[rgba(77,_80,_97,_1)] mr-[30px]" />
        <span className="text-[18px] text-[rgba(31,_36,_57,_1)]">{rupees}</span>
      </div>
    </div>
    
  );
};

export default Card;
