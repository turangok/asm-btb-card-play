import styled from 'styled-components';
import { StyledButton } from 'components';

export const StyledStart = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

export const StyledWrapper = styled.div`
  ${StyledButton} {
    margin: 0 0 0.06rem 0.4rem;
    transform: translate(0, -0.1rem);
    padding: 0.4rem 0.6rem;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 0;
`;

export const StyledError = styled.span`
  color: ${(p) => p.theme.amaranth};
  margin-top: 0.3rem;
  display: block;
`;