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



