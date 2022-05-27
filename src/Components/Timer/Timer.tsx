import React, {useState} from 'react';

type props = {

}

const Timer: React.FunctionComponent< props> = (props) => {
    const [counter, setCounter] = useState<number>(6);

  // Third Attempts
  React.useEffect(() => {
    const timer =
    setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  if(counter < 0){
      setCounter(5)
  }

  return (
    <div className="App">
    <div>Countdown: {counter}</div>
    </div>

  );
};

export default Timer;
