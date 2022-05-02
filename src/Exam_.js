import "./styles.css";
import English from "./English";
import { useState } from "react";
import AppMenu from "./UI/AppMenu";

export default function Exam() {
  const NUM_UNITS = 2;
  const [currentExam, setCurrentExam] = useState(0);
  function onChangeExam(event) {
    setCurrentExam(Number(event.target.value));
  }

  function next() {
    if (currentExam < NUM_UNITS) {
      setCurrentExam(currentExam + 1);
    }
  }

  function getCurrentExam() {
    return <English unit={currentExam} next={next} />;
  }

  return (
    <div className="App">
      <AppMenu />
      <h1>連接FireBase和規則限制demo</h1>
      <select name="exam" value={currentExam} onChange={onChangeExam}>
        <option value={0}>所有單元</option>
        <option value={1}>單元1</option>
        <option value={2}>單元2</option>
      </select>

      {getCurrentExam()}
    </div>
  );
}
