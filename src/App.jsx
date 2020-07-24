import React, { useState } from "react";
import "./styles.css";
import { Question } from "./components/Question";
import { Repeatable } from "./components/Repeatable";

const listQuestion = [
  {
    title: "This is a title one",
    description: "This is a description one",
    variable: "varA",
  },
  {
    title: "This is a title two",
    description: 'This is a description two',
    variable: "varB",
  },
  {
    title: "This is a title three",
    description: 'This is a description three',
    variable: "varC",
  },
];

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
