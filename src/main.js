import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/scss/main.scss";

// BS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
