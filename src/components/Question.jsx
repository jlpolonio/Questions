import React from "react";

export const Question = ({ questions }) => {
  return (
    <div>
      {console.log(questions)}
      {questions.map((item, index) => {
        return item.map((question, count) => {
          const { title, description, variable } = question;

          return (
            <div key={`${index}-${count}`}>
              <h1>{title}</h1>
              <p>{description}</p>
              <p>{variable}</p>
            </div>
          );
        })
      })}
    </div>
  );
};
