/* global Given, Then, When */

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import LoginPage from '../pageobjects/LoginPage'
import LoginHooks from '../hooks/LoginHooks'

Given("acesso o site da getnet", () => {
    LoginPage.validarSite();
})

When("realizo uma busca por superget", () => {
    LoginPage.realizarBusca();
})

And("acesso o link: Como acesso a minha conta SuperGet?", () => {
    LoginPage.acessarLink();
})


Then("o modal deve ser exibido com a mensagem: Como acesso a minha conta SuperGet?", () => {
    LoginPage.validarMensagemModal();
})

