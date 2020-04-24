// array to store cafe locations for the map markers
var markers = new Array();

//function to display map of ireland showing cafe locations with map markers and info window when clicked
function initMap() {
    // var to set map location to ireland
    var ireland = new google.maps.LatLng(53.305494, -7.737649);

    // var to add cafe locations array with location details, lat and lng co-ordinates
    var locations = [
    [`<div class="infoContent">
        <h4>Copper Lab</h4>
        <p>91 Newry St, Banbridge BT32 3EF</p>
        <a href="https://goo.gl/maps/fUqGMN3HAFiPPxBr7" target="_blank">Get Directions</a>
    </div>`, 54.346834, -6.271724],
    [`<div class="infoContent">
        <h4>Blend & Batch</h4>
        <p>104 Newry St, Banbridge BT32 3HE</p>
        <a href="https://g.page/blendxbatch?share" target="_blank">Get Directions</a>
    </div>`, 54.346274, -6.2715333],
    [`<div class="infoContent">
        <h4>Established</h4>
        <p>54 Hill St, Belfast BT1 2LB</p>
        <a href="https://g.page/establishedcoffee?share" target="_blank">Get Directions</a>
    </div>`, 54.602635, -5.927208],
    [`<div class="infoContent">
        <h4>District</h4>
        <p>82 Stranmillis Rd, Belfast BT9 5AW</p>
        <a href="https://goo.gl/maps/4oFDVTNxyMVhRxgg7" target="_blank">Get Directions</a>
    </div>`, 54.578898, -5.934174],
    [`<div class="infoContent">
        <h4>Kaffe O</h4>
        <p>411 Ormeau Rd, Ormeau, Belfast BT7 3GP</p>
        <a href="https://goo.gl/maps/1Bs1WqxjugwsTRkz9" target="_blank">Get Directions</a>
    </div>`, 54.576818, -5.91823],
    [`<div class="infoContent">
        <h4>Guilt Trip Coffee + Donuts</h4>
        <p>4 Orangefield Ln, Belfast BT5 6BW</p>
        <a href="https://goo.gl/maps/h41jqD4KNhnZ5uB47" target="_blank">Get Directions</a>
    </div>`, 54.590902, -5.880407],
    [`<div class="infoContent">
        <h4>Babushka Kitchen Cafe</h4>
        <p>S Pier, Portrush BT56 8FN</p>
        <a href="https://g.page/babushkaportrush?share" target="_blank">Get Directions</a>
    </div>`, 55.205734, -6.65635],
    [`<div class="infoContent">
        <h4>Bothy Whitepark Bay</h4>
        <p>164 Whitepark Rd, Dunseverick, Bushmills BT57 8SS</p>
        <a href="https://goo.gl/maps/DLYj8RWn7dEiCVeo6" target="_blank">Get Directions</a>
    </div>`, 55.230325, -6.41889],
    [`<div class="infoContent">
        <h4>3FE</h4>
        <p>32-34 Grand Canal Street Lower, Grand Canal Dock, Dublin, Ireland</p>
        <a href="https://goo.gl/maps/yTSSqc6RAiHw1wft8" target="_blank">Get Directions</a>
    </div>`, 53.339959, -6.241968],
    [`<div class="infoContent">
        <h4>Love Supreme</h4>
        <p>57 Manor St, Stoneybatter, Dublin 7, Ireland</p>
        <a href="https://goo.gl/maps/1gswadMBHBRBAYii9" target="_blank">Get Directions</a>
    </div>`, 53.353033, -6.285258],
    [`<div class="infoContent">
        <h4>Thru The Green</h4>
        <p>Dundrum Road, Windy Arbour, Dublin 14, Ireland</p>
        <a href="https://goo.gl/maps/hUna5c3R4TihH27y5" target="_blank">Get Directions</a>
    </div>`, 53.301558, -6.245782],
    [`<div class="infoContent">
        <h4>Kaph</h4>
        <p>31 Drury St, Dublin 2, D02 Y684, Ireland</p>
        <a href="https://g.page/Kaphsc?share" target="_blank">Get Directions</a>
    </div>`, 53.342594, -6.26324],
    [`<div class="infoContent">
        <h4>Clement & Pekoe</h4>
        <p>50 William St S, Dublin 2, D02 DE93, Ireland</p>
        <a href="https://goo.gl/maps/nbktY9UMqphPwcMw5" target="_blank">Get Directions</a>
    </div>`, 53.341534, -6.262759],
    [`<div class="infoContent">
        <h4>Alchemy Coffee And Books</h4>
        <p>123 Barrack St, The Lough, Cork, T12 A594, Ireland</p>
        <a href="https://goo.gl/maps/tMpXUrUzT5A6bBJZ8" target="_blank">Get Directions</a>
    </div>`, 51.894023, -8.477618],
    [`<div class="infoContent">
        <h4>Cork Coffee Roasters</h4>
        <p>2 Bridge St, Victorian Quarter, Cork, Ireland</p>
        <a href="https://goo.gl/maps/dGVP5mcjAujptRM38" target="_blank">Get Directions</a>
    </div>`, 51.90149, -8.470001],
    [`<div class="infoContent">
        <h4>Three Fools Coffee</h4>
        <p>Grand Parade, Centre, Cork, Ireland</p>
        <a href="https://goo.gl/maps/g2V6v6s2a4UDypCV8" target="_blank">Get Directions</a>
    </div>`, 51.896867, -8.475005],
    [`<div class="infoContent">
        <h4>Dukes Coffee Company</h4>
        <p>4 Carey's Ln, Centre, Cork, Ireland</p>
        <a href="https://goo.gl/maps/cSYxtDwPxuJHK8Vw9" target="_blank">Get Directions</a>
    </div>`, 51.899119, -8.474164],
    [`<div class="infoContent">
        <h4>Soma Coffee Company</h4>
        <p>23 Tuckey St, Centre, Cork, T12 WD38, Ireland</p>
        <a href="https://g.page/somacoffeecompany?share" target="_blank">Get Directions</a>
    </div>`, 51.896994, -8.475824],
    [`<div class="infoContent">
        <h4>The Shack</h4>
        <p>Marblehill, Marble Hill, Co. Donegal, Ireland</p>
        <a href="https://goo.gl/maps/cSYxtDwPxuJHK8Vw9" target="_blank">Get Directions</a>
    </div>`, 55.176139, -7.902022],
    [`<div class="infoContent">
        <h4>Caffe Banba</h4>
        <p>Malin St, Gort Glebe, Carndonagh, Co. Donegal, F93 Y798, Ireland</p>
        <a href="https://goo.gl/maps/gd39wsR3ELHUVoMZA" target="_blank">Get Directions</a>
    </div>`, 55.251706, -7.261266],
    [`<div class="infoContent">
        <h4>Coffeewerk + Press</h4>
        <p>4 Quay St, Galway, Ireland</p>
        <a href="https://g.page/coffeewerkandpress?share" target="_blank">Get Directions</a>
    </div>`, 53.271343, -9.053964],
    [`<div class="infoContent">
        <h4>Urban Grind</h4>
        <p>8 William St W, Galway, H91 YA6X, Ireland</p>
        <a href="https://goo.gl/maps/xRCtgeEyaNTWiNYe6" target="_blank">Get Directions</a>
    </div>`, 53.270023, -9.059692],
    [`<div class="infoContent">
        <h4>Shells Cafe</h4>
        <p>Seafront, Strandhill, Co. Sligo, Ireland</p>
        <a href="https://goo.gl/maps/kYkkXhDQ4TnHxhT59" target="_blank">Get Directions</a>
    </div>`, 54.270093, -8.609405],
    [`<div class="infoContent">
        <h4>Rift Coffee</h4>
        <p>30 Upper Mallow St, Limerick, V94 EY22, Ireland</p>
        <a href="https://goo.gl/maps/BLaTMSo8bxKEDg768" target="_blank">Get Directions</a>
    </div>`, 52.659867, -8.630078]
    ];
    
    // var for map to display ireland with a retro style and only zoom controls 
    var map = new google.maps.Map(document.getElementById('map'), {
          center: ireland,
          zoom: 6,
          disableDefaultUI: true,
          zoomControl: true,
          styles: [
          {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#93817c'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#a5b076'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#f5f1e6'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#f8c967'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#e9bc62'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#e98d58'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#db8555'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#806b63'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8f7d77'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }
        ]
    });
    
    // var to set a coffee cup icon to be displayed as map marker
    var icon = {
        url: '/assets/images/coffee_icon.png',
        size: new google.maps.Size(34, 49),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 49)
    };
    
    // var to set the max width of the info window to be displayed when marker clicked
    var infowindow =  new google.maps.InfoWindow({maxWidth: 300});
    
    // var for map marker and incremental count
    var marker, count;

    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map: map,
        icon: icon,
        title: locations[count][0]
        });
        markers.push(marker);
        google.maps.event.addListener(marker, 'click', (function (marker, count) {
            return function () {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
        }
        })(marker, count));

        // zoom  when clicked on marker
        google.maps.event.addListener(marker,'click',function() {
            var pos = map.getZoom();
            map.setCenter(marker.getPosition());
            map.setZoom(14);
        });

        //set marker to bounce when mouseover
        marker.addListener('mouseover', function(){
            this.setAnimation(google.maps.Animation.BOUNCE);
        });

        // set marker to stop bouncing on mouseout
        marker.addListener('mouseout', function(){
            this.setAnimation(null);
        });
    }
}

// function called when location card clicked, scroll to map and show map marker
function OpenInfowindowForMarker(index) {
    google.maps.event.trigger(markers[index], 'click');
    document.getElementById("map").scrollIntoView({block: 'center',  behavior: 'smooth'});
}