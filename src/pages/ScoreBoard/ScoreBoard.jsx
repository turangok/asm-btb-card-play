import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'components';
import { StyledScoreBoard } from './ScoreBoard.styles';
import { useHistory } from 'react-router-dom';

const ScoreBoard = () => {
  const scores = useSelector((state) => state.scoreBoard.scoreBoard);
  const history = useHistory();

  return (
    <StyledScoreBoard>
      <Button onClick={() => history.push('/play')}>Restart the game</Button>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Last Score</th>
              <th scope="col">Highest Score</th>
            </tr>
          </thead>
          <tbody>
            {scores?.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.score.last}</td>
                  <td>{item.score.high}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledScoreBoard>
  );
};

export default ScoreBoard;
