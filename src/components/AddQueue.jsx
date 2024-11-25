import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'


const queue = [
    {item:"Processing Queue"},
    {item:"Exception Queue"},
    {item:"Duplicate Queue"},
    {item:"Missing PO Queue"},
    {item:"Receipt Hold Queue"},
    {item:"Supplier Portal Queue"},

]

const AddQueue = ({handle}) => {
  
  const [open, setOpen] = useState(true)
  
  return (
    <>
    {handle && open &&
    <div className='fixed top-[58px] right-[0px] w-[269px] h-[754px] bg-[#F9FAFC] opacity-100 z-[999]'>
    <div className='flex justify-between items-center p-3'>
        
        <h2 className="text-[18px] font-bold mb-4">Add Queue</h2>
        <div className='flex items-center'>
          <IoCloseSharp  className='mx-3 text-xl cursor-pointer'
          onClick={()=> setOpen(false)}/>
        </div>
    </div>

    <div className='flex flex-col mt-3 pl-8 gap-8 text-[14px] text-[#7C828A]'>
        {queue.map(({item}) => (
            <span key={item}>{item}</span>
        ))}
    </div>

    <div className='flex gap-2 mt-12 ml-4'>
                <button type='button' className='w-[95px] h-[34px]  bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
                onClick={()=> setOpen(false)}>
                Cancel
             </button>
             <button type='button' className='w-[95px] h-[34px] bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
              onClick={()=> setOpen(false)}>
                Done
             </button>
                </div>
    </div>}
    </>
  )
}

export default AddQueue