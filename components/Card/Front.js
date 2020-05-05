import React from 'react';

export const Front = ({
  data,
  onGuess,
}) => (
  <div>
    <div>
      {data}
    </div>
    <button onClick={() => onGuess(true)}>Guess</button>
  </div>
);
