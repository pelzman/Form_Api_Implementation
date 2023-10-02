import Unorder from "../../assets/unordered.svg"
import addMore from "../../assets/addMore.svg"


const MultipleQ = () => {    
    return (

        <div>

            <div>
                <h2 className="text-[20px] font-semibold text-[#000] leading-6 font-[Poppins] mb-[8px]">Question</h2>
                <input type="text" name="question" className="flex justify-between items-center w-full md:h-[68px] md:py-[23px]  md:w-full border-2 px-[30px] text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0"
                    placeholder="Type here"
                />

            </div>

            <div className="flex items-center  gap-[8px] ">
                <img src={Unorder} alt="" className="pt-[60px] cursor-pointer" />
                <div className="w-[441px]">
                    <h2 className="text-[20px] font-semibold text-[#000] leading-6 font-[Poppins] mb-[8px] mt-[30px]">Choice</h2>
                    <input type="text" name="choice" className="flex justify-between items-center w-full md:h-[68px] md:py-[23px]  md:w-full border-2 px-[30px] text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0"
                        placeholder="Type here"
                    />

                </div>
                <button ><img src={addMore} alt="" className="pt-[60px] cursor-pointer" /></button>
                
            </div>
            <div className="flex justify-start items-center gap-2 mt-[34px]">
                <label className="inline-flex items-center">
                    <input type="checkbox" name="other" />
                    <span className="ml-2 text-[15px] text-[#000] font-normal leading-6 font-[Poppins]">Enable “Other” option</span>
                </label>
            </div>


            <div className="mt-[50px]">
                <h2 className="text-[20px] font-semibold text-[#000] leading-6 font-[Poppins] mb-[8px]">Max choice allowed</h2>
                <input type="number" name="maxChoice" className="flex justify-between items-center w-full md:h-[68px] md:py-[23px]  md:w-full border-2 px-[30px]  text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0"
                    placeholder="Enter number of choice allowed here"
                />

            </div>


        </div>


    )
}

export default MultipleQ