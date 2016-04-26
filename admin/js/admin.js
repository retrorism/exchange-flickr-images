/**
 * Callback function for the 'click' event of the 'Attach Flickr Images'
 * anchor in its meta box.
 *
 * Displays the media uploader for selecting an image.
 *
 * @param    object    $    A reference to the jQuery object
 * @since    0.1.0
 */
function renderMediaUploader( $ ) {
	'use strict';

	var file_frame, json;

	/**
	 * If an instance of file_frame already exists, then we can open it
	 * rather than creating a new instance.
	 */
	if ( undefined !== file_frame ) {
		file_frame.open();
		return;

	}

	/**
	 * If we're this far, then an instance does not exist, so we need to
	 * create our own.
	 *
	 * Here, use the wp.media library to define the settings of the Media
	 * Uploader. We're opting to use the 'post' frame which is a template
	 * defined in WordPress core and are initializing the file frame
	 * with the 'flickr' state, which is added by the Media Manager Plus plugin.
     *
	 */
	file_frame = wp.media.frames.file_frame = wp.media({
		frame:    'post',
		state:    'flickr',
		multiple: false
	});

	// Now display the actual file_frame

	file_frame.open();
	console.log(file_frame.$el);

	// Hide everything but Flickr and Instagram fields.
	file_frame.$el.find('.media-menu a').each(function() {
		var exchange_list = ['Insert from Flickr', 'Insert from Instagram']
		if ( $.inArray($(this).text(),exchange_list ) == -1 ) {
			$(this).hide();
		}
	})

	// Set Flickr field to Tandem Username.
	// TODO: make this into a theme option.
	file_frame.modal.$el.find('.media-flickr #method option[value="getUsersImages"]')
		.prop('selected', true)
		.change();

	file_frame.modal.$el.find('.media-flickr #param').val('TandemExchange').change();

}

/**
 * Render the standard anchor.
 *
 * @param    object    $    A reference to the jQuery object
 * @since    1.0.0
 */


(function( $ ) {
	'use strict';

	$(function() {


		$( '#attach-flickr-images' ).on( 'click', function( evt ) {

			// Stop the anchor's default behavior
			evt.preventDefault();

			// Display the media uploader
			renderMediaUploader( $ );

		});

	});

})( jQuery );
