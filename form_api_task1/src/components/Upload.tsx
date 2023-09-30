import upload from "../assets/coverImg.svg"
import deleteImg from "../assets/delete.svg"
const Upload = () => {


    return (
        <form className="md:w-[595px] md:h-[415px] flex justify-center items-center flex-col rounded-2xl shadow-sm md:shadow-2xl pb-[30px]">
            <div className="h-[77px] bg-[#D0F7FA] rounded-t-2xl w-full py-6 pl-3">
                <h3 className="text-[#000] text-[25px] font-bold font-[Poppins]">Upload cover image</h3>
            </div>
            <div className=" border-1 border-dashed md:w-[512px] md:h-[210px] border-gray-600 md:my-[63px] 
            md:ml-[40px] mr-[43px] mx-auto flex justify-center items-center ">
                <div
                    className="text-center shrink-1">

                    <img src={upload} className="md:w-[549px] md:h-[405px] rounded-md " />

                </div>

            </div>
            <div className="cursor-pointer md:mt-[-20px] md:mr-[300px] flex justify-start gap-4  items-center  w-[200px]">
                <img src={deleteImg} alt="" />
                <span className="text-[#A80000] text-[15px] font-bold leading-6"> delete & re-upload</span>
            </div>

        </form>
    )
}

export default Upload