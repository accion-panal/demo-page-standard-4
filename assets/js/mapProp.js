

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2lvdmVyYWhlcm5hbmRlemJpZGF0YSIsImEiOiJjbDMwZHc4cmswMDdqM2NydmIzYWF0cGl4In0.hsYQFPebleAB4j6mRckMzQ';
const map = new mapboxgl.Map({
        
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-70.680628,-33.469970],
    // projection: 'globe',
    zoom: 9,
    
});
const promiseMap  = new Promise( 
    (resolve)=>{
                const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <span>Casa amoblada excelente ubicación</span>
                <br>
                <a href="property-details.html" name="VerDetalle"  class="more d-flex align-items-center float-start" target="_blank">
                <span class="label" id="getProperty">Ver Detalle</span>
                <span class="arrow"><span class="icon-keyboard_arrow_right"></span></span>
                </a>`)
                
                // create DOM element for the marker
                const el = document.createElement('div');
                el.id = 'marker';
                // el.style.backgroundImage = `${data.img != null && data.img != '' && data.img != undefined ? data.img : "images/Sin.png"}`;
                // el.style.width = `${50}px`;
                // el.style.height = `${50}px`;
                // el.style.backgroundSize = "100%";
            
                const marker = new mapboxgl.Marker({
                    color: '#000',
                    scale: .8
                })
            
                // create the marker
                new mapboxgl.Marker(el)
                
                    
                marker.setLngLat([-70.680628,-33.469970])
                      .setPopup(popup) // sets a popup on this marker
                      .addTo(map);

            

            //         map.on('click', (event) => {
            //             // If the user clicked on one of your markers, get its information.
            //             const features = map.queryRenderedFeatures(event.point, {
            //               layers: ['YOUR_LAYER_NAME'] // replace with your layer name
            //             });
            //             if (!features.length) {
            //               return;
            //             }
            //             const feature = features[0];
                      
            //             // Code from the next step will go here.
            //           });
            resolve()
        }
    )
        
      
    promiseMap.then(()=>{
          
        map.on('load', function () {
            map.resize();
        });
        map.on('style.load', () => {
            map.setFog({}); // Set the default atmosphere style

        });
    })
     




