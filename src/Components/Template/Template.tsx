import * as React from 'react';
import {useState , useEffect} from "react";
import "./template.css";
import axios from "axios";
import { Link } from 'react-router-dom';

type props = {
    allData: any;
}

const Template: React.FunctionComponent<props> = ({allData}) => {

    let [questions , setQuestion]  = useState([] as string[])
    const getData = async() => {
        const {data} = await axios.get("./Questions.json")

        const resetData = data.map((category : any) => {
            const indexIncorrect = category.incorrect_answers.length;
            const indexRandom = Math.random()*(indexIncorrect-0)+0;
            category.incorrect_answers.splice(
                indexRandom,
                0,
                category.correct_answer
            )
            return{
                ...category,
                answers: category.incorrect_answers
            }
        })
        setQuestion(resetData)       
    }

    useEffect(() => {
        getData()
    }, [])

    const arrSizeSet = (arr : any) => [...arr].sort(() => 0.5-Math.random()).slice(0,20);
    const newArr = arrSizeSet(questions)

  return(
      <Link to = "/QuestionCard"><button className = "btn-1" onClick={() => allData(newArr)}>Start Quiz</button></Link>
  ) ;
};

export default Template;

// function initialState<T>(initialState: any, arg1: {}): [any, any] {
//     throw new Error('Function not implemented.');
// }
