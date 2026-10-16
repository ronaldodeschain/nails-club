# Plano de testes

## Estado

O protótipo é um arquivo HTML estático. A suíte Playwright em `tests/e2e/` serve `prototipo/` localmente e cobre Chromium, Firefox, WebKit e dois perfis móveis emulados. Testes emulados não substituem validação em aparelho físico; os casos explicitamente pendentes continuam pendentes.

## Verificações de T01

| Caso | Procedimento | Resultado esperado | Estado |
| --- | --- | --- | --- |
| Conteúdo sem CSS | Abrir `prototipo/index.html` e desativar CSS | Títulos, conteúdo, tabela e formulário permanecem compreensíveis | Concluído |
| Navegação sem JavaScript | Desativar JavaScript e acionar links da navegação por teclado | Cada âncora leva à seção correspondente | Concluído |
| Zoom | Ampliar a página no navegador | Conteúdo continua disponível e legível | Concluído |
| Divulgação nativa | Acionar o `<summary>` da explicação de dress code | O navegador compatível expande e recolhe o conteúdo | Concluído |
| Formulário estrutural | Inspecionar rótulos, validação e enviar dados fictícios | Campos têm rótulos; validação e mensagem são locais; não há requisição `POST` nem persistência | Concluído; coberto por Playwright |

## Verificações de T03

| Caso | Procedimento | Resultado esperado | Estado |
| --- | --- | --- | --- |
| Largura mínima | Abrir a página em 320 CSS px | Sem rolagem horizontal da página; agenda apresentada em cards sem barra horizontal | Concluído |
| Breakpoint de 42rem | Testar imediatamente antes, em e depois de 42rem | Destaque e navegação reorganizam; agenda alterna de cards para tabela sem corte | Concluído |
| Breakpoint de 62rem | Testar imediatamente antes, em e depois de 62rem | Galeria muda para três colunas sem overflow | Concluído |
| Conteúdo longo e repetido | Conferir título, legenda, várias imagens e linhas da agenda | Conteúdo quebra sem alargar a página e os cards continuam legíveis | Pendente |
| Ordem de leitura e foco | Percorrer a página com teclado e leitor de tela | Foco e leitura seguem a ordem do HTML | Pendente |
| Imagens locais | Abrir a página local e conferir o carregamento da galeria | As quatro imagens locais carregam com proporção e texto alternativo | Concluído |

## Verificações de T05

Use CSS pixels no modo responsivo do navegador. Os limites atuais são 24rem (384px), 42rem (672px) e 62rem (992px), considerando a raiz padrão de 16px. Registre também navegador e zoom; não trate emulação como teste em aparelho real.

| Caso | Viewports/procedimento | Resultado esperado | Estado |
| --- | --- | --- | --- |
| Largura mínima e estreita | 320x640 e 383/384/385x800 | Sem overflow horizontal; margens e navegação permanecem utilizáveis | Concluído no navegador integrado |
| Breakpoint 42rem | 671/672/673x900 | Cabeçalho e destaque reorganizam; agenda troca cards/tabela sem duplicar conteúdo acessível | Concluído no navegador integrado |
| Breakpoint 62rem | 991/992/993x900 | Galeria troca de duas para três colunas sem comprimir ou cortar imagens | Concluído no navegador integrado |
| Container query dos cards | 430/500/600x800 | Metadados dos cards permanecem empilhados em espaço estreito e alinham em colunas quando o card comporta | Concluído no navegador integrado |
| Orientação | 360x800 e 800x360 | Conteúdo e controles continuam disponíveis em retrato e paisagem | Concluído em viewports emuladas |
| Conteúdo longo | Aumentar temporariamente título, navegação e legenda com texto longo | Texto quebra sem sobrepor controles nem aumentar a largura da página | Concluído em viewport de 320 CSS px |
| Zoom real | Zoom do navegador em 200% | Sem perda de conteúdo ou rolagem horizontal da página | Pendente; viewport equivalente de 160 CSS px passou |
| Foco por teclado | Navegar por teclado até o primeiro link | O foco permanece visível | Concluído; contorno visível no link de salto |
| Teclado virtual | Focar controles em celular físico com teclado virtual aberto | Campo em foco continua visível; não há controles essenciais encobertos | Pendente |
| Celular real | Repetir largura mínima, orientação, zoom e foco em aparelho físico | Resultado compatível com o protótipo; registrar modelo, navegador e condições | Pendente |
| Imagens responsivas | Inspecionar resolução de origem, dimensões e largura renderizada | As imagens preservam proporção e não causam overflow; adicionar `srcset`/`sizes` ou `<picture>` quando houver variantes adequadas | Concluído; `srcset` selecionou variantes 480px e 960px |

