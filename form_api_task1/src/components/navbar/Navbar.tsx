
import vector from "../../assets/Vector.svg"

const Navbar = () => {
    return (
        <div className=" bg-white md:w-screen  md:h-[129px] shadow-sm md:mt-[123px] md:flex md:justify-around md:items-center md:my-[54px] px-[110px] md:gap-[78px] ">
            <div className=" md:py-[54px] md:pl-[54px] md:pr-[65px] ">
                <p className="md:text-xl not-italic font-semibold leading-normal text-[#000] font-[Inter]" >Program Details</p>
            </div>
            <div
                className=" md:bg-[#00635B]
            md:py-[54px] md:pl-[54px] md:pr-[65px] md:relative ">
                <p className="md:text-xl not-italic font-semibold leading-normal text-[#000] md:text-[#FFF] font-[Inter]">Application Form</p>
                <img src={vector} alt="" className="md:absolute md:top-10 md:right-[-20px] hidden md:flex" />
            </div>
            <div className="md:py-[54px] md:pl-[54px] md:pr-[65px] ">
                <p className="md:text-xl not-italic font-semibold leading-normal text-[#000] font-[Inter]">Workflow</p>
            </div>
            <div className=" md:py-[54px] md:pl-[54px] md:pr-[65px] ">
                <p className="md:text-xl not-italic font-semibold leading-normal text-[#000] font-[Inter]">Preview</p>
            </div>
        </div>

    )
}

export default Navbar;