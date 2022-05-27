import * as React from 'react';

type props = {
    endIndex : number;
}

const ResultPage: React.FunctionComponent<props> = ({endIndex}) => {
    console.log(endIndex,"end index")
    const endPage = (endIndex : number) => {if(endIndex === 21){
        return(
            <div>
                <p>Questions are completed</p>
                <button>Start Again</button>
            </div>
        )
    }}
  return (
      <div>
          {endPage(endIndex)}
      </div>
  );
};

export default ResultPage;
