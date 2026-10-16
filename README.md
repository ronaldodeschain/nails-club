Projeto Nails, Club ficticio para UC mobile first do Senac.

[Link para o Github Pages](https://ronaldodeschain.github.io/nails-club/prototipo/index.html)

<h2>Publico alvo</h2>
Góticos a procura de um local seguro e estilizado para frequentar, ouvir boas músicas, conhecer pessoas novas, encontrar amigos, sempre com muito respeito e segurança.

<h2>Tarefas Críticas</h2>

<h3>🎯 1. Identidade e Conceito da Casa Noturna</h3>

* **Objetivo:** Definir claramente a proposta estética e cultural do espaço.
* **Tarefas Críticas:**

  - Criar um **conceito arquitetônico e decorativo** inspirado em estética gótica.
  - Desenvolver uma **marca e identidade visual** .
  - Elaborar um **plano de experiência do público**, incluindo dress code opcional, perfomances artísticas e ambientação temática.

<h3>🎶 2. Programação Cultural e Musical</h3>

* **Objetivo:** Garantir que o espaço seja referencia para a cena alternativa.
* **Tarefas críticas:**

  - Definir uma **curadoria musical**(darkwave,industrial, gothic rock, EBM).
  - Planejamento de **eventos temáticos** (ex: noites de poesia, exposições de arte).
  - Criação de **parcerias com artistas locais** para performances ao vivo.

<h3>💰 3. Sustentabilidade e Viabilidade Econômica</h3>

* **Objetivo:** Mostrar que o projeto é financeiramente viável e sustentável.
* **Tarefas críticas:**

  - Elaborar um **plano de negócios detalhado** com projeções financeiras.
  - Identificar **fontes de receita** (ingressos, bar, merchandising).
  - Desenvolver estratégias de **marketing e divulgação** para atrair o público-alvo.

<h3>📋 Escopo do Projeto Acadêmico (Front‑end)</h3>

| **Dentro do Escopo** | **Fora do Escopo** |
| --- | --- |
| Desenvolvimento da interface digital (site/app) da casa noturna | Parcerias reais com artistas, DJs ou fornecedores |
| Criação de protótipos visuais (wireframes, mockups, UI gótica) | Organização de eventos culturais e musicais |
| Definição da identidade visual aplicada ao front‑end | Gestão operacional diária (contratação, estoque, manutenção) |
| Planejamento da navegação e experiência do usuário | Questões legais e burocráticas (licenças, registros, normas técnicas) |
| Design responsivo e acessibilidade | Execução financeira real (investidores, contratos, aluguel de espaço) |
| Galeria de imagens e informações institucionais | Expansão e franquias em outras cidades ou países |
| Agenda fictícia de eventos (apenas ilustrativa, sem vendas) | Simulação de vendas, compra de ingressos ou controle de estoque |

## T01 — Base HTML

A página inicial está em `prototipo/index.html`. Os links de navegação usam âncoras HTML, então continuam funcionando sem JavaScript. O conteúdo principal também não depende de CSS ou JavaScript. A explicação sobre dress code usa `<details>` e `<summary>`: navegadores compatíveis oferecem a divulgação nativa; se o recurso não for reconhecido, o texto continua presente no documento como fallback.

Para conferir a base sem estilos e scripts, abra `prototipo/index.html` no navegador e desative CSS e JavaScript nas ferramentas de desenvolvimento. Teste os links por teclado e confirme que o zoom continua disponível.

## T02 — Sistema CSS

A folha `prototipo/css/style.css` define tokens de design e estados de interação. As escolhas de cascata, tipografia, unidades e estados estão registradas em `DECISOES.md`.

## T03 — Layout e imagens

O cabeçalho usa Flexbox; o destaque e a galeria usam Grid responsivo. As imagens da casa estão em `prototipo/assets/` e são carregadas localmente. A agenda usa cards em lista no mobile e tabela semântica em telas maiores, sem exigir rolagem horizontal no celular. Casos de viewport e conteúdo estão descritos em `TESTES.md`.

## T07 — Interações nativas

A agenda pode ser filtrada e favoritada; a galeria tem controles por botão e gesto Pointer Events; o formulário valida os campos apenas no navegador, sem enviar nem armazenar dados. O protótipo pode ser aberto offline em `prototipo/index.html`. Consulte `TESTES.md` para os casos exercitados e as verificações ainda pendentes em aparelho físico.

## T08 — jQuery delimitado

jQuery 4.0.0 local é usado somente para limpar a mensagem de estado do formulário quando um campo é editado, com delegação e evento namespaced. Os demais fluxos continuam nativos ou usam Bootstrap. A biblioteca e a licença MIT estão versionadas em `prototipo/assets/vendor/jquery-4.0.0/`; o protótipo permanece offline. Consulte `DECISOES.md` para custo, alternativa e plano de remoção, e `TESTES.md` para a validação.

## T09 — Auditoria local

A auditoria corrigiu contraste do botão e foco do link de salto, revisou metadados/âncoras e elevou a prioridade da imagem hero. O relatório registra resultados e limites: o navegador integrado não expôs LCP e não há métricas de campo sem URL publicada. Consulte `docs/relatorio-final.md` e `TESTES.md`.

## T10 — WordPress local

O tema filho está em `wordpress/tema-filho/nails-club-studio/`. O WordPress local atual roda no XAMPP; copie a pasta para `wp-content/themes/`. O permalink `/inicio/` passou smoke test local; a raiz ainda precisa ser apontada para essa página em **Configurações > Leitura**. Este repositório não é um backup completo de WordPress. Staging e publicação continuam pendentes. Consulte `CMS.md` para o ambiente, backups e limitações, incluindo a confirmação de licença das imagens antes de qualquer preview público.

## T11 — Testes automatizados

Instale Node.js/npm, dependências e navegadores Playwright; rode a matriz Chromium, Firefox, WebKit e perfis móveis emulados:

```powershell
npm ci
npx playwright install chromium firefox webkit
npm test
npm run test:mutation
```

O Playwright inicia um servidor estático para `prototipo/`; a instalação WordPress/XAMPP requer smoke test separado. Relatórios HTML e traces de falha ficam localmente em pastas ignoradas pelo Git. Emulação móvel não substitui teste em aparelho físico. Os roteiros, resultados e pendências estão em `TESTES.md`.

## T12 — Preparação de release

README, decisões, CMS, testes e limitações foram revisados localmente. A auditoria de links/documentação e o smoke test local estão em `TESTES.md`. Publicação, HTTPS, URL, tag e smoke test do ambiente hospedado continuam pendentes; nenhuma operação GitHub foi feita nesta etapa.

## Estrutura do repositório

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

Diretórios ainda sem implementação podem conter `.gitkeep`; o tema filho WordPress está preparado e o site local é executado no XAMPP. Staging e publicação permanecem pendentes. Consulte `DECISOES.md`, `TESTES.md` e `CMS.md` para o estado e as próximas etapas.