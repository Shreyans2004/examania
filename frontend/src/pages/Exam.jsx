import axios from 'axios'
import { useState, useEffect } from 'react'
import Question from '../Components/Question';
import  {backendURL} from '../constants.js' ;
import Timer from '../Components/Timer.jsx';
import Questions1 from '../Components/Questions1.jsx';
import "../styles/Exam.css"
const Exam = () => {
  console.log(backendURL);
  const [quesData,setQuesData] = useState([]) ;

  useEffect(() => {
    const fetchAllQues = async () => {
      try {
        const response = await axios.get(`${backendURL}/questions`) ;
        console.log(response.data)
        setQuesData(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllQues() ;
  }, []) ;

  return (
    <div>
    <div className='main'>
      <Question/>
      <div className='right'>
      <Timer/>
      <Questions1/>
      </div>
</div>
      {/* <Question ques={quesData[i]}  /> */}
    </div>
  )
}

export default Exam ;