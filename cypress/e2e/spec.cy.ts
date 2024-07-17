describe('Home Page', () => {
  it('navigates to how-to page', () => {
    cy.visit('/')

    cy.getBySel("how-to-link").click()

    cy.url().should('include', '/how-to')
  })

  it('navigates to settings page', () => {
    cy.visit('/')

    cy.getBySel("settings-link").click()

    cy.url().should('include', '/settings')
  })

  it('navigates to game page', () => {
    cy.visit('/')

    cy.getBySel("game-link").click()

    cy.url().should('include', '/game')
  })

  it('displays previous highscore', () => {
    cy.clearLocalStorage('highscore')
    cy.visit('/')

    cy.getBySel('highscore').should('have.text', '0')

    cy.visit('/', {
      onBeforeLoad: () => window.localStorage.setItem('highscore', '7')
    })
    
    cy.getBySel('highscore').should('have.text', '7')
  });
})
