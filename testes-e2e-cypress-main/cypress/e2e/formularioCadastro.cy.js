describe('Formulário Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('Fernando Goia');
    cy.getByData('email-input').type('fernando@email.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');
  });
});
