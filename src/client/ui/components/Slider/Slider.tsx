import * as React from 'react';

import { SliderProps } from './interfaces';

import { StyledWrapper, StyledButton, StyledValue } from './styles.ts';

export class Slider extends React.PureComponent<SliderProps> {
  render() {
    const { name, value, options } = this.props;

    const valueText = options.find((i) => i.value === value).text;

    return (
      <StyledWrapper className="slider" data-test-name={name}>
        <StyledButton
          type="button"
          className="slider__previous-value-button"
          data-test-name="slider-previous-value-button"
          disabled={!this.isPreviousValueButtonActive()}
          onClick={this.handlePrevoiusValueButtonClick}
          value="<"
        />
        <StyledValue className="slider__value" data-test-name="slider-value">
          {valueText}
        </StyledValue>
        <StyledButton
          type="button"
          className="slider__next-value-button"
          data-test-name="slider-next-value-button"
          disabled={!this.isNextValueButtonActive()}
          onClick={this.handleNextValueButtonClick}
          value=">"
        />
      </StyledWrapper>
    );
  }

  private getCurrentValueIndex = () => {
    const { value, options } = this.props;
    const item = options.find((i) => i.value === value);
    return options.indexOf(item);
  };

  private isPreviousValueButtonActive = () => {
    const currentValueIndex = this.getCurrentValueIndex();
    return currentValueIndex > 0;
  };

  private isNextValueButtonActive = () => {
    const currentValueIndex = this.getCurrentValueIndex();
    return currentValueIndex < this.props.options.length - 1;
  };

  private handlePrevoiusValueButtonClick = () => {
    const currentValueIndex = this.getCurrentValueIndex();

    if (currentValueIndex !== 0) {
      const { options } = this.props;
      this.props.onChange(options[currentValueIndex - 1].value);
    }
  };

  private handleNextValueButtonClick = () => {
    const currentValueIndex = this.getCurrentValueIndex();

    const { options } = this.props;
    if (currentValueIndex !== options.length - 1) {
      this.props.onChange(options[currentValueIndex + 1].value);
    }
  };
}
