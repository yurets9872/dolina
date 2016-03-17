function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(48.1497608, 25.4227938),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false    
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);





//function initMap() {
//  var map = new google.maps.Map(document.getElementById('map'), {
//    center: {lat: 48.1497608, lng: 25.4227938},
//    zoom: 16
//  });

//  var infowindow = new google.maps.InfoWindow();
//  var service = new google.maps.places.PlacesService(map);
//
//  service.getDetails({
//    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
//  }, function(place, status) {
//    if (status === google.maps.places.PlacesServiceStatus.OK) {
//      var marker = new google.maps.Marker({
//        map: map,
//        position: place.geometry.location
//      });
//      google.maps.event.addListener(marker, 'click', function() {
//        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//          'Place ID: ' + place.place_id + '<br>' +
//          place.formatted_address + '</div>');
//        infowindow.open(map, this);
//      });
//    }
//  });
