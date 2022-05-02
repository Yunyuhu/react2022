import "./styles.css";
import { useState, useRef } from "react";

export default function Chemistry(props) {
  let exams = [
    { question: "氫的化學符號", answer: "H" },
    { question: "氧的化學符號", answer: "O" },
    { question: "氦的化學符號", answer: "He" }
  ];
  const currentQuestion = useRef(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [question, setQuestion] = useState(exams[0].question);

  function generateQuestion() {
    if (currentQuestion.current + 1 < exams.length) {
      currentQuestion.current++;
      setQuestion(exams[currentQuestion.current].question);
    } else {
      props.next();
    }
  }

  function onChangeAnswer(event) {
    setAnswer(event.target.value);
    if (event.target.value === exams[currentQuestion.current].answer) {
      setResult("Correct");
    } else {
      setResult("Wrong");
    }
  }

  return (
    <div>
      <h4>--簡答題--</h4>
      {question}:
      <input
        type="text"
        name="answer"
        value={answer}
        onChange={onChangeAnswer}
      />
      <h3 style={{ marginRight: "20px" }}>{result} </h3>
      <button onClick={generateQuestion}>下一題</button>
    </div>
  );
}
