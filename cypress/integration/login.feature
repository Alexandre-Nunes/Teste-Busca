Feature: Busca
    Passos:
    1 - Acessar o site: https://site.getnet.com.br/
    2 - No campo de busca(LUPA), pesquisar por superget
    3 - No resultado da busca, clicar no link Como acesso a minha conta SuperGet?
    4 - Verificar se a modal foi aberta com a mensagem Como acesso a minha conta SuperGet?

Scenario: Realizar uma busca com sucesso
    Given acesso o site da getnet
    When realizo uma busca por superget
    And acesso o link: Como acesso a minha conta SuperGet?
    Then o modal deve ser exibido com a mensagem: Como acesso a minha conta SuperGet?
       