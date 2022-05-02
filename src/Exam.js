import "./styles.css";
import Add from "./Add";
import Minus from "./Minus";
import Chemistry from "./Chemistry";
import ChemistryMultiple from "./ChemistryMultiple";
import ChemistryRadio from "./ChemistryRadio";
import MathRandom from "./MathRandom";
import { useEffect, useState } from "react";
import AppMenu from "./UI/AppMenu";

export default function App() {
  const [currentExam, setCurrentExam] = useState(0);
  function onChangeExam(event) {
    setCurrentExam(Number(event.target.value));
  }
  function next() {
    setCurrentExam(currentExam + 1);
  }

  function getCurrentExam() {
    console.log(currentExam);
    switch (currentExam) {
      case 0:
        return <Add next={next} currentExam={currentExam} />;
      case 1:
        return <Minus next={next} currentExam={currentExam} />;
      case 2:
        return <MathRandom next={next} currentExam={currentExam} />;
      case 3:
        return <Chemistry next={next} currentExam={currentExam} />;
      case 4:
        return <ChemistryRadio next={next} currentExam={currentExam} />;
      default:
        return (
          <ChemistryMultiple
            setCurrentExam={setCurrentExam}
            currentExam={currentExam}
          />
        );
    }
  }
  useEffect(getCurrentExam, [currentExam]);

  return (
    <div className="App">
      <AppMenu />
      <h1>React Hook 基礎demo</h1>
      <select name="exam" onChange={onChangeExam} value={currentExam}>
        <option value={0}>數學加法題</option>
        <option value={1}>數學減法題</option>
        <option value={2}>數學隨機加減法題</option>
        <option value={3}>化學符號簡答題</option>
        <option value={4}>化學化學符號選擇題</option>
        <option value={5}>化學元素家族</option>
      </select>
      {getCurrentExam()}
    </div>
  );
}
