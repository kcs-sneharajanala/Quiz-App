import  React, {useState} from 'react';
import {useAppDispatch} from "../../redux/Hooks";
import { ansData } from '../../redux/reducer/dataReducer';

type props = {
    getAnswers : string[];
    getIndex : number;
    sendIndex : (arg: string[]) => void;
    correctAns : string;
}

const Answer: React.FunctionComponent<props> = ({getAnswers, getIndex, sendIndex, correctAns}) => {
    const[ansIndex, setAnsIndex] = useState<any>()

    const dispatch = useAppDispatch()

    const indexChange = (index : number) => {
        setAnsIndex(ansIndex+1)
        sendIndex(ansIndex)
    }
    const True = "true"
    const False = "false"

    const checkAns = (ans : any) => {
        console.log(correctAns, "crctans", ans)

        if(correctAns === ans){
            dispatch(ansData(True))
        }else{
            dispatch(ansData(False))
        }
    }
  return (
      <div>
          <button onClick = {() => {indexChange(getIndex); checkAns(getAnswers)}} >{getAnswers}</button>
      </div>
  );
};

export default Answer;
