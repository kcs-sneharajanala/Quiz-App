import * as React from 'react';
import {useState , useEffect} from "react";
import "./template.css";
import axios from "axios";

type props = {
    allData: any;
}

const App: React.FunctionComponent<props> = ({allData}) => {

    let [questions , setQuestion]  = useState([] as string[])
    const getData = async() => {
        const {data} = await axios.get("./Questions.json")
        setQuestion(data)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(questions)
  return(
      <button onClick={() => allData(questions)}>Start Quiz</button>
  ) ;
};

export default App;

// function initialState<T>(initialState: any, arg1: {}): [any, any] {
//     throw new Error('Function not implemented.');
// }
