
import { useState } from "react"
import { Questionmodal } from "./Questionmodal"
import { AiOutlineCheckSquare } from "react-icons/ai"
const YesorNoQ = () => {
    const [check, setCheck] = useState(true)
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

        <div className="flex justify-start items-center gap-2 mt-[34px]">
                    <label className="inline-flex items-center">
                        <AiOutlineCheckSquare className={`${check ? 'bg-[#087B2F]' : ''} `} onClick={() => setCheck(!check)} />
                        <span className="ml-2 text-[15px] text-[#000] font-normal leading-6 font-[Poppins]">Enable “Other” option</span>
                    </label>
                </div>

            </Questionmodal>
        </div>
  
  )
}

export default YesorNoQ