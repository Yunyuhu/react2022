import "./styles.css";
import { useState, useRef } from "react";

export default function Chemistry(props) {
  let exams = [
    {
      question: "請列出一個鹼金屬元素",
      answers: ["鋰", "鈉", "鉀", "銣", "銫", "鍅"]
    },
    {
      question: "請列出一個鹼土金屬元素",
      answers: ["鈹", "鎂", "鈣", "鍶", "鋇", "鐳"]
    },
    {
      question: "請列出一個稀有氣體",
      answers: ["氦", "氖", "氬", "氪", "氙", "氡"]
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
      props.setCurrentExam(0);
    }
  }

  function onChangeAnswer(event) {
    setAnswer(event.target.value);
    if (exams[currentQuestion.current].answers.includes(event.target.value)) {
      // if (event.target.value === exams[currentQuestion.current].answers) {
      setResult("正確");
    } else {
      setResult("錯誤");
    }
  }

  return (
    <div>
      <h4>--簡答題--</h4>
      {question}
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
