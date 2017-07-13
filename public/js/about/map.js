function initMap() {
  var uluru = {lat: 47.2783295666323, lng: 39.72452371391791};
  var marker = {lat: 47.27753187991772, lng: 39.72419112000007};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru,
    disableDefaultUI: true,
    scrollwheel: false,
    styles: [
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#46bcec"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#4369aa"
          }
        ]
      }
    ]
  });

  var image = '../../../assets/img/map/map_marker_n.png';
  var beachMarker = new google.maps.Marker({
    position: marker,
    map: map,
    icon: image
  });

  var contentString = 'г.Ростов-на-Дону'


  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  beachMarker.addListener('click', function() {
    infowindow.open(map, beachMarker);
  });


}