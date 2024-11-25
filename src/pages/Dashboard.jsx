import { LiaRupeeSignSolid } from "react-icons/lia";
import Calender from "../components/Calender";
import Card from "../components/Card";

import {CardsData} from '../data/carddata.js'
import {SmallCardData} from '../data/smallcard.js'

import Chart from "../components/Chart.jsx";
import Chart2 from "../components/Chart2.jsx";
import SmallCard from "../components/SmallCard.jsx";

const Dashboard = () => {
  return (
    <>

    <div className="w-full h-full flex justify-center">

    
    <div className="w-[85vw] h-full flex flex-col  ">
    <span className="absolute top-[69px] left-[139px] w-[58px] h-[16px] text-left font-roboto text-[#141414] opacity-100 text-[12px]">
      Dashboard
    </span>

    <h3 className="absolute top-[105px] left-[139px] w-[107px] h-[29px] text-left font-roboto font-bold text-[#141414] opacity-100 leading-[29px] text-[22px] tracking-normal">
    Dashboard
    </h3>

    <div className="flex items-center mt-[90px] ml-[19px] w-[352px] h-[52px] bg-white shadow-md border border-[#cfd6e5] rounded-[8px]">
       <span className="flex text-[14px] items-center pl-4 font-normal text-[rgba(20,20,20,1)] tracking-normal">
       Over all outstanding
       </span>
       
       <LiaRupeeSignSolid className=" text-[24px] ml-[15px] font-extrabold text-[hsla(0,0%,56%,1)] opacity-100 tracking-normal" />
       <span className="text-[24px] font-medium ml-[10px] text-[hsla(228,30%,17%,1)] opacity-100 tracking-normal">12341233</span>
    </div>


    <Calender />

    <div className="mt-5 ml-5 h-auto grid grid-cols-4 gap-4">
    {CardsData.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          icon={card.icon}
          total={card.total}
          rupees={card.rupees}
          link={card.link}
        />
      ))}
    </div>

    <div className="w-full h-full flex justify-center">

        <div className="w-[40vw] h-[400px] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.16)] rounded-lg m-4">
          <Chart />
        </div>
        <div className="w-[40vw] h-[400px] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.16)] rounded-lg m-4">
          <Chart2 />
        </div>
    </div>

    
    <div className="w-[82vw] h-[190px] bg-[#d5e3ff] shadow-[0_1px_1px_rgba(0,0,0,0.16)] rounded-lg ml-6 mb-6 py-3">
          
          <div className="flex text-center justify-between">
            <div className="flex flex-col p-3">
            <span className="font-bold text-[20px]">Due by Age Summery</span>
            <span className="font-[15px] mt-1 ml-[-40px] ">Payment due days wise</span>
            </div>

            <div className="flex p-3 items-center">
                <span className="text-[rgba(123,_124,_137,_1)] pr-4 items-center ">Penalty Saved Amount</span>
                <div className="w-[146px] h-[41px] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.16)] rounded-lg flex items-center">
                     <LiaRupeeSignSolid  className="ml-3 text-[20px] font-bold"/>
                     <span className="text-[20px] font-bold">122255</span>
                </div>
            </div>
          </div>

          <div className="flex mb-2">
    {
        SmallCardData.map((data, index) => (
            <SmallCard  
                key={index}
                days={data.days}
                amount={data.amount} 
            />
        ))
    }
</div>

    </div>
     

     </div>
    </div>
    </>
  )
}

export default Dashboard