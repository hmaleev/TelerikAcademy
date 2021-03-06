<?php 

$sidebar_args = array(
		'id' => 'right-sidebar-1',
		'name' => 'Post Main Sidebar 1',
		'before_widget' => '<ul ><li>',
		'after_widget'  => '</li></ul>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>' 
		);


		$sidebar2_args = array(
		'id' => 'right-sidebar-2',
		'name' => ' Post Main Sidebar 2',
		'before_widget' => '<ul><li>',
		'after_widget'  => '</li></ul>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>' 
		);

register_sidebar($sidebar_args);
register_sidebar($sidebar2_args);

$footerSidebar1 = array(
		'id' => 'footer-sidebar-1',
		'name' => 'Footer Area Sidebar 1',
		'before_widget' => '<ul ><li>',
		'after_widget'  => '</li></ul>',
		'before_title'  => '<h4>',
		'after_title'   => '</h4>' 
		);
$footerSidebar2 = array(
		'id' => 'footer-sidebar-2',
		'name' => 'Footer Area Sidebar 2',
		'before_widget' => '<ul><li>',
		'after_widget'  => '</li></ul>',
		'before_title'  => '<h4>',
		'after_title'   => '</h4>' 
		);
		

register_sidebar($footerSidebar1);
register_sidebar($footerSidebar2);

$footerSidebar3 = array(
		'id' => 'footer-sidebar-3',
		'name' => 'Footer Area Sidebar 3',
		'before_widget' => '<ul ><li>',
		'after_widget'  => '</li></ul>',
		'before_title'  => '<h4>',
		'after_title'   => '</h4>' 
		);
$footerSidebar4 = array(
		'id' => 'footer-sidebar-4',
		'name' => 'Footer Area Sidebar 4',
		'before_widget' => '<ul><li>',
		'after_widget'  => '</li></ul>',
		'before_title'  => '<h4>',
		'after_title'   => '</h4>' 
		);
		

register_sidebar($footerSidebar3);
register_sidebar($footerSidebar4);

		$pageSidebar1_args = array(
		'id' => 'page-sidebar-1',
		'name' => 'Page Sidebar 1',
		'before_widget' => '<ul><li>',
		'after_widget'  => '</li></ul>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>' 
		);
register_sidebar($pageSidebar1_args);
		
register_nav_menu ('top-side-menu','This is top side menu. The menu must be named "Top Menu" to be shown correctly');

$args = array(
	'width'         => 940,
	'height'        => 200,
	'default-image' => get_template_directory_uri() . '/images/header.jpg',
	'uploads'       => true,
);
add_theme_support( 'custom-header', $args );
?>