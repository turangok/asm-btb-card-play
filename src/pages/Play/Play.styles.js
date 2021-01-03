import styled from 'styled-components';

export const StyledPlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.25rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: ${(p) => p.theme.sapphire};
  max-width: 50rem;
  width: 60%;
`;

export const StyledPoints = styled.h5`
  margin: 1rem 0;
  text-align: center;
  color: ${(p) => p.theme.amaranth};
  
`;
