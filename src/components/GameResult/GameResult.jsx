import React from 'react';
import PropTypes from 'prop-types';
import { StyledGameResult, StyledText } from './GameResult.styles';
import { useHistory } from 'react-router-dom';
import { Button } from 'components';
export const GameResult = ({ userId, score, restartGame }) => {
  const history = useHistory();

  return (
    <StyledGameResult data-testid="gameResultId">
      {score > 0 ? (
        <div>
          <StyledText>Congrats {userId} !</StyledText> <br />
          <StyledText>Your got {score} points from this game!</StyledText>
        </div>
      ) : (
        <StyledText>Sorry {userId}. You lost the game! </StyledText>
      )}
      <div>
        <Button onClick={restartGame}>Restart the game</Button>
        <Button onClick={() => history.push('/scoreboard')}>
          Go to scoreboard
        </Button>
      </div>
    </StyledGameResult>
  );
};

export default GameResult;

GameResult.propTypes = {
  userId: PropTypes.string,
  score: PropTypes.number,
  restartGame: PropTypes.func,
};
