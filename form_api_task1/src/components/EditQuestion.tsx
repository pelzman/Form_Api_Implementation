
// import deleteImg from "../assets/delete.svg"
import { Question } from "../slice/dataSlice"
import { Questionmodal } from "./Questionmodal"
import { useState } from "react"
import questionTypeToCompObj from "./MapQuestionTypeToComponent"
// import { GeneralQuestion } from "./profiles/Profile"
import { editProfileQuestion } from "../slice/dataSlice"
import { useAppDispatch } from "../store/hooks"
import edit from "../assets/edit.svg"

interface Props {
    question: Question
}

export interface Event {
    target: TargetProp
}
interface TargetProp {
    name: string
    value: string

}

const EditQuestion = ({ question }: Props) => {
    const dispatch = useAppDispatch()
    const [showQuestionModal, setShowQuestionModal] = useState(false)

    const [questionData, setQuestionData] = useState(question)

    const handleInputChange = (e: Event, i: number) => {
        if (e.target.name === "choice") {
            setQuestionData(prev => {
                const copy = { ...prev };
                copy.choices[i] = e.target.value;
                return copy;
            })

        } else {
            setQuestionData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        }
    }

    const deleteQuestion = () => {
        setQuestionData(question)
        setShowQuestionModal(false)
    }

    const updateQuestionType = (questionType: string) => {
        // setQuestionType(questionType)
        console.log(questionType)
    }
    const updateQuestion = () => {
        // return console.log(questionData);
        dispatch(editProfileQuestion(questionData))
        setShowQuestionModal(false)
    }

    const QuestionTypeComp = questionTypeToCompObj[questionData.type as keyof typeof questionTypeToCompObj]
    // console.log("komonq", question)
    return (
        <div className="pt-8">
            <p className="text-[#000] text-[20px] font-semibold font-[Poppins] not-italic">{questionData.type}</p>
            <div className='md:w-full  mb-[40px] flex justify-between items-center '>
                <p className="text-[#000] text-[20px] font-semibold font-[Poppins] not-italic">{questionData.question}</p>

                <button  className="pr-20" onClick={(e) => {
                    e.preventDefault()
                    setShowQuestionModal(!showQuestionModal)
                    setQuestionData(question)
                }

                }> <img src={edit} alt="" />   </button>
            </div>
            {showQuestionModal &&
                <Questionmodal updateQuestionType={updateQuestionType}
                    questionType={questionData.type} addQuestion={updateQuestion} deleteQuestion={deleteQuestion} actionType="edit" formName={questionData.id.replace(/[0-9]/g, '')}>
                    <QuestionTypeComp initialData={questionData} handleInputChange={handleInputChange} />
                </Questionmodal>
            }

        </div>


    )
}

export default EditQuestion