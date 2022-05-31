import  React,{useState} from 'react';
import Answer from '../Answer/Answer';
import {Navigate} from "react-router-dom";
import "./QuestionCard.css"

type props = {
    questionsIn : string[];
}

const QuestionCard: React.FunctionComponent<props> = ({questionsIn}) => {

    const[indexQues, setIndexQues] = useState<number>(1)
    const [counter, setCounter] = useState<number>(20);

    const indexChange = () => {
        setIndexQues(indexQues+1)
        setCounter(20)
    }

    React.useEffect(() => {
        const timer =
        setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);
    
      if(counter < 0){
          setCounter(5)
          indexChange()
      }

      const quesInfo = () =>{ if(indexQues <= 20){
        return (
        <div className = "card">
            <p>Countdown : {counter}</p>
          {questionsIn && questionsIn.map((data : any, index:number) => {
              return(
                <>
                {index+1 === indexQues &&
                <div>
                <div className="Question-1" key={data.id}>

                    <h2>Question {index+1}: {data.question}</h2>
               
                    {data.answers.map((res : any) => {
                        return(
                            <div>
                                <Answer getAnswers = {res} getIndex = {indexQues} sendIndex = {indexChange} correctAns={data.correct_answer}/>
                            </div>
                        )
                    })}           
                </div>
                </div>}
                </>
              )
          })}
          
      </div>
        )}
    }

    if(indexQues >= 21){
        return  <Navigate to = "/ResultPage"/>
    }

    return(
      <>
          {quesInfo()}
      </>
  ) 
};

export default QuestionCard;
