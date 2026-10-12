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



