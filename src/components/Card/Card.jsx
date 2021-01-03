import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCardInner,
  StyledCardBack,
  StyledCardFront,
  StyledImage,
} from './Card.styles';

export const Card = ({ id, name, flipped, matched, clicked }) => {
  return (
    <StyledCardInner
      data-testid="cardId"
      onClick={() => (flipped ? undefined : clicked(name, id))}
      className={
        'card' + (flipped ? ' flipped' : '') + (matched ? ' matched' : '')
      }
    >
      <StyledCardBack>
        <StyledImage alt={name} src={'images/back.png'} />
      </StyledCardBack>
      <StyledCardFront>
        <StyledImage alt={name} src={'images/' + name + '.png'} />
      </StyledCardFront>
    </StyledCardInner>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  flipped: PropTypes.bool,
  matched: PropTypes.bool,
  clicked: PropTypes.func,
};
