import { useState, useRef, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function English(props) {
  const [exams, setExams] = useState([]);
  const currentQuestion = useRef(-1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [question, setQuestion] = useState("");
  const [numAnswered, setNumAnswered] = useState(-1);
  const [numCorrect, setNumberCorrect] = useState(0);
  const navigate = useNavigate();
  const firebaseConfig = {
    apiKey: "AIzaSyBxK_ycNbCxxmxdZ853SlghBZ3ZWX62lZA",
    authDomain: "eltd-c910c.firebaseapp.com",
    projectId: "eltd-c910c",
    storageBucket: "eltd-c910c.appspot.com",
    messagingSenderId: "1086624091657",
    appId: "1:1086624091657:web:c5ca7e7fc9ef658889f2d8"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  useEffect(generateQuestion, [exams]);
  useEffect(() => {
    async function fetchData() {
      currentQuestion.current = 0; //reset currentQuestion

      const examCollection = collection(db, "English");
      console.log(props.unit);
      const queryExam =
        props.unit === 0
          ? query(examCollection, orderBy("unit"))
          : query(examCollection, where("unit", "==", props.unit));

      try {
        const querySnapshot = await getDocs(queryExam);
        const temp = [];
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
          console.log(`${doc.id} => ${doc.data().question}`);
        });
        setExams(() => [...temp]);
        //set the first question here
        setQuestion(temp[0].question);
        setResult("");
      } catch (error) {
        setResult(error.code);
        navigate("/signin");
      }
    }

    fetchData();
    // eslint-disable-next-line
  }, [props.unit]);
  console.log(exams);

  function generateQuestion() {
    if (currentQuestion.current + 1 < exams.length) {
      currentQuestion.current++;
      setQuestion(exams[currentQuestion.current].question);
      setNumAnswered((currentNumAnswer) => currentNumAnswer + 1);
    }
  }
  function onChangeAnswer(event) {
    setAnswer(event.target.value);
    if (event.target.value === exams[currentQuestion.current].answer) {
      setResult(" CORRECT!");
      setNumberCorrect(numCorrect + 1);
    } else {
      setResult(" WRONG! ");
    }
  }

  return (
    <div>
      <br />
      <TextField
        id="answer"
        label={question}
        value={answer}
        onChange={onChangeAnswer}
      />

      {result}
      <Button variant="contained" onClick={generateQuestion}>
        下一題
      </Button>
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
