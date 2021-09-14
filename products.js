document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#splide', {
        type: 'loop',
        fixedHeight: 400,
        gap: 10,
        autoWidth: true,
        lazyLoad: 'nearby',
        focus: 'center',
	    perPage: 4,
        breakpoints: {
            640: {
                perPage: 1,
                gap: 5,
            },
        },
    } ).mount();
} );