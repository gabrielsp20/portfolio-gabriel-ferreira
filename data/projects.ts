import type { Project } from "../types/project";

export const projects = [
  {
    number: "01",
    slug: "sistema-gestao-ebd",
    title: "Sistema de Gestão da EBD",
    category: "Sistema web completo",
    group: "principal",
    summary:
      "Aplicação de gestão criada para uma organização centralizar chamadas, cadastros, histórico e relatórios em um único ambiente.",
    problem:
      "O controle de frequência, classes, professores, visitantes e ofertas dependia de registros separados, dificultando a consulta do histórico e a consolidação das informações.",
    solution:
      "Uma aplicação web responsiva com autenticação, perfis de acesso, banco de dados relacional, regras de negócio, histórico de aulas, relatórios e políticas de Row Level Security.",
    result:
      "O sistema reúne o fluxo de chamada, os cadastros e as consultas históricas, mantendo os dados relacionados e permitindo acompanhar as informações por meio de painéis e relatórios.",
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
    status: "Aplicação com estudo de caso documentado",
    highlights: [
      "Registro de chamadas, alunos, professores, visitantes e ofertas",
      "Autenticação e perfis de acesso",
      "Ranking, histórico de aulas e relatórios consolidados",
      "Regras de negócio e políticas de acesso no banco de dados",
      "Interface responsiva para diferentes tamanhos de tela",
      "Preservação do histórico dos registros",
    ],
    challenges: [
      "Modelar informações relacionadas sem perder o histórico das aulas anteriores.",
      "Aplicar regras de acesso coerentes entre a interface e o banco de dados.",
      "Organizar um fluxo de chamada com diferentes tipos de participante e informações da aula.",
    ],
    learnings: [
      "Estruturação de regras de negócio em uma aplicação de gestão.",
      "Integração entre interface React, autenticação e PostgreSQL por meio do Supabase.",
      "Uso de Row Level Security para restringir o acesso conforme o perfil autenticado.",
    ],
    confidentialityNote:
      "Sistema de uso restrito. O código e os dados reais não são publicados; as imagens do estudo de caso apresentam somente a interface autorizada para demonstração.",
    galleryTitle: "Gestão do registro ao relatório",
    galleryDescription:
      "As telas mostram como as principais rotinas foram conectadas, do registro de presença à consulta do histórico e dos relatórios.",
    gallery: [
      {
        image: "/images/projetos/chamada-ebd/01-chamada-ebd-painel.png",
        title: "Painel principal",
        description:
          "Apresenta uma visão geral da operação, reunindo indicadores da última aula, frequência das classes, visitantes, ofertas e participantes.",
        width: 1448,
        height: 1086,
      },
      {
        image:
          "/images/projetos/chamada-ebd/02-chamada-ebd-registro-presenca.png",
        title: "Registro de chamada",
        description:
          "Permite registrar presença, professores, visitantes, ofertas e informações da aula em um fluxo organizado.",
        width: 1448,
        height: 1086,
      },
      {
        image: "/images/projetos/chamada-ebd/03-chamada-ebd-gestao-alunos.png",
        title: "Gestão de alunos",
        description:
          "Centraliza o cadastro dos alunos e mantém informações como classe de origem, situação e participação nas aulas.",
        width: 1448,
        height: 1086,
      },
      {
        image:
          "/images/projetos/chamada-ebd/04-chamada-ebd-ranking-frequencia.png",
        title: "Ranking de frequência",
        description:
          "Apresenta o desempenho das classes com base nas regras de frequência configuradas para o acompanhamento do período.",
        width: 1448,
        height: 1086,
      },
      {
        image:
          "/images/projetos/chamada-ebd/05-chamada-ebd-historico-aulas.png",
        title: "Histórico das aulas",
        description:
          "Mantém registros anteriores e permite consultar datas, professores, participantes e resultados preservados no banco de dados.",
        width: 1448,
        height: 1086,
      },
      {
        image:
          "/images/projetos/chamada-ebd/06-chamada-ebd-relatorio-dia.png",
        title: "Relatório da aula",
        description:
          "Reúne frequência, visitantes, ofertas e informações de cada classe em um relatório consolidado.",
        width: 1448,
        height: 1086,
      },
    ],
  },
  {
    number: "02",
    slug: "gerador-encaminhamento-field",
    title: "Assistente de Encerramento de Chamados",
    category: "Aplicação web",
    group: "support",
    summary:
      "Sistema web desenvolvido para agilizar e padronizar registros técnicos de conclusão e encaminhamento de chamados de Service Desk.",
    problem:
      "O encerramento de chamados exigia a redação repetitiva de registros técnicos, com risco de inconsistências, omissão de informações e dificuldade para localizar e reutilizar textos anteriores.",
    solution:
      "Uma aplicação com diferentes tipos de encerramento e modelos para situações recorrentes, capaz de gerar textos editáveis, copiar o resultado, salvar o formulário automaticamente e manter um histórico pesquisável no navegador.",
    result:
      "A ferramenta reúne a preparação, a revisão e a reutilização de registros em um fluxo padronizado, preserva rascunhos e históricos da versão anterior e mantém as informações corporativas somente no navegador.",
    technologies: ["HTML5", "CSS3", "JavaScript", "localStorage", "Git", "GitHub Pages"],
    visibility: "public",
    featured: true,
    status: "Projeto público",
    projectUrl: "https://gabrielsp20.github.io/gerador-field/",
    repositoryUrl: "https://github.com/gabrielsp20/gerador-field",
    highlights: [
      "Diferentes tipos de encerramento e modelos para situações recorrentes",
      "Geração, edição e cópia rápida com a função “Gerar e copiar”",
      "Salvamento automático do formulário no navegador",
      "Histórico pesquisável com opções para copiar e reutilizar textos",
      "Compatibilidade com rascunhos e históricos da versão anterior",
      "Armazenamento local, sem envio de informações corporativas para servidores externos",
    ],
    challenges: [
      "Organizar diferentes tipos de encerramento e modelos sem comprometer a edição do texto final.",
      "Evoluir a estrutura dos dados preservando rascunhos e históricos criados na versão anterior.",
      "Manter formulário e histórico disponíveis sem depender de banco de dados ou servidor externo.",
    ],
    learnings: [
      "Criação de fluxos reutilizáveis para geração e edição de registros técnicos.",
      "Persistência, pesquisa e compatibilidade de dados com localStorage.",
      "Publicação de uma aplicação estática no GitHub Pages.",
    ],
  },
  {
    number: "03",
    slug: "automacao-limpeza-remota",
    title: "Automação de Limpeza Remota em Massa",
    category: "PowerShell e automação",
    group: "automation",
    summary:
      "Ferramenta para configurar, disparar e acompanhar tentativas de execução de uma rotina de limpeza em vários computadores.",
    problem:
      "Executar a mesma rotina individualmente em cada equipamento exige repetição de comandos e dificulta o acompanhamento de um conjunto de máquinas.",
    solution:
      "Uma aplicação Windows Forms recebe a lista de equipamentos e os parâmetros, valida a conexão, distribui os disparos em paralelo e registra o resultado informado por equipamento.",
    result:
      "A interface torna observáveis as tentativas que foram disparadas, as máquinas indisponíveis e o resumo do lote, além de preparar os registros para acompanhamento no painel.",
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
    status: "Demonstração com dados fictícios",
    highlights: [
      "Recebimento de uma lista de máquinas",
      "Configuração do intervalo e do computador de origem",
      "Validação da conexão antes do disparo",
      "Processamento paralelo com identificação de máquinas offline",
      "Resumo do lote e registro do resultado no banco de dados",
      "Painel separado para acompanhamento",
    ],
    limitations: [
      "A versão demonstrada não mede o espaço disponível antes da limpeza.",
      "A versão demonstrada não mede automaticamente o espaço liberado depois da execução.",
      "O status “disparado” indica o envio da execução e, sozinho, não comprova a conclusão da limpeza.",
      "Máquinas offline não recebem o processamento naquele momento.",
    ],
    challenges: [
      "Executar as tentativas em paralelo sem bloquear a interface.",
      "Diferenciar equipamentos disponíveis, offline e com falha durante o lote.",
      "Consolidar o resultado individual em um resumo de acompanhamento.",
    ],
    learnings: [
      "Uso de runspaces para processamento paralelo em PowerShell.",
      "Construção de interfaces desktop com Windows Forms.",
      "Registro de estados intermediários sem confundi-los com confirmação de conclusão.",
    ],
    nextSteps: [
      "Medir o espaço em disco antes e depois da execução.",
      "Calcular o espaço liberado somente após confirmação verificável.",
      "Confirmar o término da rotina no equipamento remoto.",
      "Criar novas tentativas automáticas para máquinas offline.",
      "Manter um histórico detalhado por equipamento.",
    ],
    confidentialityNote:
      "O código não é publicado por conter integrações e configurações de ambiente. As imagens usam hostnames, usuários e resultados fictícios.",
    demonstrationNote:
      "As máquinas, usuários e quantidades exibidos nas imagens são fictícios e servem apenas para demonstrar o fluxo da ferramenta.",
    galleryTitle: "Configuração e retorno do lote",
    galleryDescription:
      "A demonstração separa a preparação dos parâmetros do resumo das tentativas de disparo.",
    gallery: [
      {
        image:
          "/images/projetos/automacao-limpeza-remota/01-configuracao-limpeza-massa.png",
        title: "Configuração do lote",
        description:
          "Recebe uma lista de equipamentos, define os parâmetros de execução e prepara o disparo da rotina em massa.",
        width: 1265,
        height: 1243,
      },
      {
        image:
          "/images/projetos/automacao-limpeza-remota/02-resultado-disparo-limpeza.png",
        title: "Resultado do disparo",
        description:
          "Apresenta o resultado individual das tentativas, separa máquinas que receberam o disparo das que estavam offline e registra o resumo para acompanhamento.",
        width: 2109,
        height: 746,
      },
    ],
  },
  {
    number: "04",
    slug: "toolkit-suporte-tecnico",
    title: "Toolkit de Suporte Técnico",
    category: "Aplicação desktop modular",
    group: "support",
    summary:
      "Aplicação desktop que reúne ferramentas usadas na rotina de suporte técnico em módulos organizados e acessíveis em um único ambiente.",
    problem:
      "Scripts, comandos, mensagens, perfis de acesso autorizados, consultas e procedimentos ficavam distribuídos em arquivos e locais diferentes, aumentando a repetição manual.",
    solution:
      "Um toolkit em Python organizado por módulos para localizar recursos recorrentes, preparar mensagens, consultar scripts e padronizar tarefas de documentação e diagnóstico.",
    result:
      "A aplicação concentra recursos frequentes do atendimento e oferece fluxos guiados para consultar, conferir, copiar ou executar ações previamente configuradas.",
    technologies: ["Python", "Tkinter", "SQLite", "PyAutoGUI", "OpenPyXL", "Firebase"],
    visibility: "private",
    featured: true,
    status: "Demonstração com dados fictícios",
    highlights: [
      "Perfis e atalhos para acessos autorizados",
      "Geração de mensagens padronizadas para o Teams",
      "Biblioteca pesquisável de scripts e procedimentos",
      "Prévia do conteúdo antes da cópia",
      "Geração de alertas técnicos a partir de diagnóstico de memória RAM",
      "Acesso integrado a recursos de limpeza em massa e chamados",
    ],
    sections: [
      {
        title: "Credenciais e atalhos",
        description:
          "Permite cadastrar e selecionar perfis de acesso autorizados e executar a ação configurada por um atalho, reduzindo redigitação durante o atendimento.",
        items: [
          "Cadastro e edição de perfis",
          "Seleção de perfil ativo",
          "Execução da ação previamente configurada",
          "Uso de atalho, como F8, para iniciar a ação",
        ],
      },
      {
        title: "Mensagem para Teams",
        description:
          "Recebe destinatário, número do chamado e descrição; acrescenta saudação e assinatura opcionais, gera a mensagem e abre o contato no Teams.",
      },
      {
        title: "Biblioteca de scripts",
        description:
          "Centraliza scripts, comandos e procedimentos e permite pesquisar por nome ou conteúdo, selecionar um item, conferir a prévia e copiar o material necessário.",
        items: [
          "Pesquisa por nome e por conteúdo",
          "Seleção e visualização prévia",
          "Cópia rápida e atualização da biblioteca",
          "Conteúdo sensível não é apresentado neste portfólio",
        ],
      },
      {
        title: "Alerta de memória RAM",
        description:
          "Organiza os dados do equipamento e a saída de diagnóstico do PowerShell para gerar um alerta técnico padronizado, pronto para documentação ou encaminhamento.",
        items: [
          "Identificação do equipamento e do tipo de máquina",
          "Entrada da saída do diagnóstico de memória",
          "Interpretação dos campos necessários",
          "Geração e cópia do alerta com linguagem não conclusiva",
        ],
      },
      {
        title: "Limpeza em massa",
        description:
          "Oferece acesso integrado à rotina de limpeza remota; os detalhes técnicos e as limitações ficam concentrados no estudo de caso específico.",
        relatedProjectSlug: "automacao-limpeza-remota",
        relatedProjectLabel: "Ver estudo de caso da limpeza remota",
      },
      {
        title: "Chamados",
        description:
          "O Toolkit também disponibiliza acesso a recursos relacionados a chamados. O estudo de caso não detalha funções além das informações documentadas.",
      },
    ],
    limitations: [
      "O código do Toolkit não está neste repositório; por isso, o método de proteção dos dados de credenciais não foi verificado.",
      "O portfólio não publica scripts, comandos sensíveis nem detalhes de infraestrutura.",
      "O módulo de chamados é apresentado apenas na visão geral por não haver documentação suficiente para detalhar suas funções.",
    ],
    challenges: [
      "Reunir rotinas diferentes sem transformar a interface em um fluxo único e difícil de manter.",
      "Permitir a conferência do conteúdo antes da cópia ou execução.",
      "Apresentar informações técnicas de forma padronizada para uso na documentação.",
    ],
    learnings: [
      "Organização modular de uma aplicação desktop em Python.",
      "Construção de interfaces orientadas às etapas reais de atendimento.",
      "Centralização de dados locais e remotos conforme a finalidade de cada módulo.",
    ],
    confidentialityNote:
      "O código não é publicado por conter configurações de ambiente. As imagens usam somente dados fictícios; nenhuma senha é exibida.",
    demonstrationNote:
      "Todos os nomes, e-mails, hostnames, chamados e dados técnicos visíveis nas imagens foram preparados para demonstração.",
    galleryTitle: "Uma ferramenta, diferentes rotinas de suporte",
    galleryDescription:
      "A sequência mostra os módulos documentados e como cada um apoia uma etapa específica do atendimento.",
    gallery: [
      {
        image: "/images/projetos/toolkit-suporte/01-gerenciador-credenciais.png",
        title: "Gerenciador de credenciais e atalhos",
        description:
          "Permite organizar perfis de acesso autorizados e executar ações previamente configuradas, reduzindo a necessidade de digitação repetitiva.",
        width: 1455,
        height: 1081,
      },
      {
        image: "/images/projetos/toolkit-suporte/02-mensagem-teams.png",
        title: "Mensagem para Teams",
        description:
          "Gera uma mensagem padronizada com saudação, identificação do chamado, descrição e assinatura antes de abrir o contato no Teams.",
        width: 1452,
        height: 1083,
      },
      {
        image: "/images/projetos/toolkit-suporte/03-biblioteca-scripts.png",
        title: "Biblioteca de scripts",
        description:
          "Centraliza scripts, comandos e procedimentos e permite pesquisa e seleção rápida durante o atendimento.",
        width: 1451,
        height: 1084,
      },
      {
        image: "/images/projetos/toolkit-suporte/04-previa-script.png",
        title: "Prévia do script",
        description:
          "Exibe o conteúdo antes da cópia para que o comando selecionado possa ser conferido antes da utilização.",
        width: 1451,
        height: 1084,
      },
      {
        image: "/images/projetos/toolkit-suporte/05-alerta-ram-diagnostico.png",
        title: "Entrada do diagnóstico de RAM",
        description:
          "Recebe os dados do equipamento e a saída do PowerShell utilizada para analisar a memória instalada.",
        width: 1454,
        height: 1082,
      },
      {
        image: "/images/projetos/toolkit-suporte/06-alerta-ram-resultado.png",
        title: "Resultado do alerta de RAM",
        description:
          "Transforma informações técnicas da memória em um alerta organizado, pronto para documentação ou encaminhamento.",
        width: 1451,
        height: 1084,
      },
    ],
  },
  {
    number: "05",
    slug: "automacao-chamados-lote",
    title: "Automação de Chamados em Lote",
    category: "Extensão para navegador",
    group: "automation",
    summary:
      "Ferramenta para organizar e automatizar etapas repetitivas no processamento de chamados por meio de uma fila acompanhável.",
    problem:
      "A atualização manual de vários registros exigia a repetição das mesmas etapas e tornava mais difícil acompanhar pendências, falhas e itens indisponíveis.",
    solution:
      "Uma extensão com importação de planilha, consulta ao banco, filtros, controle do tamanho do lote, fila de processamento, contadores e ações para reabrir ou reprocessar registros.",
    result:
      "O painel centraliza a consulta dos registros e seus estados, permitindo observar o andamento do lote e separar itens pendentes, resolvidos, com erro ou offline.",
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
    status: "Demonstração com dados fictícios",
    highlights: [
      "Importação de planilha e carregamento de registros do banco",
      "Filtros por hostname, e-mail, status e origem",
      "Controle do tamanho do lote e fila de processamento",
      "Estados pendente, resolvido, erro e offline",
      "Reabertura, exclusão e reprocessamento de registros",
      "Contadores, origem do registro e indicação de auditoria",
    ],
    limitations: [
      "O estudo de caso omite URLs, seletores, autenticação e detalhes internos da plataforma integrada.",
      "Os números dos painéis são fictícios e não representam volume ou resultado de produção.",
      "O código da extensão não é publicado por conter integrações de ambiente.",
    ],
    challenges: [
      "Representar cada item da fila com um estado claro e recuperável.",
      "Oferecer filtros e ações sem perder a visão consolidada do lote.",
      "Separar dados importados e registros carregados do banco pela origem.",
    ],
    learnings: [
      "Estruturação de uma extensão com Manifest V3 e APIs do Chrome.",
      "Leitura de planilhas com SheetJS e organização dos registros em uma fila.",
      "Modelagem de estados para acompanhamento e reprocessamento de falhas.",
    ],
    confidentialityNote:
      "O código não é publicado porque envolve integrações de uma plataforma corporativa. As imagens removem referências reais e usam dados fictícios.",
    demonstrationNote:
      "As quantidades, hostnames, e-mails, horários e números de chamados exibidos são fictícios e servem somente para ilustrar a interface.",
    galleryTitle: "Acompanhamento e controle da fila",
    galleryDescription:
      "Os painéis mostram a visão consolidada do processamento e os controles disponíveis para filtrar e acompanhar cada registro.",
    gallery: [
      {
        image:
          "/images/projetos/automacao-chamados-lote/01-painel-automacao-chamados.png",
        title: "Painel de acompanhamento",
        description:
          "Centraliza os contadores do processamento e apresenta registros pendentes, resolvidos, com erro ou indisponíveis, além da origem de cada item.",
        width: 1463,
        height: 1075,
      },
      {
        image:
          "/images/projetos/automacao-chamados-lote/02-controle-fila-chamados.png",
        title: "Controle da fila",
        description:
          "Permite carregar registros, filtrar informações, definir o tamanho do lote e acompanhar individualmente o estado de cada item processado.",
        width: 1451,
        height: 1084,
      },
    ],
  },
] satisfies Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
