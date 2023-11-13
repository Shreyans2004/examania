import Question from "./Components/Question"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Guidelines from "./Components/Guidelines"
import Result from "./Components/Result"
import Navbar from "./Components/Navbar"
import Questions1 from "./Components/Questions1"
import Exam_entry from "./Components/Exam_entry"
import QuestionUpload from "./pages/QuestionUpload"
import Exam from "./pages/Exam" ;
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Exam_entry/>}></Route>
        <Route path="/result" element={<Login/>}></Route>
        <Route path="/guidelines" element={<Guidelines/>}></Route>
        <Route path="/question" element={<Question/>}></Route>
        <Route path="/question-upload" element={<QuestionUpload/>}></Route>
        <Route path="/exam" element={<Exam /> }></Route>
        <Route path="/login" element={<Login /> }></Route>
      </Routes>
    </>
  );
}

export default App;
