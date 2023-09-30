import Sidebar from "../sidebar/Sidebar"
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import React from "react"

export interface DashboardLinkProps {
    link: {

        label?: string
        path?: string
        src: string | unknown,

    }
}

const Layout: React.FC<DashboardLinkProps> = () => {
    return (
        <div className='flex  w-full '>
            <div className="fixed z-20">
                <Sidebar />
            </div>
            <div className='w-screen '>
                <div className="sm:fixed bg-white w-screen  lg:h-[129px] z-10" >

                    <Navbar />
                </div>
                <div className=" mt-[50px] lg:mt-[300px]" >
                    <Outlet />
                </div>
            </div>


        </div>
    )
}

export default Layout