require('./bootstrap');
require('leaflet/dist/leaflet.js');
require('leaflet.fullscreen/Control.FullScreen')
require('leaflet.locatecontrol/dist/L.Control.Locate.min')

import Vue from 'vue'
import Index from "./components/Index";
import router from "./router";

const app = new Vue({
    el: '#app',
    components: {
        Index
    },
    router
});
