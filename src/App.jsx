import React, { useState } from "react";
import "./styles.css";
import { Question } from "./components/Question";
import { Repeatable } from "./components/Repeatable";

const listQuestion = {
  name: "Jose Luis",
  age: 32,
  position: "Solution Analyst"
};

export default function App() {
  const [question, setQuestion] = useState([listQuestion]);

  const addQuestions = () => {
    let list = [...question];
    list.push(listQuestion);
    setQuestion(list);
  };

  return (
    <div className="App">
      <Repeatable addQuestions={addQuestions} />
      <Question questions={question} />
    </div>
  );
}
