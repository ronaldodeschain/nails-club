# Plano de testes

## Estado

O protótipo atual é um arquivo HTML estático. Ainda não há runner de testes automatizados configurado. Os casos abaixo são verificações manuais planejadas; registre a data, navegador, resultado e evidência após executá-los.

## Verificações de T01

| Caso | Procedimento | Resultado esperado | Estado |
| --- | --- | --- | --- |
| Conteúdo sem CSS | Abrir `prototipo/index.html` e desativar CSS | Títulos, conteúdo, tabela e formulário permanecem compreensíveis | Concluído |
| Navegação sem JavaScript | Desativar JavaScript e acionar links da navegação por teclado | Cada âncora leva à seção correspondente | Concluído |
| Zoom | Ampliar a página no navegador | Conteúdo continua disponível e legível | Concluído |
| Divulgação nativa | Acionar o `<summary>` da explicação de dress code | O navegador compatível expande e recolhe o conteúdo | Concluído |
| Formulário estrutural | Inspecionar o formulário de contato | Campos estão associados a rótulos e desativados até existir destino de envio | Concluído |

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

## Execução

Abra `prototipo/index.html` diretamente em um navegador. Não é necessário instalar dependências nem iniciar servidor para o protótipo estático atual.

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



