# Validação da revisão profissional

Data: 28 de outubro de 2026.

## Implementação

- Identidade verde e areia aplicada às quatro páginas, ao cabeçalho, ao rodapé, à página 404, aos ícones, às imagens sociais e ao currículo.
- Página inicial organizada em apresentação, experiência, competências, forma de trabalho e contato.
- Trajetória conferida no currículo anterior: SONDA IT desde mai/2022, cargo de analista desde jan/2023, atuação autônoma de jan/2020 a nov/2021 e ASSISTHEL TELECOM de jun/2018 a jan/2020.
- Formação: Bacharelado em Ciência da Computação, UNINOVE, 2019–2022, concluído.
- Projetos, estudos de caso, dados, componentes, imagens públicas e rotas retirados. Material recuperável pelo histórico Git e por cópia local ignorada em `.local-backup/removed/`.
- Retirados indicadores sem contexto suficiente, animação decorativa de transição e arquivos públicos de exemplo sem uso.
- Dependências e lockfile preservados; domínio e configuração de hospedagem mantidos.

## Código e build

Passaram `npm run lint`, `npm run typecheck`, `npm run build` e `git diff --check`.

Build de produção do Next.js 16.2.10: páginas públicas estáticas `/`, `/sobre`, `/experiencia` e `/contato`; 404 e rotas próprias para ícones, compartilhamento, robots e sitemap. A documentação instalada foi consultada antes da implementação.

Foi necessário permitir rede na instalação e no build para baixar as versões do lockfile e as fontes que o projeto já utilizava. Nenhuma versão de dependência foi atualizada. Arquivos PDF e PNG foram marcados como binários para evitar conversão de finais de linha pelo Git.

## Navegador e responsividade

Testes sobre `next start`, em instância isolada do Microsoft Edge headless por Playwright, nas larguras 320, 360, 390, 768, 1024 e 1280 px, com altura de 900 px.

- 30 combinações de página e largura: quatro páginas públicas e uma página inexistente, todas sem transbordamento horizontal.
- Capturas de todas as combinações geradas e revisadas, com inspeção adicional da trajetória completa, do PDF, da imagem social e da alternativa manual de cópia.
- Um H1 por página, idioma `pt-BR`, links internos válidos e ausência de conteúdo ou links de projetos nas páginas verificadas.
- Canonical e Open Graph específicos das quatro páginas; imagem social e Twitter presentes.
- Dez auditorias axe-core para WCAG 2 A/AA e WCAG 2.1 A/AA, nas larguras 390 e 1280 px, sem violações detectadas. A alternativa manual de cópia também passou por auditoria.

Interações verificadas:

- Link para pular ao conteúdo e foco por teclado.
- Menu móvel: foco inicial, ciclo de Tab e Shift+Tab, Esc, estado `aria-expanded`, restauração de foco, `inert`, `aria-hidden` e rolagem.
- Fechamento ao mudar para desktop, com foco em um link visível.
- Navegação pelo menu móvel, sem deixar o conteúdo bloqueado.
- Cópia real do e-mail e leitura do clipboard no contexto isolado de teste, com confirmação acessível.
- Falha intencional da API de clipboard: instrução manual, campo com rótulo, foco e seleção do endereço completo.
- Respeito a `prefers-reduced-motion`.

Contrastes calculados a partir dos tokens: verde sobre areia 10,59:1; texto secundário sobre areia 8,31:1; texto secundário sobre superfície complementar 7,65:1; monograma dourado claro sobre verde 6,97:1; branco sobre o botão verde 11,95:1. O dourado escuro fica em detalhes decorativos.

## Remoção pública e arquivos

Verificados por HTTP: quatro páginas e PDF com 200; `/projetos`, os cinco slugs anteriores, um slug desconhecido e as 16 imagens antigas com 404 real; quatro imagens de identidade/compartilhamento com 200 e tipo PNG. Foram 32 verificações de resposta, além de sitemap e robots.

O sitemap contém somente quatro URLs públicas. Não foram encontrados `CreativeWork`, links de projetos ou apresentação dos projetos retirados. Os dados estruturados preservam o perfil profissional e o site.

O currículo final foi renderizado e inspecionado: uma página A4, 410 palavras selecionáveis, quatro links profissionais e nenhuma seção ou link de projetos. Experiência, formação, telefone e e-mail foram preservados. O endereço de download continua `/documentos/curriculo-gabriel-ferreira.pdf`.

Evidências locais: `.tools/qa-results/` contém capturas, `results.json` e `performance.json`; `tmp/pdfs/` contém a renderização do currículo. Esses diretórios são ignorados pelo Git e ficam fora da área pública.

## Observações de desempenho

Medição local da página inicial, build de produção, Edge headless, sem limitação de CPU/rede. Três contextos novos por largura, com observação por 1,5 segundo após a rede ficar ociosa.

| Largura | FCP mediano | Último LCP observado, mediana | CLS observado |
|---|---:|---:|---:|
| 390 px | 164 ms | 164 ms | 0 nas três amostras |
| 1280 px | 172 ms | 172 ms | 0 nas três amostras |

São observações de laboratório em localhost, não resultados de produção nem dados de usuários reais. Lighthouse e INP não foram medidos.

## Limites e publicação

A emulação não substitui testes em aparelhos físicos, Safari/VoiceOver ou uma auditoria completa com tecnologia assistiva. O relatório original de avaliação do site não estava entre os arquivos anexados; as recomendações transcritas nos dois textos fornecidos foram utilizadas como requisitos.

A situação de commit, push e publicação é informada no resultado da entrega, após verificar o GitHub, a integração Vercel existente e o domínio final. Um build local aprovado, por si só, não comprova publicação.
