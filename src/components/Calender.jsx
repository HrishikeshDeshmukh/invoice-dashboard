

const Calender = () => {
  return (
    <div className="absolute top-[86px] right-[98px] w-[198px] h-[74px]">
    <span className="text-[14px]">
        Nov 2024
    </span>

    <div className="mt-2 grid grid-cols-[repeat(7,_auto)] gap-y-2 ml-[-20px]">
  <div className="flex items-end flex-col">
    <span className="text-[16px]">S</span>
    <span className="text-[13px] text-[rgba(123, 124, 137, 1)] opacity-70">17</span>
  </div>
  <div className="flex items-end flex-col">
    <span className="text-[16px]">M</span>
    <span className="text-[13px] text-[rgba(123, 124, 137, 1)] opacity-70">18</span>
 </div>
 <div className="flex items-end flex-col">
    <span className="text-[16px]">T</span>
    <span className="text-[13px] text-[rgba(123, 124, 137, 1)] opacity-70">19</span>
 </div>
 <div className="flex items-end flex-col">
    <span className="text-[16px]">W</span>
    <span className="text-[13px] text-[rgba(123, 124, 137, 1)] opacity-70">20</span>
 </div>

 <div className="flex items-end flex-col">
    <span className="text-[16px]">T</span>
    <span className="text-[13px] text-[rgba(123, 124, 137, 1)] opacity-70">21</span>
 </div>
 <div className="flex items-end flex-col">
    <span className="text-[16px]">F</span>
    <span className="text-[13px] text-[rgba(123, 124, 137, 1)] opacity-70">22</span>
 </div>
 <div className="flex items-end flex-col">
    <span className="text-[16px] w-[23px] h-[25px] bg-[rgba(255,_167,_65,_1)] rounded-tl-[12px] rounded-tr-[12px] text-center text-white">S</span>
    <span className="text-[13px] opacity-70 w-[23px] h-[25px] bg-[rgba(31,_36,_57,_1)] rounded-bl-[12px] rounded-br-[12px] text-center text-white">23</span>
 </div>
</div>

</div>

  )
}

export default Calender