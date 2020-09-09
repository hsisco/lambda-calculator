import React from "react";

const OperatorButton = ({ operators }) => {
  console.log(operators)

  return (
    <button className = 'opratrbtn'>{operators.char}
    </button>
  );
};

export default OperatorButton;