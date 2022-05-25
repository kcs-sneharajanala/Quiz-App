import * as React from 'react';
import "./template.css"

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return(
      <div className='question-component'>
          <div className='question'>
              <h3>Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?</h3>
          </div>
          <div className='answers'>
              <p>Richard Branson</p>
              <p>Alan Sugar</p>
              <p>Donald Trump</p>
              <p>Bill Gates</p>
          </div>
      </div>
  ) ;
};

export default App;
