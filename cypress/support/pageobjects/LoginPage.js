/// <reference types="cypress"/>

const el = require('../elements/LoginElements').ELEMENTS;

class LoginPage {
    validarSite(){
      cy.title().should('eq', el.titleHome);
    }
  
    realizarBusca(){
      //cy.get(el.botaoLogin).click();
      cy.get(el.botaoBuscar).click()
      cy.get(el.inputBusca).type('superget')
      cy.get(el.botaoPesquisa).click()
    }

    acessarLink(){
      cy.contains(el.linkSuperget).click({force: true})
      cy.title().should('eq', el.titleArquivos);
    }

    validarMensagemModal(){
      cy.get(el.modal).should('contain', el.mensagemModal)
        
    }
  
  }
  
  export default new LoginPage();