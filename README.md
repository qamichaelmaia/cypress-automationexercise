# Automação de Testes - Automation Exercise

![alt text](<Prancheta 1.png>)

Este repositório contém uma suíte de testes automatizados para a plataforma [Automation Exercise](https://automationexercise.com), desenvolvidos utilizando o Cypress com a arquitetura Page Objects. A automação inclui funcionalidades como login, cadastro de cliente, adição de produtos ao carrinho, checkout e envio de mensagens de contato.

## Tecnologias Utilizadas

- **Cypress**: Framework de testes para automação de testes de interface.
- **Page Objects**: Padrão de design utilizado para abstrair a lógica dos testes, criando uma camada de interação com a interface.
- **Faker**: Biblioteca para gerar dados aleatórios e fictícios para os testes, como nomes, endereços, e-mails, etc.

## Testes Realizados

### 1. **Login e Compra de Produtos**
- **Arquivo**: `product.cy.js`
- **Descrição**: Realiza testes de login utilizando credenciais válidas e inválidas. Verifica a autenticação do usuário na plataforma.

### 2. **Cadastro de Cliente**
- **Arquivo**: `signUp.cy.js`
- **Descrição**: Testa o processo de cadastro de um novo cliente utilizando dados fictícios gerados pelo Faker.

### 3. **Entrar em Contato**
- **Arquivo**: `contact.cy.js`
- **Descrição**: Testa o envio de mensagens para a loja, simulando o processo de entrar em contato com a plataforma para solicitar um produto.


---

### Explicações:

1. **Estrutura do código**: A estrutura do projeto foi descrita de forma simples, com os principais arquivos de testes e os Page Objects, indicando como os testes são organizados.
   
2. **Como rodar os testes**: Expliquei passo a passo o processo para configurar o ambiente e rodar os testes, usando comandos básicos de terminal.

3. **Descrição dos testes**: Descrevi brevemente o propósito de cada teste (`product.cy.js`, `signUp.cy.js`, `contact.cy.js`), facilitando o entendimento do que cada um verifica.

Com essa estrutura, qualquer desenvolvedor poderá entender rapidamente o funcionamento do projeto, a tecnologia usada e como executar os testes.
