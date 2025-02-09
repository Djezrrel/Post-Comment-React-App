describe('template spec em um projeto local', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')
    cy.get("[data-qa='profile-box']")
    cy.get("[data-qa='comment-input']").first().type('Ola,boa tarde pessoal,tudo bem com vocês ?')
    cy.get("[data-qa='publish-button']").first().click()
    cy.get("[data-qa='comment-text']").contains('Ola,boa tarde pessoal,tudo bem com vocês ?')

    //Verificar cada um dos elementos do comment text e dentro dele vai aperta o botao de click/
    cy.get("[data-qa='comment-text']").each(($element) => {
      cy.log($element.text())
      if ($element.text() === 'Ola,boa tarde pessoal,tudo bem com vocês ?'){
        cy.get($element).siblings('header').children("[data-qa='delete-button']").click()
      }
    })
    
  })
})