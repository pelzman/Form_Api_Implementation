import Upload from "../components/Upload"
import PersonalInfo from "../components/personal/PersonalInfo"
import Profile from "../components/profiles/Profile"
import VideoBasedQ from "../components/VideoBasedQ"
const Home = () => {
    return (
        <div className="md:pt-[115px] md:pl-[140px]">
            <Upload />
            <PersonalInfo />
            <Profile />

            <VideoBasedQ />
        </div>
    )
}

export default Home