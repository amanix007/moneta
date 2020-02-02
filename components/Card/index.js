import PropTypes from 'prop-types';
import React from 'react';

function Card(props) {
  const displayName = "Card";

  return (
    <div className={`${displayName} ${displayName}__border`}>
      <div className={`${displayName}__flipper`}>
        <div className={`${displayName}__front`}>
          {props.front}
        </div>
        <div className={`${displayName}__back`}>
          {props.back}
        </div>
      </div>
    </div>
  );
}

export default Card;
