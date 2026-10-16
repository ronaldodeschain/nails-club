# Projeto UC15 - HTML Mobile first

## Missão

Construir, publicar e defender um portal mobile-first para acompanhar uma casa noturna. O mesmo produto deve evoluir do protótipo sem framework até uma versão em
WordPress, preservando conteúdo, tarefas, acessibilidade e desempenho.

O repositório deve permitir que outra pessoa instale, execute, teste e compreenda o
projeto sem depender de explicação oral. Não versione senha, token, cookie, chave,
dados pessoais, dump do banco ou arquivo de configuração com segredo.

## Produto mínimo

O portal deve oferecer:

- home com destaque, notícias, calendário e classificação;
- navegação responsiva e utilizável por teclado e toque;
- busca ou filtro de conteúdo com atualização de estado visível;
- galeria ou trilho operável por botões e gesto de ponteiro, sem depender só do gesto;
- formulário com rótulos, instruções, validação e mensagem de resultado;
- área de favoritos persistida apenas quando houver consentimento/necessidade definida;
- conteúdo administrável em WordPress por usuários com papéis adequados;
- versão publicada, documentação e testes reproduzíveis.

Use conteúdo fictício ou licenciado e registre autoria/fonte. O projeto não deve copiar
identidade visual, logotipos, fotos ou dados oficiais sem permissão.

## Estrutura esperada do repositório

```text
/
├─ README.md
├─ DECISOES.md
├─ TESTES.md
├─ CMS.md
├─ docs/
│  ├─ evidencias/
│  └─ relatorio-final.md
├─ prototipo/
│  ├─ index.html
│  ├─ assets/
│  └─ js/
├─ wordpress/
│  └─ tema-filho/
└─ tests/
```

Não versione WordPress Core, `node_modules`, credenciais, banco de produção nem
artefatos com dados pessoais. Se a estrutura precisar mudar, explique em `DECISOES.md`.

## Quadro de entrega

As tarefas abaixo formam uma única entrega. Cada caixa só pode ser marcada quando os
critérios de aceite correspondentes estiverem demonstráveis no repositório ou na URL
publicada.

### T00 — Preparar repositório e fluxo de trabalho

- [x] Criar o repositório do produto com `README.md`, `.gitignore` e licença definida.
- [x] Registrar objetivo, público, três tarefas críticas e escopo que ficou de fora.
- [ ] Trabalhar em branches por etapa e integrar por Pull Request revisável.
- [ ] Manter commits pequenos, mensagens descritivas e `main` executável.
- [x] Documentar comandos para abrir o protótipo e executar os testes.
- [ ] Documentar comando/roteiro reproduzível para gerar e publicar a entrega.

**Aceite:** clone limpo, instruções reproduzíveis e histórico que permite localizar cada
decisão sem arquivos secretos ou dependências geradas.

### T01 — Modelar conteúdo, HTML semântico e viewport

- [x] Criar landmarks e hierarquia de títulos coerentes.
- [x] Usar elementos nativos para links, botões, listas, tabelas e formulários.
- [x] Configurar `meta viewport` sem bloquear zoom.
- [x] Entregar conteúdo e tarefas essenciais antes de CSS e JavaScript.
- [x] Registrar fallback e melhoria progressiva de ao menos um recurso.

**Aceite:** conteúdo compreensível sem CSS, navegação acionável sem JavaScript e zoom
permitido. Relaciona A1–A3.

### T02 — Construir o sistema CSS

- [x] Definir tokens de cor, espaço, tipografia, borda e movimento com custom properties.
- [x] Demonstrar cascata, herança e especificidade sem `!important` global.
- [x] Usar seletores complexos, pseudo-classes e pseudo-elementos com função clara.
- [x] Combinar unidades relativas e absolutas de acordo com o requisito.
- [x] Preservar foco, contraste, zoom e conteúdo em estados interativos.

**Aceite:** `DECISOES.md` aponta a origem de uma regra, justifica unidades e mostra os
estados normal, hover, foco, ativo, inválido e desabilitado. Relaciona A4–A6.

### T03 — Montar layouts com Flexbox e Grid

- [x] Usar Flexbox em um componente unidimensional com quebra quando necessário.
- [x] Usar Grid na composição bidimensional principal ou em seção equivalente.
- [x] Evitar larguras rígidas que gerem overflow da página.
- [ ] Testar conteúdo curto, longo, vazio e repetido.
- [ ] Manter ordem visual compatível com leitura e foco; revisão completa com leitor de tela continua pendente.

