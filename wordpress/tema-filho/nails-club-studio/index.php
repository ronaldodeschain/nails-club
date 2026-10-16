<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<main>
	<?php
	while ( have_posts() ) {
		the_post();
		?>
		<article <?php post_class(); ?>>
			<?php the_title( '<h1>', '</h1>' ); ?>
			<?php the_content(); ?>
		</article>
		<?php
	}
	?>
</main>
<?php wp_footer(); ?>
</body>
</html>