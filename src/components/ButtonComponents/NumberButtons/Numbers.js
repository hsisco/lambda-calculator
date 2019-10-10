import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

const Numbers = () => {
  const [numbersState] = useState(numbers);
  return (
    <div className = 'numbers-container'>{
        numbersState.map((numbers, index) => (
          <NumberButton key = {index} numbers = {numbers} />
        ))}
    </div>
  );
};

export default Numbers;
