import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from "../../redux/Hooks";
import { emptyData } from '../../redux/reducer/dataReducer';
import "./ResultPage.css"

type props = {
  getData : string[]
}

const ResultPage: React.FunctionComponent<props> = ({getData}) => {

  const dispatch = useAppDispatch()
  const reData = useAppSelector(state => state.dataReducer.dataAns)
  var numb=0

  // console.log(data, "reduxansdata")

  const emptyArr = () => {
      dispatch(emptyData(""))
      numb = 0
  }

  for (var _i = 0; _i < reData.length; _i++) {
      var num = reData[_i];
      if (num ===  "true"){
      numb = numb+1
      }
  }

    return (
      <div>
                    <div>                    
                        <div>
                        <Link to="/"><button onClick = {emptyArr} className = "btn-start">Start Again</button></Link>
                        <h2>Questions are completed & score is : {numb}</h2>

                          <div>
                          <div>
                                    <table>
                                    <tr>
                                            <th>Question</th>
                                            <th>Answer</th>
                                            <th>Result</th>
                                          </tr>
                            {getData && getData.map((data:any, index:number)=>{
                                    return (
                                    <>
                                    {/* <p>{data.question}</p> */}
                                    
                                          <tr>
                                            <td>{data.question}</td>
                                            <td>{data.correct_answer}</td>
                                            <td>{reData[index]}</td>
                                          </tr>
                                     
                                    </>
                                  )
                                    })}
                                    
                                    </table>
                                    </div>
                            </div>
                        </div>
                
            </div>
      </div>
  );
};

export default ResultPage;