## Verificações de T06

Bootstrap 5.3.8 está em `prototipo/assets/vendor/bootstrap-5.3.8/`. Faça os testes abrindo o HTML local (`file://`); registre separadamente qualquer teste em celular real.

| Caso | Viewports/procedimento | Resultado esperado | Estado |
| --- | --- | --- | --- |
| Grid Bootstrap | 767/768/769x900 | Lista de conceito passa de uma coluna para três em 768px, sem overflow | Concluído no navegador integrado |
| Navbar móvel | 320/480/991/992px; ativar o controle com Enter, percorrer os links e escolher uma âncora | Alvo de pelo menos 44px; `aria-expanded` acompanha abertura/fechamento; o destino recebe foco visível | Concluído no navegador integrado; 992px mostra navegação expandida |
| Modal por teclado | Focar o botão da agenda e ativar com Enter; pressionar Tab repetidamente | Diálogo tem nome e descrição acessíveis; foco permanece dentro enquanto está aberto | Concluído no navegador integrado |
| Fechar Modal | Fechar com Escape e com o botão “Fechar” | Diálogo some, a rolagem do fundo é restaurada e o foco retorna ao acionador | Concluído no navegador integrado |
| Arquivos locais/offline | Abrir `prototipo/index.html` diretamente e inspecionar recursos carregados | CSS e bundle locais carregam; nenhum recurso Bootstrap depende de CDN | Concluído; nenhuma requisição HTTP(S) externa observada |
| Fallback sem JavaScript | Desativar JavaScript no navegador e abrir a página | Links de navegação continuam disponíveis; controles que dependem de JS não aparecem | Pendente de teste com JavaScript realmente desativado; regra `no-js` conferida em simulação |

## Verificações de T07

Abra o protótipo local no navegador integrado. Os testes com Pointer Events de tipo touch são emulação, não substituem a validação num celular físico.

| Caso | Procedimento | Resultado esperado | Estado |
| --- | --- | --- | --- |
| Filtro e busca vazia | Filtrar por `darkwave`, limpar e buscar texto sem correspondência | Cards e linhas da tabela permanecem sincronizados; status anuncia quantidade, inclusive zero | Concluído no navegador integrado |
| Conteúdo não confiável | Usar `<img src=x onerror=alert(1)>` como texto da busca | Nenhum elemento é criado e a consulta não executa marcação | Concluído; busca não cria elementos HTML |
| Favorito delegado | Usar Enter/clique em favorito existente e em item demonstrativo adicionado durante a sessão | `aria-pressed`, nome e status mudam; controles equivalentes em card e tabela ficam sincronizados | Concluído no navegador integrado |
| Galeria por botão | Focar anterior/próxima e ativar por teclado | Slide e mensagem `aria-live` mudam; a grade desktop continua preservada | Concluído no navegador integrado |
| Gesto e cancelamento | Arrastar horizontalmente a galeria; em seguida simular `pointercancel` com `pointerType="touch"` | Arrasto avança uma imagem; cancelamento não altera o slide; sem overflow da página | Concluído com mouse e PointerEvent touch emulado |
| Formulário inválido | Enviar com campos obrigatórios vazios | Validação nativa foca o primeiro campo inválido e o status orienta a revisão | Concluído no navegador integrado |
| Formulário válido | Preencher campos e enviar | Status informa validação local; campos são limpos; não há envio ou persistência | Concluído no navegador integrado |
| Ciclo de vida e console | Simular `pagehide`/`pageshow`, repetir uma ação e observar console | Listeners não duplicam, estados continuam operando e o fluxo principal não gera erros | Concluído; zero erros no fluxo integrado |
| Dispositivo touch real | Repetir Navbar, favoritos, galeria e formulário em celular físico | Gestos e controles funcionam por toque, sem ação duplicada | Pendente; emulação não substitui aparelho |

