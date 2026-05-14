# 🚀 Desafio Técnico: Analista de Testes Senior

<div align="center">

![Cypress](https://img.shields.io/badge/Cypress-Testing-brightgreen?style=for-the-badge&logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![Page Objects](https://img.shields.io/badge/Page_Objects-Architecture-blue?style=for-the-badge)
![API Rest](https://img.shields.io/badge/API-REST-orange?style=for-the-badge)
![E2E Testing](https://img.shields.io/badge/E2E-Testing-purple?style=for-the-badge)

</div>

---

# 📝 Apresentação da Atividade

Este projeto representa a entrega técnica para a avaliação de **Analista de Testes Senior**.

O foco central foi o desenvolvimento de uma suíte de testes automatizados para a plataforma **ServeRest**, abrangendo as camadas de interface (**Frontend**) e serviços (**API**).

Como profissional Senior, a arquitetura foi pensada para ser:

- escalável
- reutilizável
- desacoplada
- de fácil manutenção

Aplicando padrões de engenharia de software que garantem:

- confiabilidade do pipeline de qualidade
- rápida identificação de regressões
- facilidade de evolução da automação

---

# 🏗️ Estratégia e Padrões de Projeto

## ✅ Page Objects Pattern (PoP)

Implementado para desacoplar a lógica de teste da estrutura HTML, garantindo maior manutenibilidade e reutilização de código.

---

## ✅ Custom Commands

Abstração de comportamentos repetitivos para tornar os testes mais limpos, legíveis e reutilizáveis.

---

## ✅ Data-Driven Testing

Gerenciamento de massa de dados através de `fixtures`, permitindo testes parametrizados e maior flexibilidade.

---

## ✅ Assertions BDD

Escrita de assertions claras e semânticas para facilitar entendimento e manutenção dos testes.

---

# 📋 Cenários Automatizados

# 💻 Frontend (E2E)

### URL:
https://front.serverest.dev/

---

## ✅ Cadastro de Usuário

Validação do fluxo crítico de registro de usuários.

### Cobertura:
- cadastro com sucesso
- validação de mensagens
- validação de redirecionamento
- persistência do usuário

---

## ✅ Login e Autenticação

Validação de fluxo de autenticação da aplicação.

### Cobertura:
- login válido
- controle de sessão
- validação de autenticação
- acesso às funcionalidades protegidas

---

## ✅ Gestão de Carrinho

Fluxo principal da jornada de compra do usuário.

### Cobertura:
- adicionar produto
- validar carrinho
- validar quantidade
- finalizar compra

---

# 🔌 API (Rest)

### Swagger:
https://serverest.dev/

---

## ✅ Autenticação

Validação de autenticação via API.

### Cobertura:
- login
- extração de bearer token
- validação de retorno

---

## ✅ Gestão de Usuários

Operações CRUD de usuários.

### Cobertura:
- criar usuário
- consultar usuário
- editar usuário
- remover usuário

---

## ✅ Catálogo de Produtos

Validação de endpoints protegidos de produtos.

### Cobertura:
- criação autenticada
- listagem de produtos
- validação de payload
- validação de autorização

---

# 📁 Arquitetura do Projeto

```bash
cypress/
│
├── e2e/
│   ├── frontend/
│   └── api/
│
├── fixtures/
│
├── support/
│   ├── pages/
│   ├── services/
│   └── commands.js
│
├── cypress.config.js
├── package.json
└── README.md