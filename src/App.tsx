import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home";
import Template from "./Components/Template/Template"

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
      <Template allData = {storeFunction}/>
    </div>
  );
}

export default App;