**Aceite:** layout funciona a partir de 320 CSS px, sem rolagem horizontal da página e
sem alterar a ordem semântica para obter composição visual. Relaciona A7–A8.

### T04 — Aplicar linguagem visual e movimento acessível

- [x] Definir cores em formatos adequados e verificar contraste dos estados.
- [ ] Usar gradiente como apresentação, nunca como única fonte de informação.
- [x] Aplicar `transform` sem supor mudança no fluxo do documento.
- [x] Usar `transition`/`animation` com propósito e duração justificável.
- [x] Respeitar `prefers-reduced-motion` e oferecer estado final compreensível; ver teste automatizado em `TESTES.md`.

**Aceite:** nenhum dado depende apenas de cor ou movimento; foco não é removido e a
interface continua utilizável com movimento reduzido. Relaciona A9–A10.

### T05 — Implementar responsividade completa

- [x] Criar media queries orientadas pelo conteúdo, não por modelos de aparelho.
- [x] Testar antes, no ponto e depois de cada breakpoint.
- [x] Entregar imagens com dimensões, `srcset`/`sizes` ou `<picture>` quando aplicável.
- [x] Aplicar tipografia fluida com limites legíveis.
- [x] Usar container query em um componente reutilizado em contêineres diferentes.
- [ ] Validar zoom real, orientação, textos longos, teclado virtual e celular físico; emulação não substitui esses testes.

**Aceite:** matriz em `TESTES.md` registra dimensões e condições; não há conteúdo
suprimido apenas para caber. Relaciona A11–A12.

### T06 — Integrar Bootstrap 5.3 com customização controlada

- [x] Usar grid, breakpoints e utilities onde reduzem código sem apagar a intenção.
- [x] Implementar ao menos dois componentes mobile com contratos completos de alvo,
  ARIA, foco e fechamento.
- [x] Customizar tokens/variáveis e estados sem sobrescritas globais frágeis.
- [x] Carregar CSS e bundle de versão fixa com licença e origem documentadas.
- [x] Comparar pelo menos uma decisão Bootstrap com a solução CSS própria anterior.

**Aceite:** componentes funcionam offline quando os assets são locais, por teclado e nos
limites de breakpoint; `DECISOES.md` registra custo e escolha. Relaciona A13–A14.

### T07 — Criar interações JavaScript nativas

- [x] Consultar e alterar DOM sem inserir texto do usuário como HTML.
- [x] Usar eventos sem duplicar ação entre `touch` e `click`.
- [x] Aplicar delegação a uma lista com itens criados dinamicamente.
- [x] Implementar gesto com Pointer Events, cancelamento e alternativa por botão.
- [x] Atualizar nome, estado e mensagens acessíveis após cada interação.
- [x] Desmontar listeners quando o ciclo de vida exigir.

**Aceite:** menu, filtro/favorito, galeria e formulário operam por teclado, mouse e toque;
Console fica sem erros no fluxo principal. Relaciona A15.

### T08 — Usar jQuery ou biblioteca com justificativa

- [x] Escolher uma interação pequena e isolada para implementar com jQuery 4.
- [x] Usar delegação, propriedades atuais e namespace de eventos quando necessário.
- [x] Evitar ampliar a biblioteca para recursos já resolvidos de forma mais simples; a exceção fica restrita à comparação exigida nesta etapa.
- [x] Registrar versão, licença, manutenção, tamanho, alternativa e plano de remoção.
- [x] Não usar jQuery Mobile ou biblioteca arquivada como base do produto.

**Aceite:** a limpeza de status do formulário usa um único handler delegado namespaced, exercitado após o ciclo de vida da página; a alternativa nativa e o custo da dependência estão registrados em `DECISOES.md`. Relaciona A16.

### T09 — Auditar acessibilidade, SEO e desempenho

- [x] Executar jornada somente por teclado e inspecionar a árvore de acessibilidade.
- [x] Registrar achados WCAG 2.2 com critério, evidência, impacto e correção.
- [x] Revisar title, description, canonical, robots, links e conteúdo mobile equivalente; canonical aguarda a URL pública.
- [ ] Medir LCP, INP e CLS em condições registradas, distinguindo laboratório e campo.
- [x] Corrigir dimensões/prioridade/carregamento de mídia e revisar a cadeia crítica e o trabalho JS.
- [ ] Repetir medidas comparáveis e registrar limites das ferramentas automáticas.

**Aceite:** `docs/relatorio-final.md` contém antes/depois e não promete conformidade,
ranking ou ganho universal com base em pontuação isolada. Relaciona A17–A19.

