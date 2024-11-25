import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";

const SendBack = ({handle}) => {

    const [open, setOpen] = useState(true)
  return (
    <>

   {handle && open && <div className='fixed top-[58px] right-[0px] w-[475px] h-[754px] bg-[#F9FAFC] opacity-100 z-[999]'>
       
       
       <div className='flex items-center text-center mt-5 '>
          <FaArrowLeftLong className='mx-3 text-medium cursor-pointer'/>
       
           <h2 className="text-[18px] font-bold ml-3 ">Send Back</h2>
        
        </div>

        <div className="flex flex-col text-left justify-center ">
            <span className="p-3">Remark</span>
            <div className=" w-full flex justify-center text-start">
            <input type="text" className="w-[415px] h-[369px] bg-white border border-[#E0E0E0] rounded-[4px] text-left" />
            </div>


            <div className='flex gap-2 mt-12 ml-2'>
                <button type='button' className='w-[95px] h-[34px]  bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
                onClick={()=> setOpen(false)}>
                Cancel
             </button>
             <button type='button' className='w-[95px] h-[34px] bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
              onClick={()=> setOpen(false)}>
                Send
             </button>
                </div>
    
        </div>
       

    </div>
}
</>

  )
}

export default SendBack