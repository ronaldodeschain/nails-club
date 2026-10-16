<?php
/**
 * Title: Nails Club: página inicial
 * Slug: nails-club-studio/home
 * Categories: featured
 * Description: Conteúdo inicial editável para o portal fictício Nails Club.
 * Viewport Width: 1280
 */

$theme_image = static function ( $filename ) {
	return esc_url( get_theme_file_uri( 'assets/images/' . $filename ) );
};
?>
<!-- wp:html -->

<div id="topo" class="wp-block-group nails-club-home">

<a class="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
<header class="nails-club-header">
	<a class="navbar-brand" href="#topo" aria-label="Nails Club, início">Nails Club</a>
	<button class="navbar-toggler js-only" type="button" aria-controls="primary-navigation" aria-expanded="false" aria-label="Abrir ou recolher navegação">
		<span aria-hidden="true">☰</span>
	</button>
	<div class="navbar-collapse" id="primary-navigation">
		<nav aria-label="Navegação principal">
			<ul class="navbar-nav">
				<li><a class="nav-link" href="#conceito">O clube</a></li>
				<li><a class="nav-link" href="#galeria">Galeria</a></li>
				<li><a class="nav-link" href="#agenda">Agenda</a></li>
				<li><a class="nav-link" href="#convivencia">Convivência</a></li>
				<li><a class="nav-link" href="#contato">Contato</a></li>
			</ul>
		</nav>
	</div>
</header>



<main id="conteudo" class="wp-block-group nails-club-home__main">

<div class="wp-block-columns are-vertically-aligned-center nails-club-home__hero">

<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%">

<h1 class="wp-block-heading">Noites para quem vive a música alternativa</h1>



<p>O Nails Club é uma casa noturna fictícia com uma proposta acolhedora para pessoas ligadas à cena gótica e alternativa.</p>



<div class="wp-block-buttons">

<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="#agenda">Conheça a agenda demonstrativa</a></div>

</div>

</div>



<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:45%">

<figure class="wp-block-image size-large"><img src="<?php echo $theme_image( 'entrada-do-club.jpg' ); ?>

" srcset="<?php echo $theme_image( 'entrada-do-club-480.jpg' ); ?>

480w, <?php echo $theme_image( 'entrada-do-club-960.jpg' ); ?>

960w, <?php echo $theme_image( 'entrada-do-club.jpg' ); ?>

1408w" sizes="(min-width: 70rem) 31rem, (min-width: 42rem) 45vw, calc(100vw - 4.5rem)" alt="Entrada do Nails Club à noite, com fachada de tijolos, letreiro luminoso e visitantes" width="1408" height="768" fetchpriority="high" decoding="async"/><figcaption>Uma casa fictícia para a cena alternativa.</figcaption></figure>

</div>

</div>



<div id="conceito" class="wp-block-group nails-club-home__section">

<h2 class="wp-block-heading">Um espaço para descobrir e se conectar</h2>



<p>A proposta reúne música, expressão artística e encontros em um ambiente de respeito. A identidade e a programação apresentadas nesta página são conceituais.</p>



<ul class="wp-block-list nails-club-home__feature-list"><li>Curadoria de darkwave, gothic rock, industrial e EBM.</li><li>Encontros temáticos com espaço para diferentes expressões artísticas.</li><li>Dress code opcional: cada pessoa pode expressar seu próprio estilo.</li></ul>



<details><summary>O que significa dress code opcional?</summary><p>É uma sugestão de estilo, não uma exigência. Cada pessoa pode escolher como se vestir.</p></details>

</div>



<div id="galeria" class="wp-block-group nails-club-home__section">

<h2 class="wp-block-heading">Por dentro do Nails Club</h2>



<p>Imagens ilustrativas do espaço fictício.</p>



<div class="wp-block-columns nails-club-home__gallery">

<div class="wp-block-column"><figure class="wp-block-image size-large"><img src="<?php echo $theme_image( 'pista-de-danca.jpg' ); ?>

" srcset="<?php echo $theme_image( 'pista-de-danca-480.jpg' ); ?>

480w, <?php echo $theme_image( 'pista-de-danca-960.jpg' ); ?>

960w, <?php echo $theme_image( 'pista-de-danca.jpg' ); ?>

1408w" sizes="(min-width: 62rem) calc((min(100vw - 2rem, 68rem) - 2rem) / 3), (min-width: 42rem) calc((min(100vw - 2rem, 68rem) - 1rem) / 2), calc(100vw - 2rem)" alt="Público dançando na pista do clube sob luzes azuis e vermelhas" width="1408" height="768" loading="lazy" decoding="async"/><figcaption>Pista de dança</figcaption></figure></div>


<div class="wp-block-column"><figure class="wp-block-image size-large"><img src="<?php echo $theme_image( 'pista-vista-aerea.jpg' ); ?>

" srcset="<?php echo $theme_image( 'pista-vista-aerea-480.jpg' ); ?>

480w, <?php echo $theme_image( 'pista-vista-aerea-960.jpg' ); ?>

960w, <?php echo $theme_image( 'pista-vista-aerea.jpg' ); ?>

1408w" sizes="(min-width: 62rem) calc((min(100vw - 2rem, 68rem) - 2rem) / 3), (min-width: 42rem) calc((min(100vw - 2rem, 68rem) - 1rem) / 2), calc(100vw - 2rem)" alt="Vista elevada da pista com visitantes e iluminação cênica" width="1408" height="768" loading="lazy" decoding="async"/><figcaption>A pista vista de cima</figcaption></figure></div>


