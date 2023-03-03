
## KaBuM! - Cenários de compra - Order:

    Contém duas suite de teste Happy Path do processo de compra (Logado e não logado), porém não é possível concluír a compra via automação devido a sessão ser finalizada ao logar pelo navegador controlado pelo Cypress.

### Códigos de frete:
    - GFT - 35
    - Vex - 29
    - Sedex - 3
    - Movvi - 21
    - TMA - 45
    - Obs: Entrega Agendada é sempre o mesmo código do primeiro frete exibido na página.

- Para rodar o cenário logado, favor informar o usuário e senha no arquivo main_data.js.
- Para alterar o produto, altere o código dele de acordo com o código do produto no site KaBuM no arquivo main_data.js
- Resolução da página travada no arquivo cypress.config.js, para testes em outra resolução alterar esse arquivo.
- Devido a finalização da sessão, para não quebrar o fluxo foram incluídos os métodos  input_postal_code(data.postal_code) e confirm_postal_code() no fluxo do usuário logado, porém não é necessário. Remover o skip do cenário de login.
- Esse documento visa apenas estudo.
