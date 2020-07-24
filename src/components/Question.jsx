import React from "react";

export const Question = ({ questions }) => {
  return (
    <div>
      {console.log(questions)}
      {questions.map((question, index) => {
        const { name, age, position } = question;

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
