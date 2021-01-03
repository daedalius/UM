import * as React from 'react';
import { ButtonProps } from './interfaces';
import { StyledButton } from './styles';

export class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { size = 'lg', onClick, text, name } = this.props;

    return (
      <StyledButton size={size} className="button" data-test-name={name} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }
}
