( function( api ) {

	// Extends our custom "setup tutorials" section.
	api.sectionConstructor['setup-tutorials'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );
