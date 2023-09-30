
import Add from "../../assets/Add.svg"
import { ProfileTable } from './Index'
const Profile = () => {
  return (
    <div className='mt-[67px] md:w-[595px]'>
    <div className='md:w-full h-[77px] bg-[#D0F7FA] rounded-t-2xl text-[#000] 
  text-[25px] font-semibold font-[Poppins] pt-[34px] pl-[29px]'>Profile</div>
    <div className="overflow-x-auto">
        <ProfileTable />
        <div className="flex justify-start items-center my-[65px] gap-[20px] cursor-pointer">
            <img src={Add} alt="" />
            <p className="font-[Poppins] text-[15px] font-semibold leading-6 not-italic">Add a question</p>
        </div>
    </div>

    <div>

    </div>

</div>
  )
}

export default Profile
