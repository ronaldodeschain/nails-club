# Relatório final

> Estado: auditoria T09 executada localmente em 15/10/2026; suíte T11 e revisão local T12 atualizadas em 16/10/2026. O protótipo não está publicado; os resultados abaixo não são métricas de campo nem declaração de conformidade.

## Identificação da entrega

- URL publicada: ainda não definida.
- Tag/release: pendente.
- Commit correspondente: pendente.
- Data das medições T09: 15/10/2026.
- Data da revisão de testes/documentação T11/T12: 16/10/2026.

## Escopo entregue

Auditoria local de acessibilidade, SEO e desempenho do protótipo. Corrigidos o contraste do botão de envio e o foco do link de salto; a imagem hero recebeu prioridade alta. Não foi publicada uma URL.

## Acessibilidade e compatibilidade

Condição: Chrome integrado no VS Code (versão não exposta), Windows, viewport efetivo de 320x640 CSS px e DPR 1,25. Uma jornada por teclado percorreu o link de salto, a agenda, o filtro e o favorito. O snapshot mostrou um `<h1>`, landmarks nomeados, controles identificáveis e imagens com textos alternativos. A página alterna lista/tabela por breakpoint sem trocar a ordem do documento. Leitor de tela, zoom real em aparelho e hardware touch não foram avaliados.

| Critério WCAG 2.2 | Evidência e impacto | Correção/resultado |
| --- | --- | --- |
| 1.4.3 Contraste (Mínimo), AA | Texto `#e0e0e0` sobre o início ciano `#00b3ff` do gradiente do botão: 1,79:1; abaixo de 4,5:1 para texto normal | Fundo escuro/texto ciano no estado normal e fundo ciano/texto escuro no hover; contraste medido de 7,37:1 |
| 2.4.1 Ignorar Blocos, A | Ativar “Pular para o conteúdo” deixava o foco em `body#topo`, não no conteúdo principal | `<main id="conteudo" tabindex="-1">`; após a correção o foco chega ao main |

## SEO e desempenho

`title` e `meta description` estão presentes; as âncoras internas resolvem e o conteúdo semântico é equivalente entre layouts móveis e desktop. Não há meta robots (o padrão permite indexação e seguimento de links). `canonical` permanece ausente porque a URL pública oficial ainda não existe; definir um endereço local como canonical seria incorreto.

### Medição de laboratório

Condição: servidor PHP 8.5.5 em `127.0.0.1`, Chrome integrado no VS Code (versão não exposta), 320x640 CSS px, DPR 1,25, sem throttling de CPU/rede. A imagem hero selecionou `entrada-do-club-480.jpg` (48.655 bytes), tem dimensões intrínsecas e `fetchpriority="high"`; as imagens da galeria têm dimensões e `loading="lazy"`. CSS e scripts são locais; scripts usam `defer`.

| Métrica | Resultado local | Antes/depois e limite |
| --- | --- | --- |
| LCP | Nenhuma entrada LCP/Paint observada nas três recargas, mesmo com aba visível | Sem valor reportável; a prioridade da imagem mudou de implícita para `high`, mas o delta de LCP não foi medido |
| INP | Event Timing entre 24 e 32 ms; máximo observado de 32 ms no pequeno fluxo de teclado | Proxy sintético, não p75 de campo nem INP oficial; amostra curta |
| CLS | 0,000; nenhum deslocamento qualificável observado | Laboratório local; não representa outras redes/dispositivos |
| `loadEventEnd` | 51, 59 e 75 ms em recargas locais sequenciais | Medida auxiliar, não Core Web Vital; cache/throttling do ambiente não representam produção |

Não há URL publicada nem dados CrUX. A comparação numérica antes/depois de LCP, INP e CLS permanece pendente; não se infere ganho universal nem ranking a partir destes dados.

## Testes

Jornada por teclado, snapshot da árvore acessível, contraste, links internos, metadados e recursos responsivos foram verificados no navegador integrado. Em 16/10/2026, a suíte Playwright executou 40/40 casos em Chromium, Firefox, WebKit, Pixel 7 emulado e iPhone 13 emulado; a mutation check detectou uma remoção intencional da mensagem de sucesso do formulário. Os testes cobrem o protótipo estático servido localmente, não autenticam nem validam a instalação WordPress/XAMPP. Os procedimentos e resultados detalhados estão em `TESTES.md`.

## Limitações e débitos conhecidos

- LCP não foi exposto pela API do navegador integrado; não há comparação numérica de Web Vitals antes/depois.
- Event Timing é uma amostra sintética curta, não dado de campo; CLS 0,000 não garante estabilidade em todos os ambientes.
- Canonical depende da URL oficial; leitor de tela, celular real e dados CrUX ainda não foram avaliados.
- A instalação WordPress/XAMPP ainda precisa de smoke test após a atualização final do tema; banco/restauração, staging, HTTPS e release hospedado ainda não foram ensaiados.
- A origem/licença das imagens ainda não está documentada, portanto preview público e publicação permanecem bloqueados até esclarecer os direitos de uso.
- Esta auditoria não declara conformidade WCAG nem substitui revisão manual completa.

## Rollback

Não aplicável à auditoria T09, que foi local; a versão publicada ainda não existe. O procedimento de rollback da futura implantação está documentado em `CMS.md`, mas aguarda backup restaurado e ensaio em staging.