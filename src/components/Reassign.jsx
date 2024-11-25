import React, {useState} from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { IoIosContact } from "react-icons/io";

const Reassign = ({handle}) => {
    const [open, setOpen] = useState(true)
  
  
    const data = [
        {name : "User Name 1",
          icon: <IoIosContact />
        },
        {name : "User Name 2",
            icon: <IoIosContact />
          },
          {name : "User Name 3",
            icon: <IoIosContact />
          },
          {name : "User Name 4",
            icon: <IoIosContact />
          },
          {name : "User Name 5",
            icon: <IoIosContact />
          },
          {name : "User Name 6",
            icon: <IoIosContact />
          },
          {name : "User Name 7",
            icon: <IoIosContact />
          },
          {name : "User Name 8",
            icon: <IoIosContact />
          },

    ]

  return (
    <>
    {handle && open && <div className='fixed top-[60px] right-0 w-[341px] h-[708px] bg-[#F9FAFC] opacity-100 z-[999]'>

     <div className='flex  justify-between items-center p-3'>
        
        <h2 className="text-[18px] font-bold mb-2 ">Add Queue</h2>
        <div className='flex items-center'>
          <IoCloseSharp  className='mx-3 text-xl cursor-pointer'
          />
        </div>
    </div>

        <div className='p-3 flex flex-col'>
            <span className='text-[13px] mb-2'>Label</span>
            <select name="" id="" className='w-[150px] outline-none'>
                <option value="">Level 1</option>
                <option value="" selected>Level 2</option>
                <option value="">Level 3</option>
                <option value="">Level 4</option>
            </select>
        </div>

        <div className='mt-3 mx-5 flex flex-col gap-6'>
            { data.map((item) => (
               <div key={item} className='flex items-center gap-3 text-[18px]'>
                  {item.icon} 
                  {item.name}
               </div>
            ))}

        </div>

        <div className='flex gap-2 mt-12 ml-5'>
                <button type='button' className='w-[95px] h-[34px]  bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
                onClick={()=> setOpen(false)}>
                Cancel
             </button>
             <button type='button' className='w-[95px] h-[34px] bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
              onClick={()=> setOpen(false)}>
                Send
             </button>
                </div>
    

    </div>}</>
  )
}

export default Reassign