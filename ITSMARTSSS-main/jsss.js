
/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToBerlin(map){
    map.setCenter({lat: 21.12908, lng:-101.67374});
    map.setZoom(14);
  }
  
  /**
   * Boilerplate map initialization code starts below:
   */
  
  //Step 1: initialize communication with the platform
  // In your own code, replace variable window.apikey with your own apikey
  var platform = new H.service.Platform({
    'apikey': 'IA6wsOsWVEGNVl1rjQ8REXSMmQCkW5sfBpkGL4I1kng'
  });
  var defaultLayers = platform.createDefaultLayers();
  
  //Step 2: initialize a map - this map is centered over Europe
  
  
  var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,{
    center: {lat: 21.12908, lng:-101.67374},
    zoom: 13,
    pixelRatio: window.devicePixelRatio || 1
  });
  // add a resize listener to make sure that the map occupies the whole container
  window.addEventListener('resize', () => map.getViewPort().resize());
  
  
  
  // Obtain the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  
  
  // Instantiate (and display) a map object:
  
  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Now use the map as required...
  window.onload = function () {
    moveMapToBerlin(map);
  }
  
  // Enable the event system on the map instance:
  var mapEvents = new H.mapevents.MapEvents(map);
  
  // Instantiate the default behavior, providing the mapEvents object:
  new H.mapevents.Behavior(mapEvents);
  
  // 'maptypes' variable holds the result of the H.service.Platform#createDefaultLayers call
  var mapSettings = new H.ui.MapSettingsControl({
    alignment: 'top-right',
    entries: [{
      name: 'Normal map',
      mapType: maptypes.normal
    }]
  });
  ui.addControl('mapsettings', mapSettings);
  
  
  // Provided that map is instantiated and there are some markers
  // on the map that must be inspected.
  map.getObjectAt(21.12908, -101.67374, (obj) => {
      if (obj && obj instanceof H.map.Marker) {
          console.log(obj.getGeometry());
      }
  });

  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function(){
      document.querySelector("body").classList.toggle("active");
  })
  
  
  