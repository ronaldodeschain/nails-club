<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function nails_club_studio_enqueue_styles() {
	$relative_path = 'assets/css/theme.css';
	$file_path     = get_theme_file_path( $relative_path );
	$version       = file_exists( $file_path )
		? (string) filemtime( $file_path )
		: wp_get_theme()->get( 'Version' );

	wp_enqueue_style(
		'nails-club-studio',
		get_theme_file_uri( $relative_path ),
		array(),
		$version
	);
}
add_action( 'wp_enqueue_scripts', 'nails_club_studio_enqueue_styles' );

function nails_club_studio_editor_styles() {
	add_theme_support( 'editor-styles' );
	add_editor_style( 'assets/css/theme.css' );
}
add_action( 'after_setup_theme', 'nails_club_studio_editor_styles' );

function nails_club_studio_enqueue_scripts() {
	$relative_path = 'assets/js/interactions.js';
	$file_path     = get_theme_file_path( $relative_path );
	$version       = file_exists( $file_path )
		? (string) filemtime( $file_path )
		: wp_get_theme()->get( 'Version' );

	wp_enqueue_script(
		'nails-club-studio-interactions',
		get_theme_file_uri( $relative_path ),
		array(),
		$version,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'nails_club_studio_enqueue_scripts' );