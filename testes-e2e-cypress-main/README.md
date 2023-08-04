## Cypress

- Para rodar a aplicação execute `npm run start`
- Para rodar a api, navegue até o diretório "api-bytebank-main" e execute `npm run start-api`
- Para rodar o cypress execute `npx cypress open` (interface de usuário)
- Para rodar o cypress execute `npx cypress run` (modo "headless")
- Para rodar arquivo específico execute `npx cypress run --spec "./cypress/e2e/paginas.cy.js"` 
- Para rodar em tamanho de tela específico execute `npx cypress open --config viewportWidth=375,viewportHeight=667`

### Criando comandos personalizados
- Va para a pasta `cypress\support\commands.js` do seu projeto