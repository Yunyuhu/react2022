import "./styles.css";
import { useState, useRef } from "react";

export default function Choose(props) {
  let exams = [
    {
      question: "氫",
      answer: "3",
      options: ["He", "T", "Ti", "H"]
    },
    {
      question: "氧",
      answer: "1",
      options: ["Y", "O", "Ir", "I"]
    },
    {
      question: "氦",
      answer: "1",
      options: ["Hi", "He", "H", "Ha"]
    }
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
      setResult("正確");
    } else {
      setResult("錯誤");
    }
  }

  return (
    <div>
      <h4>--單選題--</h4>
      {question}的元素符號是:
      <input
        type="radio"
        name="user_input"
        value="0"
        onChange={onChangeAnswer}
      />
      {exams[currentQuestion.current].options[0]}
      <input
        type="radio"
        name="user_input"
        value="1"
        onChange={onChangeAnswer}
      />
      {exams[currentQuestion.current].options[1]}
      <input
        type="radio"
        name="user_input"
        value="2"
        onChange={onChangeAnswer}
      />
      {exams[currentQuestion.current].options[2]}
      <input
        type="radio"
        name="user_input"
        value="3"
        onChange={onChangeAnswer}
      />
      {exams[currentQuestion.current].options[3]}
      <h3 style={{ marginRight: "20px" }}>{result} </h3>
      <button onClick={generateQuestion}>下一題</button>
    </div>
  );
}
