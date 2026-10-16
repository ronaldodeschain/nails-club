# CMS e publicação em WordPress

## Estado atual

- Tema filho em `wordpress/tema-filho/nails-club-studio/`; WordPress local no XAMPP está em uso. Usuário de teste, backup restaurado, staging e publicação continuam pendentes.
- Esta pasta contém o tema, não um backup completo de WordPress. No XAMPP, copie o tema para `wp-content/themes/`; não escolha “Import from backup” para este repositório. Studio é uma alternativa local futura, não o ambiente atual.

## Ambiente

- Sistema do desenvolvedor: Windows 64-bit.
- XAMPP local no Windows; WordPress instalado em `C:\xampp\htdocs\nailsclub-local`.
- WordPress: 7.1.3, lido de `wp-includes/version.php` na instalação local.
- PHP do XAMPP: 8.2.12 CLI. O PHP CLI global do workspace pode ser diferente do PHP usado pelo Apache; verificar **XAMPP Control Panel > Apache > Config > PHP (php.ini)** ou `phpinfo()` se houver divergência.
- Cliente MariaDB distribuído no XAMPP: 10.4.32. A versão/engine do servidor conectado ainda não foi confirmada no phpMyAdmin.
- URL local observada: `http://localhost/nailsclub-local/`. HTTPS local não foi verificado e não equivale a HTTPS de produção.
- Smoke test local em 16/10/2026: o permalink `http://localhost/nailsclub-local/inicio/` retorna a página Nails Club; a raiz `/` ainda mostra a listagem de posts. Selecionar `inicio` em **Configurações > Leitura** continua pendente. O editor Gutenberg não foi revalidado após a última mudança do padrão.
- Studio não é o ambiente local atual. Host, staging, domínio, HTTPS e versões de produção ainda não foram escolhidos; não presumir compatibilidade. Registrar os dados do provedor antes da implantação.

## Tema e extensões

- Tema pai: Twenty Twenty-Five (`twentytwentyfive`), tema de blocos oficial; deve estar instalado no XAMPP antes de ativar o filho.
- Tema filho: `wordpress/tema-filho/nails-club-studio/`; `style.css` declara o parent correto, `theme.json` usa schema v3, CSS é escopado à classe `.nails-club-home`, e `functions.php` enfileira CSS e JavaScript local no front-end e CSS no editor.
- O padrão **Nails Club: página inicial** reúne a página em um bloco Custom HTML para evitar incompatibilidade de serialização do Gutenberg; texto não fica dividido em blocos nativos editáveis. Inserir pela aba **Padrões > Destaques** no editor. Não altera arquivos do tema pai.
- As imagens foram copiadas nas variantes de 480px, 960px e original do protótipo; o repositório não registra autoria, licença ou URL de origem. Uso local serve apenas para teste. Não criar preview público nem publicar até confirmar permissão/licença e registrar créditos em `docs/`.
- Plugins instalados/selecionados: nenhum. O padrão inclui formulário demonstrativo com validação apenas no navegador; não envia nem armazena dados, e só é habilitado quando o JavaScript local inicia. Não adicionar plugin de formulário até definir destinatário, finalidade, retenção, consentimento/aviso e rollback.
- O tema não carrega Bootstrap nem jQuery; usa CSS local e blocos core para manter o bundle pequeno e evitar dependências desnecessárias.

## Operação e recuperação

- Usuários de teste ainda não criados. No XAMPP, usar o administrador local apenas para instalar/ativar o tema; criar um usuário fictício com papel **Editor** para validar gestão de páginas. Não guardar senha no repositório. Em produção, aplicar menor privilégio e nunca reutilizar contas de teste.
- Backup antes de migração/atualização: exportar banco (`.sql`) e backup completo do site; manter cópia separada de `wp-content/uploads/`, `wp-content/themes/nails-club-studio/` e plugins usados. Guardar fora do Git, com acesso restrito. Não versionar `wp-config.php`, banco, uploads privados ou credenciais.
- Restauração: primeiro restaurar em uma instância local/staging isolada; verificar URL e páginas; não importar SQL sobre produção sem backup e janela aprovados. O Studio pode importar um backup completo; importar `.sql` sobre um site existente pode mesclar dados, portanto preferir novo site isolado para ensaio.
- Staging e produção ainda não existem para este projeto. Implantar primeiro no staging do host escolhido, com HTTPS e cópia anonimizada; validar conteúdo, links, permissões, acessibilidade, console e confirmar que o formulário continua sem envio até existir um destino/política aprovados. Preview do Studio é público e temporário (sete dias), não é staging nem produção.
- Migração de URL: usar a ferramenta de migração/search-replace suportada pelo host (por exemplo WP-CLI `wp search-replace`, quando disponível), em backup e staging; não fazer substituição textual direta em SQL serializado.
- Studio Sync: disponível conforme plano/host compatível. Um **Push** pode substituir o banco remoto inteiro; não usar em produção sem backup verificado, revisão de itens selecionados e autorização explícita.
- Rollback: desativar o tema filho e reativar Twenty Twenty-Five para recuperar o visual anterior; se dados/arquivos forem alterados, restaurar conjuntamente o backup do banco e os diretórios de uploads/tema/plugins da mesma data. Repetir smoke test após retorno.

