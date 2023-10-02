
import deleteImg from "../assets/delete.svg"
import arrow from "../assets/arrow.svg"
import { useState } from "react"
import { GeneralQuestion } from "../components/profiles/Profile"
import { Event } from "./EditQuestion"

interface EventWithDefault extends Event {
    preventDefault: () => void;
}

interface Props {
    children?: React.ReactNode
    onSave?: () => void
    deleteQuestion?: () => void
    updateQuestionType: (questionType: string) => void
    questionType: string
    actionType: string
    addQuestion: (data: Partial<GeneralQuestion>) => void
    formName: string
}
const questionTypeArray = ["Paragraph", "Yes/No", "Dropdown", "Multiple Choice", "Video question", "Date", "Number", "File upload"]
export const Questionmodal: React.FC<Props> = ({ children, deleteQuestion, updateQuestionType, questionType, addQuestion, actionType, formName }) => {
    const [showDropdown, setShowDropDown] = useState(false)

    const toggleToShowDropdown = () => {
        setShowDropDown((prev: boolean) => !prev)
    }

    const formIdAndName = formName ? formName : questionType !== "Yes/No" ? questionType : questionType.replace("/", "-")

    const updateTypeAndHideDropdown = (questionType: string) => {
        updateQuestionType(questionType)
        setShowDropDown(false)
    }

    const handleQuestion = (e: EventWithDefault) => {
        e.preventDefault();
        if (actionType === "add") {
            return saveQuestion()
        }
        return editQuestion()
    }

    const editQuestion = () => {

        const currentForm = document.querySelector(`#${formIdAndName}`) as HTMLFormElement
        const formData = new FormData(currentForm)
        const valuesArray = Array.from(formData.values())
        const allFilled = valuesArray.every(value => value.toString().trim().length > 0)
        if (!allFilled) return alert("Please fill all fields")
        const formObj: Partial<GeneralQuestion> = { choices: [] }
        addQuestion(formObj)
    }

    const saveQuestion = () => {
        const currentForm = document.querySelector(`#${formIdAndName}`) as HTMLFormElement
        const formData = new FormData(currentForm)
        const valuesArray = Array.from(formData.values())
        const allFilled = valuesArray.every(value => value.toString().trim().length > 0)
        if (allFilled) {
            const formObj: Partial<GeneralQuestion> = { choices: [] }
            for (const [key, value] of formData.entries()) {
                if (key === "choice") {
                    if (formObj.choices !== undefined)
                        formObj.choices.push(value.toString())
                } else if (key === "other") {
                    formObj[key as keyof GeneralQuestion] = true
                } else {
                    if (key === "maxChoice") {
                        formObj[key as keyof GeneralQuestion] = Number(value)
                    } else {
                        formObj[key as keyof GeneralQuestion] = value.toString()
                    }
                }
            }
            if (["Multiple Choice", "Dropdown", "Yes/No"].includes(questionType)) {
                if (!Object.keys(formObj).includes("other")) {
                    formObj["other"] = false
                }
            }
            return addQuestion(formObj)
        }
        return window.alert("please fill all field")
      

    }
    return (
        <div className='mt-[67px] md:w-[595px]'>
            {actionType === "add" && <>
                <div className='md:w-full h-[77px] bg-[#D0F7FA] rounded-t-2xl text-[#000] text-[25px] font-semibold font-[Poppins] pt-[34px] pl-[29px]'>Question</div>
                <div className="my-[36px] mx-[3px]">
                    <h2 className="text-[20px] font-semibold text-[#000] leading-6 font-[Poppins] mb-[8px]" >Type</h2>
                    <button className="flex justify-between items-center w-full md:h-[68px] md:py-[23px] md:w-full border-2 px-[30px] text-[#1D4ED8] text-xs md:text-base font-semibold font-[Poppins] mt-4 lg:mt-0" onClick={toggleToShowDropdown}>
                        <h2 className="text-[14px]  text-[#000] font-semibold leading-6 font-[Poppins]">{questionType}</h2>
                        <span>
                            <img src={arrow} alt="" className="" />
                        </span>
                    </button>
                </div>
            </>
            }
            {showDropdown && <ul className="cursor-pointer md:w-[540px] md:h-[380px] rounded-[10px] bg-[#FFF] border-2 mt-[-50px] ml-20px]">
                {questionTypeArray.map((item) => (
                    <li className={`${questionType === item ? "bg-purple-600 text-white text-[16px] py-4 font-semibold font-[Poppins] " : "py-2 pl-2 text-[16px] text-[#000] font-semibold font-[Poppins]"} duration-500`} onClick={() => updateTypeAndHideDropdown(item)}>{item}</li>
                ))}
            </ul>}



            <form action="" id={formIdAndName} name={formIdAndName} onSubmit={(e) => e.preventDefault()}><div>{children}</div> </form>
            <div className="cursor-pointer md:mt-[43px] mb-[72px] md:mr-[300px] flex justify-between items-center w-full px-[29px]  ">

                <div onClick={deleteQuestion} className=" flex justify-start gap-4  items-center">
                    <img src={deleteImg} alt="" />
                    <span className="text-[#A80000] text-[15px] font-bold leading-6"> Delete question</span>
                </div>
                <div>
                    <button onClick={(e) => handleQuestion(e as unknown as EventWithDefault)} className="px-[12px] py-[11px] text-[14px] text-[#F4FBF7] font-[Poppins] rounded-xl font-semibold bg-[#087B2F]" > {actionType === "add" ? "save" : "edit"} </button>
                </div>

            </div>
        </div>
    )
}

