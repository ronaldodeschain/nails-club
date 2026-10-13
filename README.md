Projeto Nails, Club ficticio para UC mobile first do Senac.

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

Os diretórios ainda sem implementação contêm apenas `.gitkeep` para permanecerem visíveis no Git. Consulte `DECISOES.md`, `TESTES.md` e `CMS.md` para o estado e as pendências de cada frente.