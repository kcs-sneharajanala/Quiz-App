import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import QuestionCard from './Components/QuestionCard/QuestionCard';
import ResultPage from './Components/Result/ResultPage';
import Template from "./Components/Template/Template";



function App() {
  const[storeData, setStoreData] = useState([] as string[])
  const storeFunction = (props:any) => {
    setStoreData(props)
  }
  
  console.log(storeData, "storedata")

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/QuestionCard" element = {<QuestionCard questionsIn = {storeData}/>}/>
        <Route path = "/" element = {<Template allData = {storeFunction}/>}/>
        <Route path = "/ResultPage" element = {<ResultPage getData= {storeData}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
