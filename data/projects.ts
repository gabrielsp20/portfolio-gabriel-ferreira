import type { Project } from "../types/project";

export const projects = [
  {
    number: "01",
    slug: "sistema-gestao-ebd",
    title: "Sistema de Gestão da EBD",
    category: "Sistema web completo",
    summary:
      "Sistema desenvolvido para centralizar a gestão da Escola Bíblica Dominical, reunindo chamadas, alunos, professores, visitantes, ofertas, rankings, histórico e relatórios.",
    problem:
      "O controle de frequência, classes, professores, visitantes e ofertas dependia de registros separados, dificultando a consulta do histórico e a geração de informações confiáveis.",
    solution:
      "Uma aplicação web responsiva com autenticação, perfis de acesso, banco de dados relacional, regras de negócio, histórico de aulas, relatórios e métricas oficiais.",
    result:
      "Centralização das informações da EBD, preservação do histórico e criação de uma base mais segura para acompanhamento de frequência, participação e resultados.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "SQL",
      "RLS",
    ],
    visibility: "private",
    featured: true,
    confidentialityNote:
      "Sistema de uso restrito e código não disponibilizado. O projeto possui regras de negócio próprias, autenticação, permissões, dados reais e uma arquitetura desenvolvida especificamente para a gestão da EBD.",
  },
  {
    number: "02",
    slug: "automacao-limpeza-remota",
    title: "Automação de Limpeza Remota em Massa",
    category: "PowerShell e automação",
    summary:
      "Ferramenta criada para executar, acompanhar e registrar rotinas de limpeza de disco em vários computadores de forma centralizada.",
    problem:
      "A execução manual em cada equipamento consumia tempo, exigia repetição de comandos e dificultava o acompanhamento dos resultados de um grande lote de máquinas.",
    solution:
      "Uma aplicação com interface gráfica que recebe uma lista de equipamentos, valida a disponibilidade, processa as tarefas em paralelo e registra o resultado individual de cada máquina.",
    result:
      "Redução do trabalho repetitivo, maior padronização da execução e acompanhamento centralizado das máquinas processadas, indisponíveis ou com falha.",
    technologies: [
      "PowerShell 5.1",
      "Windows Forms",
      "Runspaces",
      "WMI",
      "Processamento paralelo",
      "REST API",
    ],
    visibility: "private",
    featured: true,
    confidentialityNote:
      "Código não publicado por conter integrações, configurações e informações relacionadas a ambiente corporativo.",
  },
  {
    number: "03",
    slug: "gerador-encaminhamento-field",
    title: "Gerador de Encaminhamento Field",
    category: "Aplicação web",
    summary:
      "Ferramenta criada para agilizar e padronizar a elaboração de textos técnicos destinados ao atendimento presencial.",
    problem:
      "O encaminhamento de chamados exigia textos repetitivos, organização manual das informações e atenção constante para não esquecer dados importantes.",
    solution:
      "Um formulário que valida e organiza os dados, gera o texto automaticamente, permite copiar o resultado e mantém rascunhos e histórico no navegador.",
    result:
      "Padronização dos encaminhamentos, redução de erros de preenchimento e maior agilidade na documentação dos chamados.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "LocalStorage",
      "Git",
      "GitHub Pages",
    ],
    visibility: "public",
    featured: true,
    projectUrl: "https://gabrielsp20.github.io/gerador-field/",
    repositoryUrl: "https://github.com/gabrielsp20/gerador-field",
  },
  {
    number: "04",
    slug: "automacao-chamados-lote",
    title: "Automação de Chamados em Lote",
    category: "Extensão para navegador",
    summary:
      "Extensão desenvolvida para organizar e automatizar etapas repetitivas no processamento de chamados em uma plataforma de Service Desk.",
    problem:
      "A atualização manual de vários chamados exigia a repetição das mesmas etapas, aumentando o tempo de execução e o risco de falhas operacionais.",
    solution:
      "Uma extensão com importação de planilhas, fila de processamento, preenchimento automatizado, acompanhamento de status, logs e reprocessamento de falhas.",
    result:
      "Organização do processamento em lote, melhor acompanhamento dos registros e redução da repetição manual durante a execução das atividades.",
    technologies: [
      "JavaScript",
      "Chrome Extension",
      "Manifest V3",
      "Chrome APIs",
      "SheetJS",
      "Supabase",
    ],
    visibility: "private",
    featured: false,
    confidentialityNote:
      "Código não publicado por envolver estrutura, integrações e informações de uma plataforma corporativa.",
  },
  {
    number: "05",
    slug: "toolkit-suporte-tecnico",
    title: "Toolkit de Suporte Técnico",
    category: "Aplicação desktop",
    summary:
      "Aplicação desktop modular que reúne ferramentas utilizadas na rotina de suporte técnico em um único ambiente.",
    problem:
      "Scripts, planilhas, mensagens e procedimentos ficavam distribuídos em diferentes arquivos, dificultando o acesso rápido e a padronização das atividades.",
    solution:
      "Um toolkit com módulos para chamados, importação de planilhas, mensagens técnicas, execução de scripts, consultas e outras rotinas de suporte.",
    result:
      "Centralização de ferramentas frequentes e acesso mais rápido a recursos utilizados diariamente no atendimento técnico.",
    technologies: [
      "Python",
      "Tkinter",
      "SQLite",
      "PyAutoGUI",
      "OpenPyXL",
      "Firebase",
    ],
    visibility: "private",
    featured: false,
    confidentialityNote:
      "Código não publicado por possuir configurações e informações relacionadas ao ambiente de trabalho.",
  },
] satisfies Project[];
