import PropTypes from 'prop-types';
import React, {
  useState,
} from 'react';

import { Front } from './Front';
import { Back } from './Back';

const Card = ({
  question,
  answer,
  onRating,
}) => {
  const displayName = "Card";

  const [guessMade, setGuessMade] = useState(false);

  return guessMade ? (
    <Back
      answer={answer}
      onRating={onRating}
    />
  ) : (
    <Front
      question={question}
      onGuess={setGuessMade}
    />
  );
}

export default Card;
