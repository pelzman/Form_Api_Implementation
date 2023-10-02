
import Unorder from "../../assets/unordered.svg"
import addMore from "../../assets/addMore.svg"
import {  useState } from "react"

// import { Questionmodal } from "../Questionmodal"

const DropdownQ = () => {
   

    const addDropDownInput= ()=>{
        
        const newDropDownInputs = [...dropdownInputs, <DropdownInput addDropDownInput={addDropDownInput}/>  ]
        setDropDownInputs( newDropDownInputs)
    }
    const [dropdownInputs, setDropDownInputs] = useState([<DropdownInput addDropDownInput={addDropDownInput}/>])
    return (

        <div>

            <div>
                <h2 className="text-[20px] font-semibold text-[#000] leading-6 font-[Poppins] mb-[8px]">Question</h2>
                <input type="text" name="question" className="flex justify-between items-center w-full md:h-[68px] md:py-[23px]  md:w-full border-2 px-[30px] text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0"
                    placeholder="Type here"
                />

            </div>
            <h2 className="text-[20px] font-semibold text-[#000] leading-6 font-[Poppins] mb-[8px] mt-[30px]">Choice</h2>
            {dropdownInputs.map((component) => <>{component}</>)}
            <div className="flex justify-start items-center gap-2 mt-[34px]">
                <label className="inline-flex items-center">
                    <input type="checkbox" name="other" />
                    <span className="ml-2 text-[15px] text-[#000] font-normal leading-6 font-[Poppins]">Enable “Other” option</span>
                </label>
            </div>          
        </div>


    )
}

export default DropdownQ
interface Props{
    addDropDownInput:()=>void
}
export const  DropdownInput:React.FC<Props> = ({addDropDownInput})=> {
    return (
        <>
<div className="flex items-center  gap-[8px] ">
        <img src={Unorder} alt="" className=" cursor-pointer" />

        <div className="w-[441px]">

            <input type="text" name="choice" className="lex justify-between items-center w-full md:h-[68px] md:py-[23px]  d:w-fullborder-2 px-[30px] text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0"
                placeholder="Type here" />

        </div>
        <button onClick={addDropDownInput}> <img src={addMore} alt="" className=" cursor-pointer" /></button>
       
    </div>
  
    </>
    )
    
    
}
