import "./styles.css";
import { useEffect, useState, useRef } from "react";

export default function Minus(props) {
  const [question, setQuestion] = useState(0);
  const correctAnswer = useRef(0);

  const [answer, setAnswer] = useState(0);
  const [result, setResult] = useState("");
  const [numAnswered, setNumAnswered] = useState(0);
  const [numCorrect, setNumberCorrect] = useState(0);

  useEffect(generateQuestion, []);
  function generateQuestion() {
    let firstNum = Math.floor(Math.random() * 10);
    let secondNum = Math.floor(Math.random() * 10);

    if (firstNum > secondNum) {
      setQuestion(firstNum + "-" + secondNum + "=");
      correctAnswer.current = firstNum - secondNum;
    } else {
      setQuestion(secondNum + "-" + firstNum + "=");
      correctAnswer.current = secondNum - firstNum;
    }

    setNumAnswered(numAnswered + 1);
    if (numAnswered >= 10 && numCorrect / numAnswered >= 9 / 10) {
      props.next();
    }
  }

  function onChangeAnswer(event) {
    setAnswer(event.target.value);
    if (Number(event.target.value) === correctAnswer.current) {
      setResult(" CORRECT! ");
      setNumberCorrect(numCorrect + 1);
    } else {
      setResult(" WRONG! ");
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
      {result}
      <button onClick={generateQuestion}>下一題</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <h3 style={{ marginRight: "20px" }}>AnsNum: {numAnswered} </h3>
        <h3>CorrectNum: {numCorrect}</h3>
      </div>
    </div>
  );
}
