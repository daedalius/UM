/// <reference types="cypress" />

import * as React from 'react';
import { mount } from '@cypress/react';

import { Button } from './Button';

/**
 * <Button />
 * * should have text
 * * should be clickable
 * * have small size variant
 * * have large size variant
 */

describe('<Button>', () => {
  it('should have text', () => {
    mount(<Button text="button text" name="test button" />);
    cy.get('[data-test-name="test button"]').contains('button text');
  });

  it('should be clickable', () => {
    const handlers = { onClick() {} };
    const onClickSpy = cy.spy(handlers, 'onClick');

    mount(<Button text="button text" name="test button" onClick={handlers.onClick} />).then(() => {
      cy.get('[data-test-name="test button"]')
        .click()
        .then(() => {
          expect(onClickSpy).to.be.called;
        });
    });
  });

  it('have small size variant', () => {
    mount(<Button size="sm" text="button text" name="test button" />);
    cy.get('[data-test-name="test button"]').invoke('height').should('be.eq', 32);
  });

  it('have large size variant', () => {
    mount(<Button size="lg" text="button text" name="test button" />);
    cy.get('[data-test-name="test button"]').invoke('height').should('be.eq', 64);
  });
});
