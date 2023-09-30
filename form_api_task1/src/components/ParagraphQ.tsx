
import { Questionmodal } from "./Questionmodal"

const ParagraphQ = () => {
  return (
    <div>
        <Questionmodal>
          <div>
            <h2 className="text-[20px] font-semibold text-[#000] leading-6 font-[Poppins] mb-[8px]">Question</h2>
         <input type="text" className="flex justify-between items-center w-full md:h-[68px] md:py-[23px]  md:w-full border-2 px-[30px] 
          text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0" 
          placeholder="Type here" 
          />
            
          
            </div>  
        </Questionmodal>
    </div>
  )
}

export default ParagraphQ