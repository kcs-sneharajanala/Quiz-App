import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from "../../redux/Hooks";
import { emptyData } from '../../redux/reducer/dataReducer';

type props = {
  getData : string[]
}

const ResultPage: React.FunctionComponent<props> = ({getData}) => {

  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.dataReducer.dataAns)
  var numb=0

  const emptyArr = () => {
      dispatch(emptyData(""))
      numb = 0
  }

  for (var _i = 0; _i < data.length; _i++) {
      var num = data[_i];
      if (num ===  "true"){
      numb = numb+1
      }
  }

    return (
      <div>
                  <div>
                    
                        <div>
                          <div>

                            {getData && getData.map((data:any, index:number)=>{
                                    return (
                                    <>
                                    <p>{data.question}</p>
                                    </>
                                  )

                                    })}

                            </div>
                        </div>
                     <p>Questions are completed & score is : {numb}</p>
                <Link to="/"><button onClick = {emptyArr}>Start Again</button></Link>
            </div>
      </div>
  );
};

export default ResultPage;
