describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br/')

    cy.get('.mburger').click()
    cy.get('#txtLoginNaoLogadoMob').click()
    cy.get('#login-email').type('eu_sou_o_luffy@hotmail.com')
    cy.get('#login-password').type('eu_sou_o_luffy@hotmail.com')
    cy.get('#btnLoginHeader').click()
    
  })
})