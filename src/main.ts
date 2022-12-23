import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
    faChevronLeft,
    faChevronRight,
    faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faFacebook,
    faYoutube,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import "./assets/main.scss";

import * as bootstrap from "bootstrap";

/* add icons to the library */
library.add(
    faInstagram,
    faFacebook,
    faYoutube,
    faTiktok,
    faChevronLeft,
    faChevronRight,
    faDownload,
);

const app = createApp(App);

Sentry.init({
    app,
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
        new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracePropagationTargets: [
                "localhost",
                "warwicklnb-website.vercel.app",
                /^\//,
            ],
        }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
