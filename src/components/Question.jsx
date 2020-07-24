import React from "react";

export const Question = ({ questions, children }) => {
  return (
    <div>
      {console.log(questions)}
      {questions.map((question, index) => {
        const { name, age, position } = question;
        console.log(name, age, position, index);

        return (
          <div key={index}>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{position}</p>
          </div>
        );
      })}
    </div>
  );
};
