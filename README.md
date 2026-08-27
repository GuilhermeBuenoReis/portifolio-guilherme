# Guilherme Reis — Portfolio

Código-fonte do meu site profissional e portfólio.

O projeto reúne minha atuação em engenharia de software, liderança técnica, construção de produtos e desenvolvimento fullstack. A aplicação funciona como uma camada pública para apresentar experiência, projetos, decisões de engenharia e formas de contato.

## Website

[devguilhermebuenoreis.com.br](https://www.devguilhermebuenoreis.com.br/)

## Objetivo

O portfólio está evoluindo de uma apresentação centrada apenas em stack para um posicionamento mais próximo do trabalho que exerço hoje: construir e liderar produtos na interseção entre **engenharia, produto e negócio**.

Isso significa que tecnologia continua presente, mas como ferramenta para demonstrar capacidade de execução, e não como a mensagem principal do site.

## Experiência da aplicação

- página inicial com posicionamento profissional e projetos selecionados
- área de projetos com filtros por categoria
- experiência profissional, formação e certificações
- visão da stack e das áreas de engenharia em que atuo
- seção sobre trajetória, produto e filosofia de desenvolvimento
- canais de contato e presença profissional
- layout responsivo para desktop e mobile
- temas claro, escuro e baseado no sistema
- animações com respeito a preferências de redução de movimento
- metadados de SEO, Open Graph, Twitter Card e canonical URL

## Stack

| Área | Tecnologia |
| --- | --- |
| Interface | React 19 + TypeScript |
| Routing | TanStack Router |
| Build | Vite |
| Styling | Tailwind CSS v4 |
| Motion | Motion |
| UI | Lucide React + primitives compatíveis com shadcn/ui |
| Qualidade | Biome |
| Testes | Vitest + Testing Library |

## Estrutura

```text
src/
├── app/
├── components/
│   ├── layout/
│   └── ui/
├── features/
│   ├── about/
│   ├── contact/
│   ├── experience/
│   ├── portfolio/
│   ├── projects/
│   └── stack/
├── lib/
├── pages/
├── routes/
└── styles/
```

A organização separa componentes compartilhados da composição de páginas e mantém conteúdo de domínio próximo das seções que o utilizam.

## Rotas principais

| Rota | Conteúdo |
| --- | --- |
| `/` | apresentação principal |
| `/projects` | projetos |
| `/experience` | experiência e formação |
| `/stack` | tecnologias e áreas técnicas |
| `/about` | trajetória e visão |
| `/contact` | contato |

## Performance e acessibilidade

O projeto inclui:

- preload por intenção no TanStack Router
- restauração de scroll
- carregamento assíncrono de seções da home
- metadados globais para mecanismos de busca e compartilhamento
- canonical URL
- `robots.txt`
- layout responsivo
- tratamento de `prefers-reduced-motion`

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

A aplicação roda localmente em:

```text
http://localhost:3000
```

## Qualidade

```bash
pnpm test
pnpm lint
pnpm check
pnpm build
```

## Contato

- [Website](https://www.devguilhermebuenoreis.com.br/)
- [LinkedIn](https://www.linkedin.com/in/guilherme-bueno-reis/)
- [GitHub](https://github.com/GuilhermeBuenoReis)

## Status

O portfólio está em evolução contínua para acompanhar minha atuação profissional e os produtos que estou construindo.
