<?php

/*
 *
 * Custom Menus
 *
 */

// Register your menus here.

	$locations = array(
		'Header Menu' => __( '', 'text_domain' ),
		'Footer Menu' => __( '', 'text_domain' ),
	);
	register_nav_menus( $locations );
