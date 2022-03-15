jQuery(document).ready(function() {

	/* Upsells in customizer (Documentation, Reviews and Support links */
	if( !jQuery( ".emotions-info" ).length ) {
		
		jQuery('#customize-theme-controls > ul').prepend('<li class="accordion-section emotions-info">');
	
		jQuery('.emotions-info').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://www.shapedpixels.com/setup-emotions-lite/" class="button" target="_blank">{setup}</a>'.replace('{setup}', emotionsliteCustomizerObject.setup));
		
		jQuery('.emotions-info').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://wordpress.org/support/view/theme-reviews/emotions-lite" class="button" target="_blank">{review}</a>'.replace('{review}', emotionsliteCustomizerObject.review));
		
		jQuery('.emotions-info').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://wordpress.org/support/theme/emotions-lite" class="button" target="_blank">{support}</a>'.replace('{support}', emotionsliteCustomizerObject.support));
		
		jQuery('.emotions-info').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://www.shapedpixels.com/emotions" class="button" target="_blank">{pro}</a>'.replace('{pro}',emotionsliteCustomizerObject.pro));

		jQuery('#customize-theme-controls > ul').prepend('</li>');
	}
	
});