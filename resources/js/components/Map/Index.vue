<template>
    <div>
        <h1>карта</h1>
        <div style="display: flex">
            <div style="flex: 1">
                <point-add v-for="coord in coords" :name="coord.name" :lat="coord.lat" :lon="coord.lon" ></point-add>
            </div>
            <div style="flex: 4">
                <div id="mapid" class="center-block" style="width: 100%; height: 900px;"></div>
            </div>
        </div>
    </div>
</template>

<script>

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "images/vendor/leaflet/dist/marker-icon-2x.png",
    iconUrl: "images/vendor/leaflet/dist/marker-icon.png",
    shadowUrl: "images/vendor/leaflet/dist/marker-shadow.png"
});

import PointAdd from "./PointAdd";

export default {
    name: "Index",
    components: {PointAdd},
    data: () => ({
        coords: []
    }),
    mounted() {
        var mymap = L.map('mapid');
        var icon = new L.Icon.Default();
        icon.options.shadowSize = [0,0];

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
        }).addTo(mymap);

        var latlngs = [
            [45.51, -122.68],
            [37.77, -122.43],
            [34.04, -118.2]
        ];

        var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);

        //

        let gpx = "/track.gpx";
        var track = new L.GPX(gpx, {async: true, display_wpt:false}, {collapsed: false}).on('loaded', function(e) {
            mymap.fitBounds(e.target.getBounds());
        }).addTo(mymap);

        L.control.layers({}, {'GPX': track}, {collapsed: false}).addTo(mymap);


        var marker = new L.Marker([17.385044, 78.486671]);
        marker.addTo(mymap);

        L.marker([51.5, -0.09]).addTo(mymap)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();

        mymap.setView([54.9044, 52.315], 13);

        mymap.on('click', (e) => {
            var coord = e.latlng;
            var lat = coord.lat;
            var lng = coord.lng;

            this.coords.push({name: "Название", lat: lat, lon: lng})

            let btn = document.createElement('button');
            btn.innerText = 'Delete Marker';
            btn.onclick =  function() {
                mymap.removeLayer(mp);
            }

            let mp = new L.Marker([lat, lng]).addTo(mymap).bindPopup(btn, {maxWidth: 'auto'});

            console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
        });
    }

}
</script>

<style scoped>

</style>
