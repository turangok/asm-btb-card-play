import styled from 'styled-components';

export const StyledPlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.25rem;
`;

export const StyledContainer = styled.div`
  background: ${(p) => p.theme.sapphire};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50rem;
  color: ${(p) => p.theme.amaranth};
`;

export const StyledPoints = styled.h5`
  margin: 1rem 0;
  text-align: center;
  color: ${(p) => p.theme.amaranth};
  
`;