## Roteiro XAMPP atual

1. Inicie Apache e MySQL no XAMPP Control Panel.
2. Confirme a instalação em `C:\xampp\htdocs\nailsclub-local` e abra `http://localhost/nailsclub-local/`.
3. Copie `wordpress/tema-filho/nails-club-studio/` para `C:\xampp\htdocs\nailsclub-local\wp-content\themes\nails-club-studio\`.
4. Em **Aparência > Temas**, instale/ative Twenty Twenty-Five e depois Nails Club Studio.
5. Crie uma página, insira **Nails Club: página inicial** em **Padrões > Destaques**, salve e confira o site na URL local.
6. Defina a página em **Configurações > Leitura** somente depois de validar a versão atualizada.
7. Copie/exporte banco e diretórios de tema/uploads fora do Git antes de qualquer migração. Backup e restauração ainda não foram exercitados.

## Roteiro WordPress Studio (alternativa futura)

1. Instale e abra o [WordPress Studio](https://developer.wordpress.com/studio/) para Windows 64-bit. A conta WordPress.com só é necessária para preview, Studio Sync ou recursos conectados.
2. Clique **Add site (+) > Create a new site**. Nome sugerido: `Nails Club - T10`. Não use **Import from backup**: o repositório não contém uma instalação nem backup completo.
3. Em **Advanced settings**, mantenha o WordPress automático e selecione uma versão PHP compatível oferecida pelo Studio; anote WordPress/PHP do site e a versão do Studio. Crie o site e aguarde ficar em execução.
4. No **Site overview > Open in… > File Explorer**, abra a pasta do site. Copie a pasta `wordpress/tema-filho/nails-club-studio/` deste repositório para a pasta `wp-content/themes/` do site. A estrutura final precisa ser `wp-content/themes/nails-club-studio/style.css`.
5. No Studio, abra **WP Admin > Appearance > Themes**. Instale/ative o tema pai **Twenty Twenty-Five** se necessário; em seguida ative **Nails Club Studio**. Se não aparecer, confira o nome da pasta e `Template: twentytwentyfive` no cabeçalho do tema.
6. Vá a **Pages > Add New**, crie `Início`, abra o inserter **Patterns > Featured** e insira **Nails Club: página inicial**. Revise o texto e salve. As imagens de demonstração vêm em `assets/images/` do tema.
7. Em **Settings > Reading**, defina uma página estática e escolha `Início`. Em **Appearance > Editor > Navigation**, ajuste links e nomes para refletir as páginas existentes.
8. Crie um usuário local fictício com papel **Editor** e teste editar/salvar a página; não use nem registre senha real. Mantenha o administrador para manutenção do tema.
9. Exporte um backup pelo **Site overview > Export entire site** e, separadamente, **Export database**. Registre onde estão banco, uploads, tema e plugins; mantenha cópias fora deste repositório.
10. Faça o smoke test local: home, navegação por teclado, 320px/desktop, imagens, links e console. O formulário atual só valida no navegador e não envia dados; não habilitar envio até definir destino/política.
11. Para compartilhar, use **Create preview site** apenas se aceitar URL pública temporária por sete dias. Para produção, escolha host e staging, faça backup, teste migração de URL e só então sincronize/publica com aprovação; revise especialmente qualquer sincronização do banco.

## Fontes

- [WordPress Studio: sites](https://developer.wordpress.com/docs/developer-tools/studio/sites/)
- [WordPress Studio: import/export](https://developer.wordpress.com/docs/developer-tools/studio/import-export/)
- [WordPress Studio: Sync](https://developer.wordpress.com/docs/developer-tools/studio/sync/)
- [WordPress Theme Handbook: child themes](https://developer.wordpress.org/themes/advanced-topics/child-themes/)
- [WordPress Theme Handbook: block patterns](https://developer.wordpress.org/themes/patterns/)

Não incluir senhas, tokens, cookies, chaves, dumps ou dados pessoais neste documento ou no repositório.