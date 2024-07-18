import { theme } from '../../tailwind.config.cjs'

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}

describe('Basic Workflows', () => {
  it('displays previous highscore', () => {
    cy.clearLocalStorage('highscore')
    cy.visit('/')

    cy.getBySel('highscore').should('have.text', '0')

    cy.visit('/', {
      onBeforeLoad: () => window.localStorage.setItem('highscore', '7')
    })
    
    cy.getBySel('highscore').should('have.text', '7')
  });

  it('navigates through the how to workflow', () => {
    cy.visit('/')
    
    cy.getBySel('how-to-link').click()
    cy.url().should('include', '/how-to')

    // page 1
    cy.getBySel('home-link').should('not.exist')
    cy.getBySel('next-link').should('exist').click()

    // page 2
    cy.getBySel('home-link').should('not.exist')
    cy.getBySel('next-link').should('exist').click()
    
    // page 3`
    cy.getBySel('home-link').should('not.exist')
    cy.getBySel('next-link').should('exist').click()
    
    // page 4
    cy.getBySel('left-ear').should('have.css', 'background-color').and('eq', hexToRgb(theme.colors['difficulty-very-easy']))
    cy.getBySel('right-ear').should('have.css', 'background-color').and('eq', hexToRgb(theme.colors['difficulty-very-easy']))
    
    cy.getBySel('difficulty-hard-btn').click()
    cy.getBySel('left-ear').should('have.css', 'background-color').and('eq', hexToRgb(theme.colors['difficulty-hard']))
    cy.getBySel('right-ear').should('have.css', 'background-color').and('eq', hexToRgb(theme.colors['difficulty-hard']))

    cy.getBySel('next-link').should('not.exist')
    cy.getBySel('home-link').should('exist').click()

    cy.url().should('not.include', '/how-to')
  })
})
