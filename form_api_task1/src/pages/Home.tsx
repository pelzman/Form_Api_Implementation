import Upload from "../components/Upload"
import PersonalInfo from "../components/personal/PersonalInfo"
import Profile from "../components/profiles/Profile"
 import { useAppDispatch, useAppSelector } from "../store/hooks"
 import { getData } from "../slice/dataSlice"
import { useEffect } from "react"





const Home = () => {
const {data} = useAppSelector((state)=>state.allData)
console.log(data)
const dispatch = useAppDispatch()

useEffect(()=>{
    dispatch(getData())
},[])

    return (
        <div className="md:pt-[115px] md:pl-[140px]">
            <Upload />
            <PersonalInfo  />
            <Profile />
           
        </div>
    )
}

export default Home