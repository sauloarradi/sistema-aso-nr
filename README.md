# Sistema ASO/NR — Modernização Profissional (Fase 1)

Este repositório foi reestruturado para uma base profissional, com foco em escalabilidade, qualidade e segurança de evolução.

## O que mudou

- Migração da base monolítica em `index.html` para **React + TypeScript + Vite**.
- Separação por camadas: `domain`, `services`, `components` e `app`.
- Implantação de padrões de qualidade:
  - ESLint
  - Prettier
  - Vitest
- Documentação de arquitetura em `docs/ARQUITETURA_PROPOSTA.md`.
- Introdução de `.env.example` para gestão segura de credenciais.

## Como executar

```bash
npm install
npm run dev
