# Decisões do projeto

## D-001 — Identidade e escopo atual

- **Status:** direção inicial; confirmar contra o escopo acadêmico antes de fechar T01.
- **Decisão atual:** o protótipo representa o Nails Club, uma casa noturna fictícia com foco na cena alternativa, conforme o README.
- **Motivo:** esse é o produto descrito no escopo front-end do projeto.

## D-002 — Protótipo sem framework

- **Status:** em andamento.
- **Decisão atual:** manter o protótipo em HTML nativo antes de adicionar CSS, JavaScript ou framework.
- **Motivo:** preservar conteúdo e navegação básicos sem depender de melhorias posteriores.
- **Evidência inicial:** `prototipo/index.html` contém navegação por âncoras e conteúdo HTML sem dependências externas.

## D-003 — Tokens e estados CSS

- **Status:** implementada em `prototipo/css/style.css`.
- **Tokens:** cores, espaçamento, tipografia, bordas e movimento ficam em `:root`, seguindo a paleta proposta para o Nails Club. `--color-danger-text` foi acrescentada para que o estado inválido use texto/borda legíveis sobre o fundo escuro.
- **Tipografia:** Cinzel e Montserrat são preferidas, com fontes locais de sistema como fallback; o protótipo não depende de download externo.
- **Unidades:** tokens de espaçamento e controles usam pixels conforme a escala definida; tipografia e limites de conteúdo usam `rem`/`ch`; a largura do conteúdo usa `min()` com percentual e `rem`; alturas e espaçamentos de linha são unitless ou relativos ao texto. Pixels ficam reservados a detalhes visuais estáveis, como bordas e contorno de foco.
- **Cascata e especificidade:** propriedades herdáveis de cor e fonte começam em `body`; `h1`/`h2` refinam a tipografia, e as regras de estado com pseudo-classes prevalecem nos controles. `main > section + section > h2::before` demonstra combinadores e pseudo-elemento para decoração sem inserir conteúdo essencial.
- **Estados demonstrados:** links e botão têm estados normal, hover, foco visível e ativo; controles obrigatórios têm regra `:invalid` quando habilitados; `fieldset:disabled` e seus controles demonstram o estado desabilitado. O formulário permanece desabilitado até haver um destino de envio.
- **Movimento:** a transição do botão usa `--transition-speed` e `--hover-scale`; `prefers-reduced-motion` remove a transição e o scroll suave.

## D-004 — Layouts do protótipo

- **Status:** implementada em `prototipo/css/style.css`.
- **Flexbox:** cabeçalho e navegação usam Flexbox com quebra para acomodar larguras estreitas sem alterar a ordem do documento.
- **Grid:** o destaque combina texto e imagem em duas colunas a partir de `42rem`; a galeria passa de uma coluna para duas a partir de `42rem` e três a partir de `62rem`.
- **Ordem semântica:** a ordem visual acompanha a ordem do HTML em todos os tamanhos; não há `order` nem áreas de Grid que reordenem conteúdo.
- **Agenda responsiva:** abaixo de `42rem`, a programação aparece como lista de itens com pares termo/descrição; a partir de `42rem`, aparece a tabela semântica. As duas apresentações mantêm a mesma ordem e apenas uma fica disponível visualmente e na árvore de acessibilidade por breakpoint.
- **Imagens:** imagens locais incluem dimensões intrínsecas, texto alternativo e proporção visual 16:9 para reduzir mudanças de layout durante o carregamento.
- **Validação:** 320 CSS px e os breakpoints de `42rem` e `62rem` foram verificados no navegador integrado; a agenda alterna de cards para tabela e a página não apresenta overflow. Permanecem pendentes conteúdo vazio/variável, dispositivo físico e revisão completa da ordem de leitura com leitor de tela; registrar evidências em `TESTES.md`.

## Registro de novas decisões

Para cada decisão relevante, registrar data, contexto, alternativas consideradas, escolha, consequência e tarefa relacionada. Não registrar segredos ou dados pessoais.