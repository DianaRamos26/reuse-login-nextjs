# ReUse! — Área de Login (Next.js)

Área de **Login, Cadastro e Recuperação de Senha** da plataforma ReUse,
desenvolvida em **Next.js (App Router)** para a fase de Frameworks
(atividade "Startup One").

## Funcionalidades

- **/login** — autenticação com e-mail e senha, link para recuperação e para cadastro.
- **/cadastro** — criação de conta com nome, e-mail e senha.
- **/esqueci-senha** — fluxo mock (sem backend) de recuperação de senha, com mensagem de confirmação simulada.

## Identidade visual

Paleta rosa pink/creme da marca ReUse! (a mesma do primeiro entregue),
com painel ilustrado (folha + formas orgânicas) ao lado do formulário,
tipografia serifada (Fraunces) para títulos e Manrope para o restante
do texto.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` (redireciona para `/login`).

## Deploy

Projeto pronto para deploy direto na [Vercel](https://vercel.com):
importe o repositório e o build é detectado automaticamente (Next.js).

## Estrutura de pastas

```
app/
  layout.js          # fontes, metadata
  globals.css         # estilos globais + Tailwind
  page.js              # redireciona para /login
  login/page.js
  cadastro/page.js
  esqueci-senha/page.js
components/
  AuthShell.jsx       # layout dividido (marca + formulário)
  Logo.jsx
  LeafMark.jsx
  FormField.jsx
  PrimaryButton.jsx
```
