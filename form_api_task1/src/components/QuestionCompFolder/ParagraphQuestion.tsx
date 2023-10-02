
// import { Questionmodal } from "../Questionmodal"
import { Question } from "../../slice/dataSlice";
import { Event } from "../EditQuestion";
interface Props {
  
  initialData: Question | undefined;
  handleInputChange: (arg0:Event, arg1: number) => void | undefined

}
const ParagraphQ = ({initialData, handleInputChange}:Partial<Props> ) => {
  return (
    <div>
      <div>
        <h2 className="text-[20px] font-semibold text-[#000] leading-6 font-[Poppins] mb-[8px]">Question</h2>
        {initialData ?
          <input type="text" value={initialData.question} name="question" className="flex justify-between items-center w-full md:h-[68px] md:py-[23px]  md:w-full border-2 px-[30px] 
          text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0"
            placeholder="Type here"
            onChange={(e) => handleInputChange && handleInputChange(e, 0)}
          />
          :
          <input type="text" name="question" className="flex justify-between items-center w-full md:h-[68px] md:py-[23px]  md:w-full border-2 px-[30px] 
          text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0"
            placeholder="Type here"
          />
        }
      </div>

    </div>
  )
}

export default ParagraphQ