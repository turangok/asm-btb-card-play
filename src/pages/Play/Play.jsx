import React, { useState } from 'react';
import { Card, GameResult } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { updateScoreBoard } from 'store/actions/scoreBoardActions';
import { useHistory } from 'react-router-dom';
import { CARDS as cards } from '../../config/constants';

import { StyledPlay, StyledContainer, StyledPoints } from './Play.styles';

const Play = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.name);
  const [currentScore, setCurrentScore] = useState(100);
  const history = useHistory();
  !currentUser && history.push('/');

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  const [cardList, setCardList] = useState(
    shuffle(cards).map((name, index) => {
      return {
        id: index,
        name: name,
        flipped: false,
        matched: false,
      };
    })
  );

  const [flippedCards, setFlippedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (name, index) => {
    let currentCard = {
      name,
      index,
    };

    let updateCards = cardList.map((card) => {
      if (card.id === index) {
        card.flipped = true;
      }
      return card;
    });

    let updateFlipped = flippedCards;
    updateFlipped.push(currentCard);
    setFlippedCards(updateFlipped);
    setCardList(updateCards);
    if (flippedCards.length === 2) {
      setTimeout(() => {
        check();
      }, 800);
    }
  };

  const check = () => {
    let updateCards = cardList;
    if (
      flippedCards[0].name === flippedCards[1].name &&
      flippedCards[0].index !== flippedCards[1].index
    ) {
      updateCards[flippedCards[0].index].matched = true;
      updateCards[flippedCards[1].index].matched = true;
      isGameOver();
    } else {
      updateCards[flippedCards[0].index].flipped = false;
      updateCards[flippedCards[1].index].flipped = false;

      if (currentScore <= 5) {
        setGameOver(true);
      }
      currentScore > 0 && setCurrentScore(currentScore - 5);
    }
    setCardList(updateCards);
    setFlippedCards([]);
  };

  const isGameOver = () => {
    let done = true;
    cardList.forEach((card) => {
      if (!card.matched) done = false;
    });
    setGameOver(done);

    // Send score to scoreBoard
    if (done === true) {
      dispatch(updateScoreBoard({ name: currentUser, score: currentScore }));
    }
  };

  const restartGame = () => {
    setCardList(
      shuffle(cards).map((name, index) => {
        return {
          id: index,
          name: name,
          flipped: false,
          matched: false,
        };
      })
    );

    setFlippedCards([]);
    setGameOver(false);
    setCurrentScore(100);
  };

  return (
    <StyledPlay data-testid="playId">
      <StyledContainer>
        {cardList.map((card, index) => (
          <Card
            key={index}
            id={index}
            name={card.name}
            flipped={card.flipped}
            matched={card.matched}
            clicked={flippedCards.length === 2 ? () => {} : handleClick}
          />
        ))}
      </StyledContainer>
      {!gameOver && (
        <StyledPoints>{`Your current points: ${currentScore}`}</StyledPoints>
      )}
      {gameOver && (
        <GameResult
          userId={currentUser}
          score={currentScore}
          restartGame={restartGame}
        />
      )}
    </StyledPlay>
  );
};

export default Play;