<div class="wp-block-column"><figure class="wp-block-image size-large"><img src="<?php echo $theme_image( 'bar.jpg' ); ?>

" srcset="<?php echo $theme_image( 'bar-480.jpg' ); ?>

480w, <?php echo $theme_image( 'bar-960.jpg' ); ?>

960w, <?php echo $theme_image( 'bar.jpg' ); ?>

1408w" sizes="(min-width: 62rem) calc((min(100vw - 2rem, 68rem) - 2rem) / 3), (min-width: 42rem) calc((min(100vw - 2rem, 68rem) - 1rem) / 2), calc(100vw - 2rem)" alt="Bar do clube com equipe atendendo visitantes em um ambiente de luz baixa" width="1408" height="768" loading="lazy" decoding="async"/><figcaption>Bar e convivência</figcaption></figure></div>

</div>

</div>



<div id="agenda" class="wp-block-group nails-club-home__section">

<h2 class="wp-block-heading">Agenda demonstrativa</h2>



<p>Programação fictícia para apresentação do projeto; não representa eventos confirmados nem oferece venda de ingressos.</p>



<div class="agenda-tools js-only">
	<label for="agenda-filter">Filtrar noites da agenda</label>
	<input id="agenda-filter" type="search" autocomplete="off" aria-describedby="agenda-filter-help">
	<p id="agenda-filter-help">A busca considera o nome de cada noite.</p>
</div>
<p id="agenda-status" class="interaction-status" role="status" aria-live="polite" aria-atomic="true">3 noites demonstrativas.</p>
<button class="agenda-action js-only" id="add-agenda-example" type="button">Adicionar exemplo local</button>
<button class="agenda-action js-only" type="button" data-agenda-open aria-controls="agenda-details" aria-haspopup="dialog">Como funciona esta agenda?</button>
<ul class="agenda-cards" data-agenda-list aria-label="Noites da agenda demonstrativa">
	<li data-event-id="darkwave"><article><h3>Noite Darkwave</h3><dl><div><dt>Proposta musical</dt><dd>Darkwave e gothic rock</dd></div><div><dt>Atividade</dt><dd>Encontro musical</dd></div></dl></article></li>
	<li data-event-id="industrial"><article><h3>Ruído Industrial</h3><dl><div><dt>Proposta musical</dt><dd>Industrial e EBM</dd></div><div><dt>Atividade</dt><dd>Apresentação conceitual</dd></div></dl></article></li>
	<li data-event-id="poesia"><article><h3>Versos na Penumbra</h3><dl><div><dt>Proposta musical</dt><dd>Seleção alternativa</dd></div><div><dt>Atividade</dt><dd>Noite de poesia</dd></div></dl></article></li>
</ul>
<div class="agenda-table">
	<table>
		<caption>Exemplos de noites temáticas, sem datas ou eventos confirmados</caption>
		<thead><tr><th scope="col">Noite</th><th scope="col">Proposta musical</th><th scope="col">Atividade</th><th class="js-only" scope="col">Favoritos</th></tr></thead>
		<tbody>
			<tr data-event-id="darkwave"><th scope="row">Noite Darkwave</th><td>Darkwave e gothic rock</td><td>Encontro musical</td><td class="js-only" data-favorite-cell></td></tr>
			<tr data-event-id="industrial"><th scope="row">Ruído Industrial</th><td>Industrial e EBM</td><td>Apresentação conceitual</td><td class="js-only" data-favorite-cell></td></tr>
			<tr data-event-id="poesia"><th scope="row">Versos na Penumbra</th><td>Seleção alternativa</td><td>Noite de poesia</td><td class="js-only" data-favorite-cell></td></tr>
		</tbody>
	</table>
</div>
<dialog class="agenda-dialog" id="agenda-details" aria-labelledby="agenda-details-title" aria-describedby="agenda-details-description">
	<h2 id="agenda-details-title">Sobre a agenda</h2>
	<div id="agenda-details-description"><p>Todas as noites desta página são exemplos fictícios para demonstrar o layout.</p><p>Não são eventos confirmados e não há venda de ingressos.</p></div>
	<button class="agenda-action" type="button" data-agenda-close>Fechar</button>
</dialog>

</div>



<div id="convivencia" class="wp-block-group nails-club-home__section">

<h2 class="wp-block-heading">Respeito faz parte da experiência</h2>



<p>O conceito do Nails Club prioriza uma convivência segura, respeitosa e acolhedora. A proposta é fictícia e não substitui políticas ou serviços de um estabelecimento real.</p>

</div>



<div id="contato" class="wp-block-group nails-club-home__section">

<h2 class="wp-block-heading">Contato</h2>



<p>Este formulário valida os campos somente neste navegador. Nenhum dado será enviado ou armazenado.</p>



<form id="contact-form">
	<fieldset disabled>
		<legend>Mensagem</legend>
		<p><label for="nome">Nome</label><input id="nome" name="nome" autocomplete="name" required></p>
		<p><label for="email">E-mail</label><input id="email" name="email" type="email" autocomplete="email" required></p>
		<p><label for="mensagem">Mensagem</label><textarea id="mensagem" name="mensagem" rows="4" required></textarea></p>
		<button type="submit">Enviar mensagem</button>
	</fieldset>
	<p id="contact-status" class="interaction-status" role="status" aria-live="polite" aria-atomic="true"></p>
</form>

</div>




<footer class="nails-club-footer">
	<p>Nails Club é um projeto acadêmico fictício. Agenda e conteúdo são ilustrativos.</p>
	<a href="#topo">Voltar ao início</a>
</footer>

</div>
<!-- /wp:html -->
