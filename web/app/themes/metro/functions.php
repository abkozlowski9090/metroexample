<?php

// If the Timber plugin isn't activated, print a notice in the admin.
if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		} );
	return;
}


// Create our version of the TimberSite object
class StarterSite extends TimberSite {

	// This function applies some fundamental WordPress setup, as well as our functions to include custom post types and taxonomies.
	function __construct() {
		show_admin_bar( false );
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'init', array( $this, 'register_menus' ) );
		add_action( 'init', array( $this, 'register_widgets' ) );
		if( function_exists('acf_add_options_page') ) {
		acf_add_options_page(array(
			'page_title' 	=> 'Site Options',
			'menu_title'	=> 'Site Options',
			'menu_slug' 	=> 'options',
			'capability'	=> 'edit_posts',
			'redirect'		=> false
		));
	}
		parent::__construct();
	}


	// Abstracting long chunks of code.

	// The following included files only need to contain the arguments and register_whatever functions. They are applied to WordPress in these functions that are hooked to init above.

	// The point of having separate files is solely to save space in this file. Think of them as a standard PHP include or require.

	function register_post_types(){
		require('lib/custom-types.php');
	}

	function register_taxonomies(){
		require('lib/taxonomies.php');
	}

	function register_menus(){
		require('lib/menus.php');
	}

	function register_widgets(){
		require('lib/widgets.php');
	}


	// Access data site-wide.

	// This function adds data to the global context of your site. In less-jargon-y terms, any values in this function are available on any view of your website. Anything that occurs on every page should be added here.

	function add_to_context( $context ) {

		// Our menu occurs on every page, so we add it to the global context.
		$context['menu'] = new TimberMenu();

		$args = array(
          'post_type' => 'post',
          'posts_per_page' => 3
        );
    $context['latest_news'] = Timber::get_posts($args);

		// Add SVG revision hash to context
		if(file_exists(get_stylesheet_directory().'/assets/images/icons.svg')) {
			$context['svg_sprite_version'] = hash_file('crc32', (get_stylesheet_directory().'/assets/images/icons.svg'));
		}

		// This 'site' context below allows you to access main site information like the site title or description.
		$context['site'] = $this;
		return $context;
	}

	// Here you can add your own fuctions to Twig. Don't worry about this section if you don't come across a need for it.
	// See more here: http://twig.sensiolabs.org/doc/advanced.html
	function add_to_twig( $twig ) {
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter( 'myfoo', new Twig_Filter_Function( 'myfoo' ) );
		return $twig;
	}

}

new StarterSite();


/*
 *
 * My Functions (not from Timber)
 *
 */

// Enqueue scripts
function my_scripts() {

	// Use jQuery from a CDN
	wp_deregister_script('jquery');
	wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js', array(), null, true);

	$cssVers = 1.0;
	if(file_exists(get_stylesheet_directory().'/assets/stylesheets/main.css')) {
		$cssVers = hash_file('crc32', (get_stylesheet_directory().'/assets/stylesheets/main.css'));
	}
	$jsVers = 1.0;
	if(file_exists(get_stylesheet_directory().'/assets/javascripts/app.js')) {
		$jsVers = hash_file('crc32', (get_stylesheet_directory().'/assets/javascripts/app.js'));
	}

	wp_enqueue_style( 'my-styles', get_template_directory_uri() . '/assets/stylesheets/main.css', false, $cssVers );
	wp_enqueue_script( 'polyfill', 'https://cdn.polyfill.io/v2/polyfill.min.js', array(), null, true );
	wp_enqueue_script( 'my-js', get_template_directory_uri() . '/assets/javascripts/app.js', array('polyfill'), $jsVers, true );

}

add_action( 'wp_enqueue_scripts', 'my_scripts' );

// Force Yoast metabox to be low priority
add_filter( 'wpseo_metabox_prio', function() { return 'low'; });
// REmove emoji stuff
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );
