import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home";
import QuestionCard from './Components/QuestionCard/QuestionCard';
import ResultPage from './Components/Result/ResultPage';
import Template from "./Components/Template/Template";



function App() {
  const[storeData, setStoreData] = useState([] as string[])
  const storeFunction = (props:any) => {
    setStoreData(props)
  }
  console.log(storeData, "sssss")
  

  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <QuestionCard questionsIn = {storeData}/>
      <Template allData = {storeFunction}/>
      {/* <ResultPage/> */}
    </div>
  );
}

export default App;
