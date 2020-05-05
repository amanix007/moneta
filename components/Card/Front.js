import React from 'react';

export const Front = ({
  question,
  onGuess,
}) => (
  <div>
    <div>
      {question}
    </div>
    <button onClick={() => onGuess(true)}>Guess</button>
  </div>
);
