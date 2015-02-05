(function (window, google) {

    //map options, Spokane
    var options = {
        center: {
            lat: 47.6728404,
            lng: -117.4121499
        },
        zoom: 10,
        scrollwheel: false
    }
    element = document.getElementById('map-canvas'),
        // map
        map = new google.maps.Map(element, options);

    // Users current position
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (position) {
        var options = {
            center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        },
        zoom: 12,
        scrollwheel: false
}
    element = document.getElementById('map-canvas'),
        // map
        map = new google.maps.Map(element, options);

        // To add Markers
        var marker = new google.maps.Marker({
            position:{
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            map: map
        });
    });
}

// Directions
//    var directionsService = new google.maps.DirectionsService();
//    var directionsRequest = {
//        origin: start,
//        destination: end,
//        travelMode: google.maps.TravelMode.DRIVING
//    };
//    directionsService.route(
//        directionsRequest,
//        function (response, status) {
//            if (status == google.maps.DirectionStatus.OK) {
//                new google.maps.DirectionsRenderer({
//                    map: map,
//                    directions: response
//                });
//            }
//            else
//                $("#error").append("Unable to retrieve route.");
//            $(document).ready(function () {
//                // If the browser supports the Geolocation API
//                if (typeof navigator.geolocation == "undefined") {
//                    $("#error").text("Your browser doesn't support the Geolocation API");
//                    return;
//                }
//                $("#submit").click(function (event) {
//                    event.preventDefault();
//                    //var addressId = this.id.substring(0, this.id.indexOf("-"));
//                    //    var start = document.getElementById("start").value;
//                    //    var end = document.getElementById("end").value;
//                    //    navigator.geolocation.getCurrentPosition(function (position) {
//                    //            var geocoder = new google.maps.Geocoder();
//                    //            geocoder.geocode({
//                    //                    "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
//                    //                },
//                    //                function (results, status) {
//                    //                    if (status == google.maps.GeocoderStatus.OK)
//                    //                        $("#" + addressId).val(results[0].formatted_address);
//                    //                    else
//                    //                        $("#error").append("Unable to retrieve your address<br />");
//                    //                });
//                    //        },
//                    //        function (positionError) {
//                    //            $("#error").append("Error: " + positionError.message + "<br />");
//                    //        },
//                    //        {
//                    //            enableHighAccuracy: true,
//                    //            timeout: 10 * 1000 // 10 seconds
//                    //        });
//                    //});
//                    $("#calculate-route").submit(function (event) {
//                        event.preventDefault();
//                        calcRoute($("#start").val(), $("#end").val());
//                    });
//                })
//            })
//        map = new google.maps.Map(document.getElementById("map-canvas"), options);
//        directionsDisplay.setMap(map);
//
//    function calcRoute() {
//        var start = document.getElementById("start").value;
//        var end = document.getElementById("end").value;
//        var request = {
//            origin:start,
//            destination:end,
//            travelMode: google.maps.TravelMode.DRIVING
//        };
//        directionsService.route(request, function(result, status) {
//            if (status == google.maps.DirectionsStatus.OK) {
//                directionsDisplay.setDirections(result);
//            }
//            map = new google.maps.Map(document.getElementById("map-canvas"), options);
//                directionsDisplay.setMap(map);
//        });
//    }

}(window, google)
);


//$(document).ready(function () {
//    function initialize() {
//        navigator.geolocation.getCurrentPosition(function (pos) {
//            var lat = pos.coords.latitude;
//            var lng = pos.coords.longitude;
//            $("#lat").text(lat);
//            $("#lng").text(lng);
//            var url = '<a href="http://maps.google.com/maps?q=' + lat + ',' + lng + '">Your Location</a>';
//
//            $("#url").html(url);
//
//            var daddr = "Cosmic+Pizza,+1231+E+Mission+Ave,+Spokane,+WA+99207";
//            var saddr = lat + ',' + lng
//            var urlDirection = '<a href="http://maps.google.com/maps?daddr=' + daddr + '&saddr=' + saddr + '">Your Location</a>';
//            $("#urldir").html(urlDirection);
//
//
//            var map = '<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d5373.299608181256!2d-117.39581671021448!3d47.67179913209914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!1i0!3e6!4m0!4m5!1s0x549e18c10c8f7e55%3A0x929b9e2961c0cb4!2s1231+E+Mission+Ave%2C+Spokane%2C+WA+99202!3m2!1d47.671791999999996!2d-117.3912033!5e0!3m2!1sen!2sus!4v1416792797753" width="600" height="450" frameborder="0" style="border:0"></iframe>';
//            var dir_map = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d5367.486435213565!2d-117.3523806!3d47.7282327!3m2!1i1024!2i768!4f13.1!4m12!1i0!3e6!4m3!3m2!1d47.728427599999996!2d-117.35238059999999!4m5!1s0x549e18c10c8f7e55%3A0x929b9e2961c0cb4!2s1231+E+Mission+Ave%2C+Spokane%2C+WA+99202!3m2!1d47.671791999999996!2d-117.3912033!5e0!3m2!1sen!2sus!4v1416791861501" width="600" height="450" frameborder="0" style="border:0"></iframe>';
//            //var dir_map = '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d5367.486435213565!2d-117.3523806!3d47.7282327!3m2!1i1024!2i768!4f13.1!4m12!1i0!3e6!4m3!3m2!1d' + lat + lng + '!4m5!1s0x549e18c10c8f7e55%3A0x929b9e2961c0cb4!2s1231+E+Mission+Ave%2C+Spokane%2C+WA+99202!3m2!1d47.671791999999996!2d-117.3912033!5e0!3m2!1sen!2sus!4v1416791861501" width="600" height="450" frameborder="0" style="border:0"></iframe>';
//            $("#directionMap").html(map);
//            $("#directions").html(dir_map);
//
//        });
//    });
//})
// * Created by peters5174 on 2/2/15.
// */
//// Note: This example requires that you consent to location sharing when
//// prompted by your browser. If you see a blank space instead of the map, this
//// is probably because you have denied permission for location sharing.
//
//var map;
//
//function initialize() {
//    var mapOptions = {
//        zoom: 6
//    };
//    map = new google.maps.Map(document.getElementById('map-canvas'),
//        mapOptions);
//
//    // Try HTML5 geolocation
//    if(navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(function(position) {
//            var pos = new google.maps.LatLng(position.coords.latitude,
//                position.coords.longitude);
//
//            var infowindow = new google.maps.InfoWindow({
//                map: map,
//                position: pos,
//                content: 'Location found using HTML5.'
//            });
//
//            map.setCenter(pos);
//        }, function() {
//            handleNoGeolocation(true);
//        });
//    } else {
//        // Browser doesn't support Geolocation
//        handleNoGeolocation(false);
//    }
//}
//
//function handleNoGeolocation(errorFlag) {
//    if (errorFlag) {
//        var content = 'Error: The Geolocation service failed.';
//    } else {
//        var content = 'Error: Your browser doesn\'t support geolocation.';
//    }
//
//    var options = {
//        map: map,
//        position: new google.maps.LatLng(60, 105),
//        content: content
//    };
//
//    var infowindow = new google.maps.InfoWindow(options);
//    map.setCenter(options.position);
//}
//
//google.maps.event.addDomListener(window, 'load', initialize);