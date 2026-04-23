# Middleware Integration SDK — Documentação

Documentação técnica do **Integration SDK** (OlosChat ↔ CRM), construída com [Nextra](https://nextra.site) e hospedada na [Vercel](https://vercel.com).

🔗 **Acesse a documentação:** [middleware-integration-dcos.vercel.app](https://middleware-integration-dcos.vercel.app/)

## Stack

| Tecnologia | Versão |
|---|---|
| Next.js | 13.5.6 |
| Nextra | 2.13.4 |
| React | 18.2.0 |
| TypeScript | 5.x |
| Node.js | ≥ 20 |
| Package Manager | Yarn 1.22.22 |

## Pré-requisitos

- [Node.js](https://nodejs.org) **≥ 20**
- [Yarn](https://classic.yarnpkg.com) **1.x**

## Instalação

```bash
yarn
```

## Desenvolvimento

```bash
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
yarn build
yarn start
```

## Estrutura do projeto

```
├── pages/                  # Páginas .mdx (conteúdo da documentação)
│   ├── _meta.pt-BR.json   # Menu sidebar — Português
│   ├── _meta.es.json       # Menu sidebar — Español
│   ├── _meta.us.json       # Menu sidebar — English
│   ├── index.{locale}.mdx  # Página inicial por idioma
│   ├── events.{locale}.mdx
│   ├── howto.{locale}.mdx
│   ├── olostextintegration.{locale}.mdx
│   └── video-example.{locale}.mdx
├── components/             # Componentes React reutilizáveis
├── assets/images/          # Imagens e diagramas
├── theme.config.tsx        # Configuração do tema Nextra
├── next.config.js          # Configuração do Next.js + Nextra
├── middleware.ts            # Middleware i18n do Nextra
└── tsconfig.json           # Configuração do TypeScript
```

## Internacionalização (i18n)

O projeto suporta três idiomas:

| Locale | Idioma |
|---|---|
| `pt-BR` | Português (padrão) |
| `es` | Español |
| `us` | English |

Para adicionar ou traduzir uma página, crie o arquivo `.mdx` com o sufixo do locale (ex: `nova-pagina.pt-BR.mdx`) e registre-o no `_meta.{locale}.json` correspondente.

## Deploy na Vercel

O projeto está pronto para deploy na Vercel:

1. Importe o repositório na [Vercel](https://vercel.com/new)
2. Framework Preset: **Next.js**
3. Build Command: `yarn build`
4. Output Directory: `.next`
5. Clique em **Deploy**

Não é necessário configurar variáveis de ambiente adicionais.

## Licença

Consulte o arquivo [LICENSE](LICENSE).