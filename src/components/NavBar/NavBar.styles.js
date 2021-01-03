import styled from 'styled-components';

export const StyledNavBar = styled.div`
  background-color: ${p => p.theme.dukeBlue};
  height: 4rem;
  color: ${(p) => p.theme.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5rem;
  color: ${(p) => p.theme.white};
  padding: 0.5rem;

  a {
    text-decoration: none;
    color: ${(p) => p.theme.white};
    display: inline-block;
  }
`;
