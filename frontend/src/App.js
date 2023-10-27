import Question from "./Components/Question"
import Hero from "./Components/Hero"
import Guidelines from "./Components/Guidelines"
import Result from "./Components/Result"
import Navbar from "./Components/Navbar"
import QuestionUpload from "./pages/QuestionUpload"
import Exam from "./pages/Exam" ;
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
        <Route path="/guidelines" element={<Guidelines/>}></Route>
        <Route path="/question" element={<Question/>}></Route>
        <Route path="/question-upload" element={<QuestionUpload/>}></Route>
        <Route path="/exam" element={<Exam /> }></Route>
      </Routes>
    </>
  );
}

export default App;
