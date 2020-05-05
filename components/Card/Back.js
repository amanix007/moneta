import React from 'react';
import { LEARNING, LEARNED } from '../../constants/card';

export const Back = ({
  answer,
  onRating,
}) => (
  <div>
    <div>
      {answer}
    </div>
    <button onClick={() => onRating(LEARNED)}>Got it</button>
    <button onClick={() => onRating(LEARNING)}>Wrong</button>
  </div>
);
