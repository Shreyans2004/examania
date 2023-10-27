import axios from 'axios'
import { useState, useEffect } from 'react'
import Question from '../Components/Question';
import  {backendURL} from '../constants.js' ;

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
      Exam
      {/* <Question ques={quesData[i]}  /> */}
    </div>
  )
}

export default Exam ;