## Execução

Abra `prototipo/index.html` diretamente em um navegador. Não é necessário instalar dependências nem iniciar servidor para o protótipo estático atual.

## Verificações de T08

Abra `prototipo/index.html` localmente. jQuery 4.0.0 e a licença MIT são arquivos locais; não deve haver requisição externa.

| Caso | Procedimento | Resultado esperado | Estado |
| --- | --- | --- | --- |
| Limpeza delegada | Produzir uma mensagem no status do formulário e editar um campo | O status é limpo; a entrada não dispara envio nem muda outros estados | Concluído no navegador integrado |
| Ciclo de vida namespaced | Disparar `pagehide` e `pageshow`, depois editar um campo | Há exatamente um handler `t08`, a limpeza funciona e não há erro no console | Concluído no navegador integrado |
| Execução offline | Abrir o arquivo local e conferir a origem do script | jQuery 4.0.0 carrega do diretório local, sem dependência de CDN | Concluído no navegador integrado |

Registro de execução: 15/10/2026, Chrome integrado no VS Code (versão não exposta). jQuery `4.0.0`; status inválido apareceu, foi limpo ao editar, e após o ciclo de vida permaneceu um handler namespaced; console sem erros.

## Verificações de T09

Condições: 15/10/2026, Chrome integrado no VS Code (versão não exposta), Windows, servidor PHP 8.5.5 em `127.0.0.1`, viewport efetivo de 320x640 CSS px, DPR 1,25 e sem throttling de CPU/rede. A emulação não substitui aparelho ou leitor de tela reais.

| Caso | Procedimento | Resultado observado | Estado |
| --- | --- | --- | --- |
| Jornada por teclado | Tab/Enter do link de salto à agenda; filtrar e favoritar sem mouse | Foco chega ao `<main>` e à seção Agenda; filtro e favorito operam por teclado; sem erros no console | Concluído no navegador integrado |
| Árvore acessível | Inspecionar snapshot da página em viewport móvel e desktop | Um `<h1>`, landmarks nomeados, controles com nomes, imagens com `alt`; lista/tabela responsiva expõe a apresentação do breakpoint | Concluído no navegador integrado; leitor de tela real pendente |
| Contraste e salto | Calcular contraste do botão e verificar foco após ativar link de salto | Botão: 1,79:1 antes e 7,37:1 depois; foco do salto: `body` antes e `<main id="conteudo">` depois | Correções verificadas no navegador integrado |
| SEO e conteúdo responsivo | Conferir metadados, âncoras e conteúdo nos dois breakpoints | `title` e `description` presentes; âncoras internas resolvidas; mesmo conteúdo semântico no mobile/desktop; canonical aguarda URL pública; meta robots ausente (padrão index/follow) | Revisão concluída; canonical/política de publicação pendentes |
| Mídia e cadeia crítica | Inspecionar imagens e carregamento de recursos | Imagens têm `width`, `height` e `alt`; hero selecionou `entrada-do-club-480.jpg` (48.655 bytes) e recebe `fetchpriority="high"`; galeria usa `loading="lazy"`; scripts locais têm `defer` | Concluído por inspeção e navegador |
| LCP de laboratório | Observar `largest-contentful-paint` e Paint Timing em três recargas locais | Nenhuma entrada LCP/Paint fornecida pelo navegador integrado, mesmo com aba visível; não foi atribuído valor | Não mensurável neste ambiente |
| INP e CLS de laboratório | Observar Event Timing durante filtro/favorito por teclado e Layout Shift | Event Timing observado entre 24–32 ms (máximo 32 ms nesta pequena amostra); CLS 0,000, sem deslocamentos qualificáveis observados | Proxy de laboratório; não é INP de campo |
| Métrica de campo e repetição | Consultar CrUX após publicar e comparar antes/depois em ambiente controlado | Sem URL publicada/dados de campo; não há comparação numérica LCP/INP/CLS antes/depois | Pendente de publicação e ferramenta de medição adequada |

