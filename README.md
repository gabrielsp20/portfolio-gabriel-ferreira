# Portfólio Profissional — Gabriel Ferreira

Portfólio de Gabriel Ferreira, Analista de Suporte de TI e Automação. O site apresenta a experiência em Service Desk como base para a criação de procedimentos, scripts, ferramentas internas e soluções web.

Site publicado: [www.gabrielsferreira.com.br](https://www.gabrielsferreira.com.br)

## Objetivo

Apresentar a trajetória profissional, as competências e os estudos de caso com contexto técnico, evidências disponíveis e limitações conhecidas. O conteúdo é direcionado a oportunidades em suporte de TI, suporte N2, aplicações, automação, ferramentas internas e desenvolvimento júnior.

## Tecnologias do portfólio

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `next/image` e `next/font`

## Funcionalidades

- Home com proposta profissional, projetos em destaque, experiência resumida e competências
- Páginas dedicadas para Sobre, Experiência, Projetos e Contato
- Estudos de caso gerados a partir de uma estrutura de dados tipada
- Galerias responsivas disponíveis para qualquer projeto
- Modal acessível com navegação por teclado, foco controlado e suporte a movimento reduzido
- Indicadores de projeto público ou privado
- Metadados específicos por rota e por projeto
- Sitemap, robots, Open Graph, Twitter/X e dados estruturados
- Página 404 personalizada
- Currículo disponível para download

## Projetos apresentados

- **Sistema de Gestão da EBD:** aplicação de gestão com autenticação, perfis de acesso, chamadas, cadastros, histórico e relatórios.
- **Gerador de Encaminhamento Field:** aplicação web pública para validar, gerar e manter localmente textos de encaminhamento técnico.
- **Automação de Limpeza Remota em Massa:** ferramenta em PowerShell para configurar e acompanhar tentativas de disparo em vários equipamentos.
- **Toolkit de Suporte Técnico:** aplicação desktop modular com recursos de mensagens, scripts, diagnóstico e apoio ao atendimento.
- **Automação de Chamados em Lote:** extensão para organizar registros, filtros, fila e estados de processamento.

## Estrutura principal

```text
app/                         Rotas, metadados e arquivos especiais do Next.js
components/                  Seções visuais e componentes reutilizáveis
components/projects/         Cards, detalhes e galeria dos estudos de caso
data/projects.ts             Conteúdo estruturado dos projetos
types/project.ts             Tipos compartilhados dos projetos
public/images/projetos/      Evidências visuais organizadas por projeto
public/documentos/           Currículo público
```

## Como instalar e executar

Pré-requisitos:

- Node.js compatível com o Next.js 16
- npm

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/gabrielsp20/portfolio-gabriel-ferreira.git
cd portfolio-gabriel-ferreira
```

Instale as dependências:

```bash
npm ci
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

```bash
npm run dev        # ambiente local de desenvolvimento
npm run lint       # análise estática com ESLint
npm run typecheck  # verificação do TypeScript sem gerar arquivos
npm run build      # build de produção e geração das rotas estáticas
npm run start      # execução local do build de produção
```

## SEO

O projeto inclui canonical específico por rota, metadados próprios nos estudos de caso, imagens sociais, sitemap, robots e JSON-LD para `Person`, `WebSite` e `CreativeWork` quando adequado.

## Acessibilidade e responsividade

- Link para pular diretamente ao conteúdo
- Hierarquia semântica de títulos
- Foco visível e áreas de toque adequadas
- Menu mobile com fechamento por Esc e controle de foco
- Galeria com focus trap, restauração do foco e navegação por setas
- Conteúdo de fundo indisponível enquanto um modal está aberto
- Suporte a `prefers-reduced-motion`
- Layout adaptado para celulares, tablets e telas maiores

## Confidencialidade

Projetos privados são apresentados por meio de descrições, tecnologias, decisões e imagens de demonstração. As imagens usadas nas automações e no Toolkit contêm dados fictícios. O repositório não publica credenciais, senhas, tokens, URLs internas, scripts sensíveis nem código confidencial.

Os números exibidos nas telas de demonstração não representam resultados de produção. Estados intermediários, como “disparado”, também não são apresentados como comprovação de conclusão de uma rotina.

## Autor

Gabriel Ferreira

- [LinkedIn](https://www.linkedin.com/in/gabriel-ferreira-387070204/)
- [GitHub](https://github.com/gabrielsp20)
- [Portfólio](https://www.gabrielsferreira.com.br)

Este portfólio foi desenvolvido com apoio de inteligência artificial em atividades como pesquisa, estruturação, revisão, aceleração, testes e ajustes. As decisões e o código precisam ser compreendidos e validados antes de fazer parte do projeto.
