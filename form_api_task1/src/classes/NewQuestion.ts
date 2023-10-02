import {Question} from "../slice/dataSlice"
import { v4 as uuidv4 } from 'uuid';

export default class NewQuestion implements Question {
    readonly id: string;
    constructor(
        public choices: string[] = [],
        public disqualify: boolean = false,
        public maxChoice: number = 0,
        public other: boolean =  false,
        public question: string,
        public type: string
    ){
        this.id = uuidv4()
    }
}