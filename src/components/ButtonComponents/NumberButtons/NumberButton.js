import React from "react";

const NumberButton = ({ numbers }) => {
  console.log(numbers)
  
  return (
    <button className = 'numbrbtn'>{numbers}
    </button>
  );
};

export default NumberButton;