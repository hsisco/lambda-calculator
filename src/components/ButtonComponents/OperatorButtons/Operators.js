import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

const Operators = () => {
  const [operatorsState] = useState(operators);
  return (
    <div className = 'operators-container'>{
        operatorsState.map((operators, index) => (
          <OperatorButton key = {index} operators = {operators} />
        ))}
    </div>
  )
};

export default Operators;
