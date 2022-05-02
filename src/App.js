import "./styles.css";
import Exam1 from "./Exam";
import Exam2 from "./Exam_";
import Main from "./UI/Main";
import SignUp from "./Account/SignUp";
import SignIn from "./Account/SignIn";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <h1>測驗</h1> */}
        <Route path="/" element={<Main />} />
        <Route path="/exam" element={<Exam1 />} />
        <Route path="/english" element={<Exam2 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
