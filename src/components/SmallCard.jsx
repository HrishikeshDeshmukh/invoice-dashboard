import { LiaRupeeSignSolid } from "react-icons/lia";

const SmallCard = ({key, amount, days}) => {
  return (
    <div className="w-[170px] h-[70px] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.16)] rounded-lg m-2" key={key}>
        <div className="flex flex-col p-2 pl-3">
            <span className="text-[rgba(123,_124,_137,_1)] pr-4 items-center">{days}</span>
            <span className="flex items-center">
                <LiaRupeeSignSolid className="text-[20px] font-bold"/>
                <span className="text-[20px] font-bold">{amount}</span>
            </span>
        </div>
    </div>
  )
}

export default SmallCard