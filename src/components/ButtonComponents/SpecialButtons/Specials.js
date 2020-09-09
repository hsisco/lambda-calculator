import React, { useState } from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

const Specials = () => {
  const [specialState] = useState(specials);
  return (
    <div className = 'specials-container'>{
        specialState.map((specials, index) => (
          <SpecialButton key = {index} specials = {specials} />
        ))}
    </div>
  );
};

export default Specials;
