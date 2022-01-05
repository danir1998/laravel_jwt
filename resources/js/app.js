require('./bootstrap');
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