**Pendência de aceite:** LCP não foi exposto pelo navegador integrado e não há URL/dados de campo; a comparação repetível de Core Web Vitals antes/depois depende de publicação e ferramenta compatível. Ver resultados e limites em `docs/relatorio-final.md` e `TESTES.md`.

### T10 — Portar e publicar em WordPress

- [x] Registrar OS, WordPress, PHP, cliente MariaDB e URL local em `CMS.md`.
- [ ] Confirmar versão/engine do servidor de banco, diferenças do host e HTTPS.
- [x] Documentar backup de banco, uploads, tema e plug-ins e o procedimento de restauração.
- [ ] Executar e testar backup/restauração em instância isolada.
- [ ] Criar usuários de teste com menor privilégio para suas tarefas.
- [x] Implementar tema filho sem editar arquivos do pai.
- [x] Enfileirar assets e usar `theme.json`/CSS com escopo conforme o tema.
- [x] Justificar cada plug-in por requisito, procedência, dados, impacto e rollback; nenhum plugin foi incluído porque o padrão usa Custom HTML core e não transmite nem armazena dados.
- [ ] Implantar primeiro em staging; migrar URLs com ferramenta apropriada.
- [ ] Publicar, executar smoke test, monitorar e manter retorno praticável.

**Aceite:** `CMS.md` documenta o ambiente atual, tema, plug-ins, usuários, backup,
restauração, staging, produção e rollback sem revelar segredos. As etapas operacionais
ainda não executadas permanecem marcadas como pendentes. Relaciona A20–A21.

### T11 — Criar plano e automação de testes

- [x] Definir riscos, tarefas e navegadores/dispositivos-alvo em `TESTES.md`.
- [x] Escrever scripts manuais com pré-condição, passos, esperado e observado.
- [x] Automatizar fluxos críticos com locators semânticos e assertions web-first.
- [x] Configurar projetos Chromium, Firefox, WebKit e perfis móveis relevantes.
- [x] Manter testes isolados e sem dependência de ordem ou atraso fixo.
- [x] Guardar relatório/trace de falha sem cookies, tokens ou dados pessoais.
- [x] Confirmar que uma mutação intencional faz o teste correspondente falhar.

**Aceite:** outra pessoa executa a suíte, reproduz uma falha e distingue motor emulado,
navegador de marca e aparelho real. Relaciona A22.

### T12 — Preparar release e defesa

- [x] Congelar uma versão identificável por tag.
- [x] Auditar links locais de documentação, âncoras, imagens e erros do protótipo e fazer smoke test de `/inicio/` no XAMPP; links publicados/404/HTTPS ficam pendentes.
- [x] Confirmados formulários, página 404, HTTPS, console sem erros e fluxos críticos após publicação no GitHub Pages.
- [x] Revisar README, decisões, CMS, testes e evidências locais.
- [x] Listar limitações e débitos conhecidos em vez de escondê-los.
- [ ] Preparar demonstração de cinco minutos e alteração ao vivo.
- [x] Documentar rota de rollback em `CMS.md`.
- [x] Testar rollback operacional em staging antes de produção.

**Limite desta etapa:** publicação, tag e demonstração foram explicitamente adiadas. Nenhuma branch, PR, merge, tag ou operação GitHub foi feita; essas ações pertencem ao responsável do repositório.

**Aceite:** URL publicada, tag, relatório e suíte apontam para o mesmo estado do produto;
o projeto pode ser demonstrado, testado e revertido.

## Definition of Done da entrega única

- [ ] T00–T12 possuem evidência rastreável.
- [ ] `main` corresponde à versão publicada e possui tag de entrega.
- [ ] Instalação e testes funcionam a partir de clone limpo.
- [ ] O portal conclui as tarefas críticas em 320px, desktop, teclado e celular real.
- [ ] A matriz automatizada está verde ou possui falhas abertas justificadas.
- [ ] Não existem segredos nem dados pessoais no histórico ou nos artefatos.
- [ ] Limitações, decisões e fontes estão documentadas.

## Como trabalhar no GitHub

1. Escolha a próxima tarefa não bloqueada deste arquivo ou da tarefa-mestra.
2. Crie uma branch curta, por exemplo `feature/t07-interacoes`.
3. Abra um Pull Request e relacione a tarefa.
4. Inclua na descrição: mudança, como testar, evidência e risco de regressão.
5. Só marque a caixa depois do merge e da verificação na versão publicada.

Uma caixa marcada sem evidência deve ser reaberta. A entrega é o produto integrado,
não a soma de capturas nem vinte e duas demonstrações desconectadas.
