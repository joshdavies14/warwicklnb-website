import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faInstagram, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

import "./assets/main.scss";

import * as bootstrap from "bootstrap";

/* add icons to the library */
library.add(faInstagram, faFacebook, faYoutube, faTiktok);

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount("#app");
