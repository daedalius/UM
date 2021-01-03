/// <reference types="cypress" />

import * as React from 'react';
import { mount } from '@cypress/react';

import { Slider } from './Slider';

/**
 * <Slider />
 * * should have
 * * * button to choose previous value
 * * * button to choose next value
 * * * current value
 * * if first value selected
 * * * previous value button should be disabled
 * * * next value button generates onChange event
 * * * previous value button doesn't generate onChange event
 * * if the last value selected
 * * * next value button should be disabled
 * * * previous value button generates onChange event
 * * * next value button doesn't generate onChange event
 */

describe('<Slider>', () => {
  const sliderProps = {
    name: 'difficulty',
    options: [
      { value: '0', text: 'easy' },
      { value: '1', text: 'medium' },
      { value: '2', text: 'hard' },
    ],
    onChange: (value) => {},
  };

  describe('should have', () => {
    it('button to choose previous value', () => {
      mount(<Slider {...sliderProps} value="1" />);
      cy.get('div[data-test-name=difficulty] input[data-test-name=slider-previous-value-button]');
    });
    it('button to choose next value', () => {
      mount(<Slider {...sliderProps} value="1" />);
      cy.get('div[data-test-name=difficulty] input[data-test-name=slider-next-value-button]');
    });
    it('current value', () => {
      mount(<Slider {...sliderProps} value="1" />);
      cy.get('div[data-test-name=difficulty] [data-test-name=slider-value]').contains('medium');
    });
  });

  describe('if first value selected', () => {
    it('previous value button should be disabled', () => {
      mount(<Slider {...sliderProps} value="0" />);
      cy.get('div[data-test-name=difficulty] input[data-test-name=slider-previous-value-button]').should('be.disabled');
    });

    it(`next value button generates onChange event`, () => {
      const handlers = {
        onChange() {},
      };
      const onChangeSpy = cy.spy(handlers, 'onChange');

      mount(<Slider {...sliderProps} value="0" onChange={handlers.onChange} />).then(() => {
        cy.get('div[data-test-name=difficulty] input[data-test-name=slider-next-value-button]')
          .click({ force: true })
          .then(() => {
            expect(onChangeSpy).to.be.called;
            expect(onChangeSpy).to.be.calledWith('1');
          });
      });
    });

    it(`previous value button doesn't generate onChange event`, () => {
      const handlers = {
        onChange() {},
      };
      const onChangeSpy = cy.spy(handlers, 'onChange');

      mount(<Slider {...sliderProps} value="0" onChange={handlers.onChange} />).then(() => {
        cy.get('div[data-test-name=difficulty] input[data-test-name=slider-previous-value-button]')
          .click({ force: true })
          .then(() => {
            expect(onChangeSpy).not.to.be.called;
          });
      });
    });
  });

  describe('if the last value selected', () => {
    it('next value button should be disabled', () => {
      mount(<Slider {...sliderProps} value="2" />);
      cy.get('div[data-test-name=difficulty] input[data-test-name=slider-next-value-button]').should('be.disabled');
    });

    it(`previous value button generates onChange event`, () => {
      const handlers = {
        onChange() {},
      };
      const onChangeSpy = cy.spy(handlers, 'onChange');

      mount(<Slider {...sliderProps} value="2" onChange={handlers.onChange} />).then(() => {
        cy.get('div[data-test-name=difficulty] input[data-test-name=slider-previous-value-button]')
          .click({ force: true })
          .then(() => {
            expect(onChangeSpy).to.be.called;
            expect(onChangeSpy).to.be.calledWith('1');
          });
      });
    });

    it(`next value button doesn't generate onChange event`, () => {
      const handlers = {
        onChange() {},
      };
      const onChangeSpy = cy.spy(handlers, 'onChange');

      mount(<Slider {...sliderProps} value="2" onChange={handlers.onChange} />).then(() => {
        cy.get('div[data-test-name=difficulty] input[data-test-name=slider-next-value-button]')
          .click({ force: true })
          .then(() => {
            expect(onChangeSpy).not.to.be.called;
          });
      });
    });
  });
});
