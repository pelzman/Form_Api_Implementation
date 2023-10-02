import Dropdown from "./QuestionCompFolder/DropdownQ"
import MultipleQ from "./QuestionCompFolder/MultipleQ"
import YesorNoQ from "./QuestionCompFolder/YesorNoQ"
import VideoBasedQ from "./QuestionCompFolder/VideoBasedQ"
import ParagraphQuestion from "./QuestionCompFolder/ParagraphQuestion"

const questionTypeToCompObj = {

    "Paragraph": ParagraphQuestion,    
    "Yes/No" : YesorNoQ,
    "Dropdown" : Dropdown,
    "Multiple Choice":MultipleQ,   
    "Video question":VideoBasedQ

}
export default questionTypeToCompObj