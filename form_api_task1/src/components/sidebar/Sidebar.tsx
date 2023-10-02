import { DashBoardLinks } from "../sidebar/Index"
import logo from "../../assets/Hamburgar.svg"

import { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'


const Sidebar: React.FC = () => {
    const location = useLocation()
    const [open, setOpen] = useState(true)

    return (



        <div className={` " w-[70px] lg:w-[82px]" duration-500 bg-cyan h-screen  px-2 relative md:bg-[#FFF] md:shadow-md  `}>


            <div className=' pt-[50px] shrink-0  flex justify-center items-center mb-[95px]' >
                <img src={logo} alt="" className={`h-{30px} w-{30px} cursor-pointer duration-200`} onClick={() => setOpen(!open)} />
            </div>


            <ul className='list'>
                {

                    DashBoardLinks.map((link, index) => (
                        <Link key={index} to={link.path}>

                            <li className={`flex justify-start items-center text-white  gap-4 py-2  hover:text-black hover:rounded-lg list ${location.pathname === link.path ? 'active' : ''} 
              
            
              `} >
                                <div className='shrink-0 pb-[45px] mx-auto '>
                                    <img src={link.src} alt="" className={` w-[30px] h-[30px] lg:w-[48px] lg:h-[48px `} />
                                </div>


                            </li>
                        </Link>

                    ))
                }


            </ul>






        </div>


    )
}

export default Sidebar