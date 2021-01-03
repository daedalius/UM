import styled from 'styled-components';

import normal from './backgrounds/normal.png';
import hover from './backgrounds/hover.png';

export const StyledButton = styled.button`
  padding: 0 ${(props) => (props.size === 'sm' ? '24px' : '48px')};
  height: ${(props) => (props.size === 'sm' ? '32px' : '64px')};

  font-size: ${(props) => (props.size === 'sm' ? '24px' : '48px')};
  font-family: Bedel Basic Italic;

  border: none;
  outline: none;

  background-color: transparent;
  background-image: url(${normal});
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &:hover,
  &:active {
    background-image: url(${hover});
  }

  cursor: pointer;
`;
