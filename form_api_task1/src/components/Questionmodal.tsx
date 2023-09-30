// import { useState } from "react"
import deleteImg from "../assets/delete.svg"
import arrow from "../assets/arrow.svg"
interface Props {
    children?: React.ReactNode
    onSave?: () => void
    onDelete?: () => void
    text?:string
}

export const Questionmodal: React.FC<Props> = ({ text, children, onSave, onDelete }) => {
    // const [showDropdown, setShowDropDown] = useState(false)
    // const [isSelected, setSelected] = useState(DropMenus[0])
    return (
        <div className='mt-[67px] md:w-[595px]'>
            <div className='md:w-full h-[77px] bg-[#D0F7FA] rounded-t-2xl text-[#000] 
  text-[25px] font-semibold font-[Poppins] pt-[34px] pl-[29px]'>{text}</div>
            <div className="my-[36px] mx-[3px]">
                <h2 className="text-[20px] font-semibold text-[#000] leading-6 font-[Poppins] mb-[8px]" >Type</h2>
                <button className="flex justify-between items-center w-full md:h-[68px] md:py-[23px]  md:w-full border-2 px-[30px] text-[#1D4ED8] text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0">
                    <h2 className="text-[14px] font-medium text-[#979797] leading-6 font-[Poppins]">Paragraph</h2>
                    <span>
                        <img src={arrow} alt="" className="" />
                    </span>
                </button>
            </div>

            <div>{children}</div>
            <div className="cursor-pointer md:mt-[43px] mb-[72px] md:mr-[300px] flex justify-between items-center w-full px-[29px]  ">

                <div onClick={onDelete} className=" flex justify-start gap-4  items-center">
                    <img src={deleteImg} alt="" />
                    <span className="text-[#A80000] text-[15px] font-bold leading-6"> Delete question</span>
                </div>
                <div>
                    <button onClick={onSave} className="px-[12px] py-[11px] text-[14px] text-[#F4FBF7] font-[Poppins] rounded-xl font-semibold bg-[#087B2F]">save</button>
                </div>

            </div>
        </div>
    )
}

