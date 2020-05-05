import PropTypes from 'prop-types';
import React, {
  useState,
} from 'react';

import { Front } from './Front';
import { Back } from './Back';

const Card = ({
  front,
  back,
  onRating,
}) => {
  const displayName = "Card";

  const [guessMade, setGuessMade] = useState(false);

  return guessMade ? (
    <Back
      data={back}
      onRating={onRating}
    />
  ) : (
    <Front
      data={front}
      onGuess={setGuessMade}
    />
  );
}

export default Card;
