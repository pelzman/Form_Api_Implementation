// import deleteImg from "../../assets/delete.svg"
import write from "../../assets/write.svg"
import arrow from "../../assets/arrow.svg"
import { useState } from "react"

const times = ["Minute", "Seconds"]

const VideoBasedQ = () => {
    const [showDuration, setShowDuration] = useState(false)
    const toggleDropdown = () => {
        setShowDuration((prev: boolean) => !prev)
    }
    const [selectDuration, setSelectDuration] = useState(times[0])
     
    return (

        <div className='mt-[67px] md:w-[595px]'>
            <div className='md:w-full h-[77px] bg-[#D0F7FA] rounded-t-2xl text-[#000] text-[25px] font-semibold font-[Poppins] pt-[34px] pl-[29px]'>Video based questions</div>

            <div className='md:w-full pl-[40px] pr-[100px]'>
                <h3 className="text-[#979797] text-[14px] font-normal font-[Poppins] pt-[50px]">4 minute</h3>
                <div className='flex justify-between items-center' >
                    <h2 className="text-[#000] text-[20px] font-semibold font-[Poppins]">Tell us about yourself?</h2>
                    <img src={write} alt="" />
                </div>
                <input type="text" className='w-full border-b-2 border-[#C4C4C4] focus:outline-none' />
            </div>
            <div className='md:w-full pl-[40px] pr-[100px] mb-[40px]'>
                <h3 className="text-[#979797] text-[14px] font-normal font-[Poppins] pt-[50px]">2 minute</h3>
                <div className='flex justify-between items-center' >
                    <h2 className="text-[#000] text-[20px] font-semibold font-[Poppins]">
                        Why did you apply for this program?</h2>
                    <img src={write} alt="" />
                </div>
                <input type="text" className='w-full border-b-2 border-[#C4C4C4] focus:outline-none' />
            </div>

            <div className='md:w-full pl-[40px] pr-[100px]'>
                <div className='flex justify-between items-center' >
                    <h2 className="text-[#000] text-[20px] font-semibold font-[Poppins]">Question?</h2>

                </div>
                <input type="text" name="question" className='w-full md:h-[51px] rounded-lg border-2placeholder:text-[#000] pl-5  focus:outline-none placeholder:text-[16px] font-medium font-[Poppins'
                    placeholder="Q: Tell us about yourself? "

                />
            </div>
            <textarea className="md:h-[144px] md:w-[450px] border-2  ml-[40px] mr-[100px] mt-[20px] placeholder:text-start font-semibold placeholder:text-[16px] font-[Poppins] placeholder:text-[#000] px-[20px] pt-[30px] focus:outline-none"
                placeholder="Please talk about your achievements, goals and what you worked on as the latest project.">


            </textarea>
            <div className="flex  justify-start items-center ml-[40px] gap-3 mt-[30px]">
             
                   
                    <input className=" md:w-[258px] md:h-[68px] border-2 text-centerpt-[20px] text-[#979797] text-[14px] font-medium font-[Poppins] pl-[40px]"type="number" placeholder="Max duration of video" />
             
                <div></div>
                <div className="md:w-[186px] md:h-[68px] border-2  text-center ">
                    <button onClick={toggleDropdown} className="pt-[20px] flex justify-between items-center gap-14">
                        <p className="text-[#979797] text-[14px] font-medium font-[Poppins] pl-3">{selectDuration}</p>
                        <img src={arrow} alt="" />
                    </button>
                </div>

            </div>
            <div className="flex justify-end pr-[90px] cursor-pointer">
            
                  
                    <ul  className="md:w-[186px] md:h-[68px] space-y-3 ">
                
                        {  showDuration && times.map((time) => (
                         <li onClick ={()=>{
                            setSelectDuration(time)
                            setShowDuration(false)
                         }} className="flex flex-col text-[#000] text-[16px] font-[Poppins] font-medium">{time}</li>

                        ))}
                    </ul>
            
            </div>
        
            <div className="flex justify-start items-center gap-2 mb-8 cursor-pointer">
                <div>
                    <p className="text-[20px] text-red-500 font-bold">+</p>
                </div>
                <div><p className="text-[#A220CF]  text-[14px] font-semibold font-[Poppins]"> Add video interview questions</p></div>
            </div>


        </div>
    )
}

export default VideoBasedQ