Limites: os tempos de Event Timing são amostras sintéticas de poucas interações, não o p75 de INP de usuários; CLS zero não prova estabilidade em outros aparelhos/rede; ausência de LCP é limitação do navegador de teste. Métricas de campo e comparação repetível devem ser feitas após publicação, com condições e cache registrados.

## Verificações de T10

Pré-condição: iniciar Apache/MySQL no XAMPP e atualizar o tema em `C:\xampp\htdocs\nailsclub-local\wp-content\themes\nails-club-studio\`, conforme `CMS.md`. Studio permanece uma alternativa futura.

| Caso | Procedimento | Resultado esperado | Estado |
| --- | --- | --- | --- |
| Estrutura do tema | Conferir `style.css`, `functions.php`, `theme.json`, padrão e imagens | Child theme aponta para `twentytwentyfive`; CSS/JSON/PHP têm estrutura válida e assets estão locais | Estrutura preparada; lint PHP e parse JSON passaram |
| Ativação | Ativar Twenty Twenty-Five e depois Nails Club Studio em Aparência > Temas | Tema filho ativo sem editar arquivos do pai nem gerar erro PHP | Ativo no XAMPP; permalink e assets passaram smoke local; validação do editor continua pendente |
| Front-end local | Abrir `http://localhost/nailsclub-local/inicio/`; conferir markup, imagens, script e console; adicionar um exemplo na agenda | HTTP 200, tema e JS ativos, imagens carregadas, evento temporário criado, sem erro de console/4xx | Passou em 16/10/2026 no Chromium local: 4 imagens, 3→4 eventos, zero erros | Concluído para o permalink local |
| Página inicial e editor | Abrir `/`, definir a página `inicio` em Configurações > Leitura; editar/salvar uma página nova com o padrão | Raiz mostra a home e o editor não mostra bloco inválido | `/` ainda mostra a lista de posts; a tela do editor não foi validada após a última alteração | Pendente |
| Papel mínimo | Criar usuário local Editor e validar edição de página sem permissões administrativas | Editor altera conteúdo, mas não instala temas/plugins nem altera configurações do site | Pendente; usuário de teste ainda não criado |
| Backup e restauração | Exportar banco e site; restaurar em instância local isolada | Banco, uploads, tema e plugins são recuperáveis sem sobrescrever produção | Pendente; XAMPP existe, mas backup/restauração não foram exercitados |
| Procedência de mídia | Identificar autoria/licença de cada imagem e registrar créditos | Uso redistribuído está autorizado antes de preview público ou produção | Bloqueio de publicação; fonte não documentada no repositório |
| Staging, HTTPS e rollback | Aplicar em staging, verificar HTTPS e executar retorno ao backup | Smoke test aprovado e recuperação comprovada antes de produção | Pendente; host/staging não definidos |

## T11 — Plano e automação

### Riscos cobertos

| Risco | Prioridade | Sinal de falha coberto |
| --- | --- | --- |
| Navegação inacessível por teclado ou menu que não fecha/expõe estado | Alta | `aria-expanded`, links por âncora e foco no destino |
| Agenda dessincronizada entre cards/tabela, filtro incorreto ou favorito sem estado | Alta | Busca, contagem, `aria-pressed` e exemplo criado durante a sessão |
| Mensagem de contato enviada ou estado de validação ausente | Alta | Validação inválida/válida e confirmação sem envio de rede |
| Layout transbordando ou apresentação errada nos limites responsivos | Alta | Viewports 320, 671, 672, 991 e 992 CSS px |
| Modal não fechar por teclado ou não devolver foco | Média | Escape, estado fechado e foco no acionador |
| Falha isolada em motor ou perfil móvel | Média | Projetos separados Chromium, Firefox, WebKit, Pixel 7 e iPhone 13 emulados |

### Pré-condições e execução

