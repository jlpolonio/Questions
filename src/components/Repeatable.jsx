import React from "react";

export const Repeatable = props => {
  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "999px",
        background: "blue",
        color: "white",
        fontSize: "40px"
      }}
      onClick={props.addQuestions}
    >
      +
    </button>
  );
};
