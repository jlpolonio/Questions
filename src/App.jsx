import React, { useState } from "react";
import "./styles.css";
import { Question } from "./Question";
import { Repeatable } from "./Repeatable";

const listQuestion = {
  name: "Jose Luis",
  age: 32,
  position: "Solution Analyst"
};

export default function App() {
  const [question, setQuestion] = useState([listQuestion]);

  const addQuestions = () => {
    // console.log(list);
    // let list = question;
    let list = [...question];
    list.push(listQuestion);
    setQuestion(list);
    console.log("Sale");
  };

  return (
    <div className="App">
      <Repeatable addQuestions={addQuestions} />
      <Question questions={question} />
    </div>
  );
}
