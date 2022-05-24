import * as React from 'react';
import Header from "../Header/Header"
import "./home.css"

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return(
      <div className='Home'>
          {/* <Header/> */}
          <div className='content'>
              <h3>MCQ Questions and Each Has timer of 20sec</h3>
              <button>Start Quiz</button>
          </div>
      </div>
  ) ;
};

export default Home;