- Node.js/npm instalados; versão usada nesta execução: Node 24.12.0 e npm 11.6.2.
- Em clone limpo, execute `npm ci` e `npx playwright install chromium firefox webkit`.
- `npm test` inicia automaticamente um servidor estático de `prototipo/`, executa os oito fluxos em cinco projetos e gera relatório/traces de falha.
- `npm run test:mutation` remove de forma temporária a mensagem de sucesso do formulário e verifica que a assertion correspondente detecta a mutação. A falha provocada é esperada e isolada da suíte normal.
- `npm run test:report` abre o relatório HTML gerado. `test-results/` e `playwright-report/` ficam fora do Git.
- A suíte automatiza `prototipo/index.html` servido localmente; não autentica nem testa o painel WordPress. Faça o smoke test da instalação XAMPP separadamente.

### Roteiros manuais

| Caso | Pré-condição e passos | Resultado esperado | Observado | Estado |
| --- | --- | --- | --- | --- |
| Menu e foco | Abrir a home em 390px; operar menu por Enter; escolher Agenda | `aria-expanded` acompanha o estado, URL recebe `#agenda` e o foco chega ao destino | Assertions passaram em Chromium, Firefox, WebKit e perfis emulados | Automatizado; repetir manualmente em aparelho físico |
| Agenda | Abrir em 390px; filtrar `darkwave`, limpar, favoritar e adicionar exemplo | Cards/tabela sincronizados, status anunciado e exemplo visível; dados são temporários | Assertions passaram nos cinco projetos | Automatizado |
| Galeria | Abrir em 390px e avançar por botão; arrastar a figura visível | Status e slide acompanham o movimento; sem depender só do gesto | Assertions passaram nos cinco projetos | Automatizado; toque físico pendente |
| Modal | Abrir “Como funciona esta agenda?”; pressionar Escape | Diálogo fecha e foco retorna ao acionador | Assertions passaram nos cinco projetos | Automatizado |
| Formulário | Enviar vazio; preencher dados fictícios `example.test`; enviar | Validação orienta campos; sucesso é local e nenhum dado é enviado/armazenado | Assertions passaram nos cinco projetos | Automatizado |
| Breakpoints | Repetir em 320, 671, 672, 991 e 992 CSS px | Sem overflow horizontal; agenda muda de cards para tabela em 672px | Assertions passaram nos cinco projetos | Automatizado; zoom real pendente |
| Movimento reduzido | Emular `prefers-reduced-motion: reduce`, focar/hover no formulário | Scroll `auto`, transição `0s`, sem escala no hover | Assertions passaram após corrigir a media query | Automatizado nos cinco projetos |
| Links e recursos locais | Carregar home, validar cada âncora `#`, decodificar imagens e observar respostas/erros de página | Todos os destinos existem; assets locais retornam 2xx; sem exceções JS | Assertions passaram nos cinco projetos | Automatizado |
| WordPress/XAMPP | Iniciar Apache/MySQL, abrir a página local atualizada e verificar tema, assets, agenda e console | Página responde e fluxos locais funcionam sem erros | `/inicio/` passou; raiz ainda não está definida como home e editor Gutenberg segue pendente | Parcial; ver casos T10 |
| Dispositivo real | Repetir navegação, formulário, gestos, teclado virtual e zoom em celular físico | Comportamento corresponde à emulação sem ocultar conteúdo ou foco | Nenhum aparelho físico foi usado nesta execução | Pendente |

### Resultado T11

- 16/10/2026: `npm test` passou com 40/40 execuções: oito fluxos em Chromium, Firefox, WebKit, Pixel 7 emulado e iPhone 13 emulado, incluindo os novos testes de movimento reduzido e smoke local.
- 16/10/2026: `npm run test:mutation` removeu a mensagem de sucesso na resposta JavaScript; a assertion de sucesso falhou como esperado e o autodiagnóstico confirmou a detecção, encerrando o comando com sucesso.
- Falhas iniciais da suíte expuseram duas expectativas de teste incorretas (status da galeria após gesto e corrida com transição do modal); foram corrigidas usando a figura atualmente visível e eventos `shown.bs.modal`/`hidden.bs.modal`, sem atrasos fixos.
- O smoke automatizado usa os navegadores fornecidos pelo Playwright; não prova compatibilidade com todas as versões de navegadores de marca nem substitui aparelhos reais.
- Os testes não fazem login no WordPress nem usam dados reais. O formulário usa apenas dados fictícios e não envia requisição.

