import styled from 'styled-components';

export const StyledButton = styled.button`
    outline: none;
    font-family: 'SFProText-Regular', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.02rem;
    line-height: 1.1875rem;
    text-align: center;
    box-sizing: border-box;
    padding: 0.75rem 1.6875rem 0.6875rem;
    border-radius: 0.3125rem;
    white-space: nowrap;
    cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
    color: ${(p) => p.theme.white};
    border: 0.06rem solid ${(p) => p.theme.white};
    background-color: ${(p) =>
        p.disabled
            ? p.theme.doveGrey
            : p.theme.royalBlue};

    span {
        margin-right: 0.5625rem;
    }
`;