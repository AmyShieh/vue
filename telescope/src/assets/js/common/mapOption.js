/**
 * Created by Amy on 2017/11/1.
 */
define(function(require, exports, module){
  var mapOption = [
    {
      "featureType": "building",//建筑
      "elementType": "all",
      "stylers": {
        "color": "#2f3652"
      }
    }, {
      "featureType": "manmade",//人造的(什么破翻译，人造建筑物)
      "elementType": "all",
      "stylers": {
        "color": "#2f3652"
      }
    }, {
      "featureType": "green",
      "elementType": "all",
      "stylers": {
        "visibility": "off"
      }
    }, {
      "featureType": "water",//水
      "elementType": "all",
      "stylers": {
        "color": "#22273f"
      }
    }, {
      "featureType": "land",//陆地
      "elementType": "all",
      "stylers": {
        "color": "#2f3652"
      }
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": {
        "color": "#2f3652"
      }
    }, {
      "featureType": "poi",  //point of information
      "elementType": "labels",
      "stylers": {
        "visibility": "off"
      }
    }, {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#9496a1"
      }
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#9496a1",
        "hue": "#9496a1",
        "weight": "0.1",
        "lightness": -70,
        "saturation": 50,
        "visibility": "on"
      }
    },
    {
      "featureType": "subway",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    }, {
      "featureType": "highway",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    }, {
      "featureType": "boundary",
      "elementType": "all",
      "stylers": {
        "color": "#5b688b",
        "visibility": "on"
      }
    },{
      "featureType": "label",
      "elementType": "labels.icon",
      "stylers": {
        "visibility": "off"
      }
    }
  ];
  return mapOption;
})
