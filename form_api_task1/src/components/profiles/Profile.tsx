
import Add from "../../assets/Add.svg"
import { ProfileTable } from './Index'
import { useState } from "react"
// import ParagraphQ from "../QuestionCompFolder/ParagraphQuestion"
import questionTypeToCompObj from "../MapQuestionTypeToComponent"
import { Questionmodal } from "../Questionmodal"
import { useAppSelector,useAppDispatch} from "../../store/hooks"
import NewQuestion from "../../classes/NewQuestion"
import { addProfileQuestion } from "../../slice/dataSlice"
import EditQuestion from "../EditQuestion" 

export interface GeneralQuestion {
    [key: string]: string | number | boolean | string[],
    question: string
    other: boolean
    choices: string[]
}

const Profile = () => {
    const{data} = useAppSelector((state)=>state.allData)
    const dispatch = useAppDispatch()
    // console.log("data", data)

    const profileQuestions= data.attributes.profile.profileQuestions
    console.log("profile", profileQuestions)
 

    const [showQuestionModal, setShowQuestionModal] = useState(false)
    const [questionType, setQuestionType] = useState("Paragraph")
    const updateQuestionType = (questionType: string) => {
        setQuestionType(questionType)
    }
    
    
    const QuestionTypeComp = questionTypeToCompObj[questionType as keyof typeof questionTypeToCompObj]
    const addQuestion = (data: Partial<GeneralQuestion>) => {
        switch (questionType) {
            case "Paragraph": {
                if(data?.question === undefined) return;
                const newQuestion = new NewQuestion([], false, 0, false, data?.question, questionType.toString())
                dispatch(addProfileQuestion(newQuestion))
                setShowQuestionModal(false)
                break;
            }        
            case "Yes/No": {
                if(data?.question === undefined ||  data?.other === undefined) return;
                const newQuestion = new NewQuestion([], false, 0, data?.other, data?.question, questionType.toString())
                dispatch(addProfileQuestion(newQuestion))
                setShowQuestionModal(false)
                break;
            }
            case "Dropdown":{
                if(data?.question === undefined ||  data?.other === undefined || data?.choices===undefined) return; 
                
                const newQuestion = new NewQuestion(data.choices, false, 0, data?.other, data?.question, questionType.toString())
                dispatch(addProfileQuestion(newQuestion))
                setShowQuestionModal(false)
                break;
            }
            default:
                console.log(data)
                break;
        }
    }

    const  deleteQuestion = ()=>{
        setShowQuestionModal(false)
    }
    return (
        <div className='mt-[67px] md:w-[595px]'>
            <div className='md:w-full h-[77px] bg-[#D0F7FA] rounded-t-2xl text-[#000] text-[25px] font-semibold font-[Poppins] pt-[34px] pl-[29px]'>Profile</div>
            <div className="overflow-x-auto">
                <ProfileTable />

                {profileQuestions.map((question)=>(

                    <EditQuestion question={question}/>
                    
                ))}

                {!showQuestionModal && <div className="flex justify-start items-center my-[65px] gap-[20px] cursor-pointer" onClick={() => setShowQuestionModal(!showQuestionModal)}>
                    <img src={Add} alt="" />
                    <p className="font-[Poppins] text-[15px] font-semibold leading-6 not-italic">Add a question</p>
                </div>
                }
                {showQuestionModal &&
                    <Questionmodal updateQuestionType={updateQuestionType}
                    questionType={questionType} addQuestion={addQuestion} deleteQuestion={deleteQuestion}
                    actionType="add" formName={""}                       >
                        <QuestionTypeComp  />
                    </Questionmodal>
                }
            </div>

            <div>

            </div>

        </div>
    )
}

export default Profile
