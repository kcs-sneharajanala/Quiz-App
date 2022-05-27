import  React,{useState} from 'react';
import Answer from '../Answer/Answer';
import ResultPage from '../Result/ResultPage';
import Timer from '../Timer/Timer';

type props = {
    questionsIn : string[];
}

const QuestionCard: React.FunctionComponent<props> = ({questionsIn}) => {

    const[indexQues, setIndexQues] = useState<number>(1)

    const indexChange = () => {
        setIndexQues(indexQues+1)
    }

    const quesInfo = () =>{
        return (
        <div>
          {questionsIn && questionsIn.map((data : any, index:number) => {
              return(
                <>
                {console.log(data.question, indexQues)}
                <Timer/>
                {index+1 === indexQues &&
                <div>
                <div className="Question-1" key={data.id}>

                    <p>{data.question}</p>
               
                    {data.answers.map((res : any) => {
                        return(
                            <div>
                                <Answer getAnswers = {res} getIndex = {indexQues} sendIndex = {indexChange}/>
                            </div>
                        )
                    })}           
                </div>
                </div>}
                </>
              )
              

          })}
          
      </div>
        )
    }

    return(
      <>
          {quesInfo()}
          <button onClick = {indexChange}>Next</button>
          <ResultPage endIndex = {indexQues}/>
      </>
  ) 
};

export default QuestionCard;
