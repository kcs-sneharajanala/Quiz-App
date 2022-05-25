import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Template from "./Components/Template/Template"

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Template/>
    </div>
  );
}

export default App;
