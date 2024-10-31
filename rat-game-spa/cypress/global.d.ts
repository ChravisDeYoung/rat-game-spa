/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getBySel(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
  }
}
