import React from "react";

const SpecialButton = ({ specials }) => {
  console.log(specials)
  
  return (
    <button className = 'spclbtn'>{specials}
    </button>
  );
};

export default SpecialButton;