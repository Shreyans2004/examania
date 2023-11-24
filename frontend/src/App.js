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
import Home from "./pages/Home" ;
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
        <Route path="/guidelines" element={<Guidelines/>}></Route>
        <Route path="/question" element={<Question/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/exam" element={<Exam/> }></Route>
        <Route path="/Signup" element={<Signup/> }></Route>
      </Routes>
    </>
  );
}

export default App;