## T12 — Revisão local pré-release

| Verificação local | Resultado | Limite |
| --- | --- | --- |
| Links de arquivo/imagem em Markdown | Todos os links locais nos seis arquivos Markdown verificados resolvem no repositório | URLs externas não são parte do teste local |
| Fontes e referências externas em `CMS.md`/`DECISOES.md` | Páginas WordPress, Bootstrap, jQuery e jsDelivr consultadas em 16/10/2026 | Disponibilidade pode mudar; repetir antes da publicação |
| Âncoras, imagens, respostas locais e erros JS do protótipo | Cobertos pelo smoke Playwright na matriz de cinco projetos | Não testa URLs publicadas nem o painel WordPress |
| WordPress local | Chromium abriu `/inicio/`, decodificou 4 imagens, criou evento temporário e não observou console/4xx | A raiz `/` ainda lista posts; editor Gutenberg não foi validado nesta etapa |
| README, decisões, CMS e testes | Revisados contra a implementação atual; status XAMPP separado de Studio e itens não verificados continuam pendentes | Sem URL/tag; revisão final do release após deploy |
| 404, HTTPS, links e fluxos no host | Não executados, conforme escopo desta etapa | Dependem da publicação, explicitamente adiada |

Limitações que permanecem: imagens sem procedência/licença documentada; versão/engine do servidor MariaDB ainda não confirmada; sem usuário WordPress Editor de teste, backup restaurado, staging, domínio/HTTPS ou rollback ensaiado; métricas Core Web Vitals comparáveis e validação em aparelho físico pendentes. Nenhum resultado emulado é apresentado como teste de aparelho real.

## Registro de resultados

| Data | Navegador/versão | Casos executados | Resultado/evidência |
| --- | --- | --- | --- |
| 12/10/2026 | Microsoft Edge | CSS desativado | ![teste 01](/prototipo/assets/testes/T01-teste1.jpg) |
| 12/10/2026 | Microsoft Edge | Navegação sem Javascript| ![teste 01](/prototipo/assets/testes/T01-teste1.jpg) |
| 12/10/2026 | Microsoft Edge | Zoom | ![teste 01](/prototipo/assets/testes/T01-teste3.jpg) |
| 12/10/2026 | Microsoft Edge | Divulgação nativa | ![teste 01](/prototipo/assets/testes/T01-teste4.jpg) |
| 12/10/2026 | Microsoft Edge | Formulário estrutural | ![teste 01](/prototipo/assets/testes/T01-teste5.jpg) |
| 12/10/2026 | Chrome 150.0.7871.250 (VS Code, Windows) | Agenda e breakpoints de layout | 320 CSS px: cards sem overflow; 656/672/688: agenda alterna para tabela; 976/992/1008: galeria passa de duas para três colunas; página sem overflow |
| 14/10/2026 | Chrome integrado no VS Code (versão não exposta) | T05: larguras, breakpoints, container query, imagens, orientação, conteúdo longo e foco | Sem overflow de 320 a 993 CSS px e a 160 CSS px; agenda alterna em 672px, galeria em 992px; cards se adaptam; variantes 480/960 carregam; orientação e foco visível aprovados. Zoom real, teclado virtual e aparelho físico permanecem pendentes. |
| 14/10/2026 | Chrome integrado no VS Code (versão não exposta) | T06: grid, Navbar, Modal, foco, breakpoints e recursos locais | Grid muda para três colunas em 768px; Navbar colapsa até 991px e expande em 992px; seleção por teclado move foco à seção e exibe contorno; Modal mantém foco, fecha por Escape/botão e restaura acionador; nenhum recurso HTTP(S) externo. |
| 14/10/2026 | Chrome integrado no VS Code (versão não exposta) | T07: filtro, favoritos, item dinâmico, galeria, formulário e ciclo de vida | Busca sincroniza lista e tabela; favorito dinâmico atualiza ARIA/status; swipe avança e `pointercancel` preserva slide; formulário inválido/válido não envia dados; `pagehide`/`pageshow` não duplica listeners; zero erros de console. Gesto touch validado por emulação, não em aparelho físico. |



