import  React, {useState} from 'react';

type props = {
    getAnswers : string[];
    getIndex : number;
    sendIndex : (arg: string[]) => void;
}

const Answer: React.FunctionComponent<props> = ({getAnswers, getIndex, sendIndex}) => {
    const[ansIndex, setAnsIndex] = useState<any>()

    const indexChange = (index : number) => {
        setAnsIndex(ansIndex+1)
        sendIndex(ansIndex)
    }
  return (
      <div>
          <button onClick = {() => indexChange(getIndex)} >{getAnswers}</button>
      </div>
  );
};

export default Answer;
