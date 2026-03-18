# 🔐 Sistema de Login

Projeto simples de login desenvolvido com HTML, CSS e JavaScript.

## 🚀 Funcionalidades

- Campo para digitar senha
- Validação de acesso
- Mensagem de sucesso ou erro
- Interface estilizada com CSS

## 🧠 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## 💻 Como usar

1. Abra o arquivo `index.html` no navegador
2. Digite a senha
3. Clique em "Entrar"

## 🔑 Lógica do sistema

O acesso é liberado quando:

- A senha está correta
- O sistema não está bloqueado

```javascript
if (senhaDigitada === senhaCorreta && !bloqueado)
