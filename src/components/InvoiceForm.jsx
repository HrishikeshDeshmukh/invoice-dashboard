import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { GoFileSymlinkFile } from "react-icons/go";
import AddQueue from './AddQueue';
import SendBack from './SendBack';
import Reassign from './Reassign';

const InvoiceForm = ({ data, closeForm }) => {
    const [selectedData, setSelectedData] = useState(data);
    const [openSure, setOpenSure] = useState(false);
    const [sentmsg, setSentmsg] = useState(false);
    const [closequeue, setClosequeue] = useState(false);
    const [activeModal, setActiveModal] = useState("invoice");




    const handleOpenQueue = () => {
        setActiveModal("queue");
      };
    
      const handleCloseQueue = () => {
        setActiveModal("invoice"); // Reset back to invoice modal
      };

      const handleMassage = () => {
        setActiveModal("success")
      }

      const handleSendback = () => {
        setActiveModal("sendback")
      }

      const handleReassign = () => {
        setActiveModal("reassign")
      }

    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form submitted!");
      closeForm();
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setSelectedData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    };

    return (
        <>
        {activeModal === "invoice" && (<div className="fixed top-0 right-0 w-1/3 h-full bg-[#F9FAFC] shadow-lg p-4 z-50 ">
            <div className='flex justify-between items-center'>
                
              <h2 className="text-[18px] font-bold mb-4">Invoice Details</h2>
              <div className='flex items-center'>
                <div className='w-[81px] h-[34px] bg-[#D5E3FF] shadow-sm border border-[#E0E0E0] rounded-md opacity-100 flex items-center justify-center text-[13px] cursor-pointer'
                onClick={handleReassign}>Reassign</div>
                <IoCloseSharp  className='mx-3 text-xl cursor-pointer' onClick={closeForm}/>

              </div>
          </div>
          <form onSubmit={handleSubmit}>


            <div className='flex flex-col gap-3  m-3 '>
                <span>GST No</span>
                <span>Company name</span>
                <span>Invoice No</span>
                <span>Date</span>
                <span>Order Number</span>
            </div>

            <div className='flex justify-between items-center my-3 mx-5 pt-3'>
                <div className='flex flex-col'>
                    <span className='text-[14px] text-[#141414]'>Unit Price</span>
                    <input type="text" placeholder='4278' className='w-[92px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2' />
                </div>

                <div className='flex flex-col'>
                    <span className='text-[14px] text-[#141414]'>QTY</span>
                    <input type="text" placeholder='4' className='w-[92px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2'/>
                </div>

                <div className='flex flex-col'>
                    <span className='text-[14px] text-[#141414]'>Net amount</span>
                    <input type="text" placeholder='4278' className='w-[92px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2' />
                </div>

            </div>


            <div className='flex justify-between items-center my-3 mx-5 pt-3'>
                <div className='flex flex-col gap-5 mt-[-12px]'>
                    <span className='text-[14px] text-[#141414]'>Tax type</span>
                    <span className='text-[14px] text-[#141414]'>CGST</span>
                    <span className='text-[14px] text-[#141414]'>SGST</span>
                    <span className='text-[14px] text-[#141414]'>IGST</span>
                </div>

                <div className='flex flex-col gap-3'>
                    <span className='text-[14px] text-[#141414]'>Tax Rate</span>
                    <input type="text" placeholder='9%' className='w-[92px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2'/>
                    <input type="text" placeholder='9%' className='w-[92px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2'/>
                    <input type="text"   className='w-[92px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2'/>
                </div>

                <div className='flex flex-col gap-3'>
                    <span className='text-[14px] text-[#141414]'>Tax Amount</span>
                    <input type="text" placeholder='358' value={358} className='w-[92px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2'/>
                    <input type="text" placeholder='566' value={566} className='w-[92px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2'/>
                    <input type="text"   className='w-[92px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2'/>
                </div>

            </div>

            <div className='flex justify-between items-center my-3 mx-5 pt-3'>
                <div className='flex flex-col'>
                    <span className='text-[14px] text-[#141414]'>Total Discount</span>
                    <input type="text" placeholder='5078' className='w-[120px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2' />
                </div>

                <div className='flex flex-col'>
                    <span className='text-[14px] text-[#141414]'>Discount</span>
                    <input type="text" placeholder='4' className='w-[120px] h-[34px] bg-white border border-[#E0E0E0] rounded-md outline-none pl-2'/>
                </div>

            </div>

             <button type='button' className='w-[95px] h-[34px] bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px] mb-5'
             onClick={handleSendback}>
                Send Back
             </button>
            {/* Add other fields similarly with onChange handling */}
            <div className="flex justify-between mb-4">
            <button type='button' className='w-[95px] h-[34px] bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
            onClick={() => setOpenSure(true)}>
                Accept
             </button>
             <button type='button' className='w-[95px] h-[34px] bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'>
                Reject
             </button>
             <button type='button' className='w-[95px] h-[34px] bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'>
                Dispute
             </button>
             <button type='button' className='w-[95px] h-[34px] bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
             onClick={handleOpenQueue}>
                Queue
             </button>

            </div>
          </form>  
         {/* ARe you sure */}

         {openSure &&
          <div className='absolute bottom-[0px] right-[0px] w-full h-[200px] bg-[#9F9F9F] border border-[#707070]'>

            <div className='flex flex-col gap-4 items-center text-center justify-center'>
                <span className='text-[23px] mt-12 text-white '>Are you sure do you want go accept</span>
                <div className='flex gap-2 mt-6'>
                <button type='button' className='w-[95px] h-[34px]  bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
                 onClick={()=> {setSentmsg(true);
                    setOpenSure(false)
                    handleMassage()
                    
                 }}
                >
                Accept
             </button>
             <button type='button' className='w-[95px] h-[34px] bg-white border border-[#E0E0E0] rounded-md shadow-[0px_1px_1px_rgba(0,0,0,0.17)] text-[15px]'
             onClick={() => setOpenSure(false)}>
                Cancel
             </button>
                </div>
            </div>

          </div>
      }
  

        </div> )}

        {/* Message Sent */}
        {activeModal === "success" && <div className='fixed top-[327px] left-[499px] w-[368px] h-[218px] bg-[#F9FAFC] rounded-[12px] z-[99]'>
               
               <div className='flex items-center justify-between m-3'>
                  <span className='pl-3 text-[21px]'>Invoice</span>
                  <IoCloseSharp className='text-[21px] cursor-pointer' 
                  onClick={()=> {setSentmsg(false);
                    setOpenSure(false)
                    closeForm()
                 }}/>
               </div>

               <div className='flex justify-center items-center mt-4 mx-7 flex-col text-center'>
                <GoFileSymlinkFile  className='text-[30px] text-green-500'/>
                <span className='text-[16px] mt-5'>Successfully sent back the invoice for approve</span>
                <button type='button' className='w-[34px] h-[34px] bg-white shadow-md border border-[#E0E0E0] rounded-[4px] text-[13px] mt-3'
                onClick={()=> {setSentmsg(false);
                    setOpenSure(false)
                    closeForm()
                 }}>OK</button>
               </div>

            </div>
        }

        {activeModal === "queue" && <AddQueue  handle={handleCloseQueue}/> }
        {activeModal === "sendback" && <SendBack handle={handleSendback} /> }
        {activeModal === "reassign" && <Reassign handle={handleReassign} /> }
        
 </>
    );
};

export default InvoiceForm;
