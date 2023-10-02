
import { Table } from "./Index"
import Add from "../../assets/Add.svg"

import { useState } from "react"

const PersonalInfo = () => {
    const [showTypes, setShowTypes] = useState(false)
 
    return (
        <div className='mt-[67px] md:w-[595px]'>
            <div className='md:w-full h-[77px] bg-[#D0F7FA] rounded-t-2xl text-[#000] 
          text-[25px] font-semibold font-[Poppins] pt-[34px] pl-[29px]'>Personal Information</div>

            <div className='mt-[38px] pl-[29px] mb-[23px]'>
                <span className=' text-[#000] 
          text-[20px] font-semibold font-[Poppins] '>First Name</span> <br></br>
                <input type="text" className='w-full border-b-2 border-[#C4C4C4] focus:outline-none' />
            </div>

            <div className='mt-[38px] pl-[29px] mb-[23px]'>
                <span className=' text-[#000] 
          text-[20px] font-semibold font-[Poppins] '>Last Name</span> <br></br>
                <input type="text" className='w-full border-b-2 border-[#C4C4C4] focus:outline-none' />
            </div>
            <div className='mt-[38px] pl-[29px] mb-[23px]'>
                <span className=' text-[#000] 
          text-[20px] font-semibold font-[Poppins] '>Email</span> <br></br>
                <input type="email" className='w-full border-b-2 border-[#C4C4C4] focus:outline-none' />
            </div>

            <div className="overflow-x-auto">
                <Table />

                { <div className="flex justify-start items-center my-[65px] gap-[20px] cursor-pointer" onClick={() => setShowTypes(!showTypes)}>
                    <img src={Add} alt="" />
                    <p className="font-[Poppins] text-[15px] font-semibold leading-6 not-italic">Add a question</p>
                </div>
                }
         
            
    



            </div>


            <div>

            </div>

        </div>
    )

}

export default PersonalInfo










