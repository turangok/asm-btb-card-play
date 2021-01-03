import styled from 'styled-components';

export const StyledCard = styled.div``;

export const StyledCardBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledCardFront = styled.div`
  transform: rotateY(180deg);
  line-height: 6.88rem;
  text-emphasis: none;
`;

export const StyledImage = styled.img`
  vertical-align: middle;
  width: 80%;
  max-width: 9.38rem;
  max-height: 85%;
`;

export const StyledCardInner = styled.div`
  width: 20%;
  user-select: none;
  height: 7rem;
  padding: 0.63rem;
  box-sizing: border-box;
  text-align: center;
  margin: 1rem;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;

  div {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.63rem;
    transition: 0.6s;
    background: ${(p) => p.theme.white};
  }
  &.flipped {
    transform: rotateY(180deg);
  }
  &.matched {
    transform: rotateY(180deg);
    ${StyledCardFront} {
      box-shadow: 0 0 0 0.13rem rgba(#000, 0.05) inset;
      animation: selected 0.8s 0s ease 1;
      animation-fill-mode: both;
      opacity: 0.2;
    }
  }
`;
