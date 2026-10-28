# Gabriel Ferreira — site profissional

Site em [www.gabrielsferreira.com.br](https://www.gabrielsferreira.com.br), com apresentação profissional, trajetória, competências, formação e contato. Identidade clássica em verde e areia, com Manrope no corpo e Cormorant Garamond nos títulos e no monograma GF.

## Desenvolvimento

Next.js 16.2.10, React 19.2.4, TypeScript e Tailwind CSS 4. As versões e o lockfile foram preservados.

```bash
npm ci
npm run dev
```

No Windows, use `npm.cmd` se a política do PowerShell bloquear `npm.ps1`.

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

Consulte `AGENTS.md` e a documentação instalada em `node_modules/next/dist/docs/` antes de modificar APIs do Next.js.

## Conteúdo e estrutura

- `app/`: início, Sobre, Experiência, Contato, página 404 e metadados.
- `components/`: seções renderizadas no servidor; apenas o cabeçalho e a cópia do e-mail usam componentes de cliente.
- `data/profile.json`: fonte comum dos cargos, períodos, competências, formação e contatos usados no site e no currículo.
- `app/globals.css`: tokens de cor, tipografia, estados de interação e composição responsiva.
- `lib/metadata.ts`: títulos, descrições e canonical específicos por página.
- `lib/brand.ts`: cores equivalentes para as imagens geradas por `ImageResponse`, que não resolve variáveis CSS.
- `public/documentos/curriculo-gabriel-ferreira.pdf`: currículo público, com endereço de download preservado.
- `scripts/build_resume.py`: geração do currículo a partir dos dados profissionais. Requer Python e ReportLab; execute `python scripts/build_resume.py` e confira visualmente o PDF antes de publicar.

## Retirada dos projetos

A versão pública não apresenta projetos, estudos de caso ou capturas de aplicações. As rotas `/projetos` e `/projetos/[slug]` foram removidas e recebem o 404 nativo do Next.js. Sitemap e dados estruturados incluem apenas as páginas e informações profissionais pertinentes.

Os arquivos anteriores continuam recuperáveis pelo histórico Git. Para consultar o conteúdo de uma versão anterior sem republicá-lo:

```bash
git log --all -- app/projetos data/projects.ts public/images/projetos
git show <commit>:data/projects.ts
```

Cópias locais, ferramentas e resultados de QA ficam em diretórios ignorados pelo Git e fora de `public/`.

## Acessibilidade

Link para pular ao conteúdo, um H1 por página, foco visível, navegação por teclado, contraste sobre superfícies claras e escuras e respeito a movimento reduzido. O menu móvel controla o foco e o conteúdo de fundo, fecha com Esc e libera a rolagem ao mudar para desktop. O contato oferece e-mail visível, abertura pelo aplicativo, confirmação de cópia e seleção manual em caso de falha.

## Publicação

Preserve o domínio e a integração GitHub/Vercel existentes. O build usa `next/font` para otimizar e hospedar as fontes; precisa acessá-las durante a compilação. Antes de enviar, execute as verificações, revise o site no navegador e confirme a publicação da Vercel no domínio final.
