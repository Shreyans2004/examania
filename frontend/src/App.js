import Question from "./Components/Question"
import Hero from "./Components/Hero"
import Guidelines from "./Components/Guidelines"
import Result from "./Components/Result"
import Navbar from "./Components/Navbar"
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

  </Routes>

    </>
  );
}

export default App;
