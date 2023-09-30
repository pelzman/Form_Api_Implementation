import deleteImg from "../assets/delete.svg"
import write from "../assets/write.svg"
import arrow from "../assets/arrow.svg"

const VideoBasedQ = () => {
    return (

        <div className='mt-[67px] md:w-[595px]'>
            <div className='md:w-full h-[77px] bg-[#D0F7FA] rounded-t-2xl text-[#000] 
text-[25px] font-semibold font-[Poppins] pt-[34px] pl-[29px]'>Video based questions</div>

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
                <input type="text" className='w-full  md:h-[51px] rounded-lg border-2 
                placeholder:text-[#000] pl-5  focus:outline-none placeholder:text-[16px] font-medium font-[Poppins'
                    placeholder="Q: Tell us about yourself? "
                    readOnly
                />
            </div>
            <textarea className="md:h-[144px] md:w-[450px] border-2  ml-[40px] mr-[100px] mt-[20px] placeholder:text-start 
            font-semibold placeholder:text-[16px] font-[Poppins] placeholder:text-[#000] px-[20px] pt-[30px] focus:outline-none"
                placeholder="Please talk about your achievements, goals and what you worked on as the latest project.">


            </textarea>
            <div className="flex  justify-start items-center ml-[40px] gap-3 mt-[30px]">
                <div className="md:w-[258px] md:h-[68px] border-2 text-center ">
                    <p className="pt-[20px] text-[#979797] text-[14px] font-medium font-[Poppins]">Max duration of video</p>
                </div>
                <div className="md:w-[186px] md:h-[68px] border-2  text-center">
                    <button className="pt-[20px] flex justify-between items-center gap-14">
                        <p className="text-[#979797] text-[14px] font-medium font-[Poppins] pl-3">in (sec/min)</p>
                        <img src={arrow} alt="" />
                    </button>
                </div>


            </div>

            <div className="cursor-pointer md:mt-[43px] mb-[72px] md:mr-[300px] flex justify-between items-center w-full md:pl-[110px] md:pr-[150px] ">

                <div className=" flex justify-start gap-4  items-center">
                    <img src={deleteImg} alt="" />
                    <span className="text-[#A80000] text-[15px] font-bold leading-6"> Delete question</span>
                </div>
                <div>
                    <button className="px-[12px] py-[11px] text-[14px] text-[#F4FBF7] font-[Poppins] rounded-xl font-semibold bg-[#087B2F]">save</button>
                </div>
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