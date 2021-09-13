document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ).mount();
} );




document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#splide-products', {
        type: 'loop',
        fixedHeight: 360,
        gap: 12,
        autoWidth: true,
        lazyLoad: 'nearby',
        focus: 'center',
	    perPage: 3,
        /* perMove: 1, */
        breakpoints: {
            640: {
                perPage: 1,
                gap: 5,
            },
        },
    } ).mount();
} );