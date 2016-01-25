$(document).ready(function() {


$('.open-menu').click(function(event) {
	//$('.full-page__menu-column').toggleClass('open');
	$('.full-page__menu-column').addClass('open');
	$('.menu-search').removeClass('open')
	$('.menu-search, .open-menu').hide(100);
	$('.close-menu').show(100);
});
$('.close-menu').click(function(event) {
	$('.full-page__menu-column').removeClass('open');
	$('.menu-search, .open-menu').show(100);
	$('.close-menu').hide(100);
});

$('.open-search').click(function(event) {
	$('.menu-search').toggleClass('open');
});

$(".main-article").mCustomScrollbar();
$(".catalog-container").mCustomScrollbar();
$(".galery-cathegory").mCustomScrollbar(
    { scrollbarPosition: "inside" }
);

/* карты */

if($('#map').length > 0){

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 17,
                    scrollwheel: true,
                    navigationControl: false,
		            mapTypeControl: false,
		            scaleControl: false,
		            disableDefaultUI: false,
            		draggable: true,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(document.getElementById('map').dataset.centerx, document.getElementById('map').dataset.centery), 

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles:[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
                    };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');     

                // Create the Google Map using our element and options defined above



                // Let's also add a marker while we're at it
                var image = document.getElementById('map').dataset.cursor;
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(document.getElementById('map').dataset.centerx, document.getElementById('map').dataset.centery),
                    map: map,
                    title: document.getElementById('map').dataset.title,
                    icon: image,
                    animation: google.maps.Animation.BOUNCE
                });

            var map = new google.maps.Map(mapElement, mapOptions);

            marker.setMap(map);
            }
        google.maps.event.addDomListener(window, 'load', init);
}


// 

$('.ul-slide').click(function(e) {
	//e.preventDefault();
	$(this).toggleClass('open');
});

$('.popup-call').click(function(event) {
	event.preventDefault();
	/* Act on the event */
	$.fancybox($('.call-modal'))
});

// galery

$('.lightgallery').lightGallery();
//$('#lightgallery').data('lightGallery').slide(2);

$('.catalog-container__item').click(function(event) {
    var galery = $(this).data('galery');
    $('.lightgallery[data-galery="' + galery + '"] a').click();
});

$('.input-phone').mask('+7 (000) 000-00-00');

});