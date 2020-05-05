import React from 'react';

export const Back = ({
  data,
  onRating,
}) => (
  <div>
    <div>
      {data}
    </div>
    <button onClick={() => onRating(true)}>Got it</button>
    <button onClick={() => onRating(false)}>Wrong</button>
  </div>
);
