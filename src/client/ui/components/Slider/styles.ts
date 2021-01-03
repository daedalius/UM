import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledButton = styled.input`
  height: 64px;

  border: none;
  background: none;
  outline: none;

  font-size: 48px;
  font-family: Bedel Basic Italic;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const StyledValue = styled.span`
  height: 64px;

  flex-grow: 1;
  text-align: center;

  font-size: 48px;
  font-family: Bedel Basic Italic;

  border: none;
  outline: none;

  cursor: default;
`;
