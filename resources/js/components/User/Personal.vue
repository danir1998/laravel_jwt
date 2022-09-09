<template>
    <div class="content">
        <div class="grid grid-cols-12 gap-1">
            <div class="col-span-3">
                <h1>asdsa</h1>
            </div>
            <div id="mapid" class="col-span-9 center-block" style=" height: calc(100vh - 52px);"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Personal",
        mounted() {
            var latlngs = [
                [45.51, -122.68],
                [37.77, -122.43],
                [34.04, -118.2]
            ];


            var mymap = L.map('mapid', {
                fullscreenControl: true,
                fullscreenControlOptions: {
                    position: 'topleft'
                }
            });

            var lc = L.control.locate({
                position: 'topright',
                strings: {
                    title: "Show me where I am, yo!"
                }
            }).addTo(mymap);

// request location update and set location
            // lc.start();

            var icon = new L.Icon.Default();
            icon.options.shadowSize = [0, 0];

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                // attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
            }).addTo(mymap);


            var polyline = L.polyline(latlngs, {color: 'green'}).addTo(mymap);

            mymap.setView(new L.LatLng(54.8618, 53.0719), 14);

        }
    }
</script>

<style scoped>

</style>
