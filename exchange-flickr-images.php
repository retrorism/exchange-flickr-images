<?php
/**
 * Exchange Flickr Images
 *
 * Adds an option to add Flickr or Instagram Images to stories and collaborations
 *
 * @wordpress-plugin
 * Plugin Name: Exchange Flickr Images
 * Plugin URI:  https://github.com/retrorism/exchange-flickr-images
 * Description: Based upon the Acme Footer Image plugin created by Tom McFarlin
 * Version:     1.0.0
 * Author:      Somtijds
 * Author URI:  http://www.somtijds.nl
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Includes the core plugin class for executing the plugin.
 */
require_once( plugin_dir_path( __FILE__ ) . 'admin/class-exchange-flickr-images.php' );

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    0.1.0
 */
function run_exchange_flickr_images() {

	$plugin = new Exchange_Flickr_Images();
	$plugin->run();

}
run_exchange_flickr_images();
