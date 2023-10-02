
import { Table } from "./Index"
import Add from "../../assets/Add.svg"

import { useState } from "react"
// import ParagraphQ from "../QuestionCompFolder/ParagraphQuestion"
import questionTypeToCompObj from "../MapQuestionTypeToComponent"
import { Questionmodal } from "../Questionmodal"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PersonalInfo = () => {
    const [showTypes, setShowTypes] = useState(false)
    const [questionType, setQuestionType] = useState("Yes/No")

    const updateQuestionType = (questionType:string)=>{
        setQuestionType(questionType)
    }
    const QuestionTypeComp = questionTypeToCompObj[questionType as keyof typeof questionTypeToCompObj]
    const addQuestion = (data:unknown)=>{
        console.log(data)
    }

    return (
        <div className='mt-[67px] md:w-[595px]'>
            <div className='md:w-full h-[77px] bg-[#D0F7FA] rounded-t-2xl text-[#000] 
          text-[25px] font-semibold font-[Poppins] pt-[34px] pl-[29px]'>Personal Information</div>

            <div className='mt-[38px] pl-[29px] mb-[23px]'>
                <span className=' text-[#000] 
          text-[20px] font-semibold font-[Poppins] '>First Name</span> <br></br>
                <input type="text" className='w-full border-b-2 border-[#C4C4C4] focus:outline-none' />
            </div>

            <div className='mt-[38px] pl-[29px] mb-[23px]'>
                <span className=' text-[#000] 
          text-[20px] font-semibold font-[Poppins] '>Last Name</span> <br></br>
                <input type="text" className='w-full border-b-2 border-[#C4C4C4] focus:outline-none' />
            </div>
            <div className='mt-[38px] pl-[29px] mb-[23px]'>
                <span className=' text-[#000] 
          text-[20px] font-semibold font-[Poppins] '>Email</span> <br></br>
                <input type="email" className='w-full border-b-2 border-[#C4C4C4] focus:outline-none' />
            </div>

            <div className="overflow-x-auto">
                <Table />



                { <div className="flex justify-start items-center my-[65px] gap-[20px] cursor-pointer" onClick={() => setShowTypes(!showTypes)}>
                    <img src={Add} alt="" />
                    <p className="font-[Poppins] text-[15px] font-semibold leading-6 not-italic">Add a question</p>
                </div>
                }
                {
                <Questionmodal updateQuestionType={updateQuestionType}
                    questionType={questionType} addQuestion={addQuestion} actionType={""} formName={""}>
                    <QuestionTypeComp /> 
                </Questionmodal>
            }
            




            </div>


            <div>

            </div>

        </div>
    )

}

export default PersonalInfo










